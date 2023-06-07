<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\RoomTime;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Imports\RoomTimesImport;
use Maatwebsite\Excel\Facades\Excel;

class RoomTimeController extends Controller
{
    public function import(Request $request): \Illuminate\Http\RedirectResponse
    {
        $url = "https://api.open-meteo.com/v1/forecast?latitude=51.494931&longitude=3.609084&hourly=temperature_2m&past_days=92&forecast_days=1&timezone=Europe%2FBerlin";

        $json_data = file_get_contents($url);
        $result = json_decode($json_data);

        $request->validate([
            'room_times' => 'required|mimes:xlsx,xls,csv'
        ]);
        Excel::import(new RoomTimesImport, $request->file('room_times'));
        Room::where('id', request('set_room'))->update(array('updated_at' => now()->subSecond(10)));

        $start_time = RoomTime::all()->where('room_id', request('set_room'))->first()->time;
        $end_time = RoomTime::all()->where('room_id', request('set_room'))->last()->time;
        $end_time = strval(Carbon::parse($end_time)->addDay(1));


        $roomTimes = RoomTime::all()->where('room_id', request('set_room'));
        $currentHour = $start_time;
        $nextHour = strval(Carbon::parse($currentHour)->addHour(1));
        foreach ($result->hourly->time as $i => $time) {
            if ($time < $start_time || $time > $end_time) {
                unset($result->hourly->time[$i]);
                unset($result->hourly->temperature_2m[$i]);
            }
        }
        $count = key($result->hourly->time);
        foreach ($roomTimes as $roomTime) {
            if ($roomTime->time >= $currentHour && $roomTime->time <= $nextHour) {
                RoomTime::where('id', $roomTime->id)->update(array('outside_temperature' => round($result->hourly->temperature_2m[$count])));
            }else {
                RoomTime::where('id', $roomTime->id)->update(array('outside_temperature' => round($result->hourly->temperature_2m[$count])));
                $currentHour =  strval(Carbon::parse($currentHour)->addHour(1));
                $nextHour =  strval(Carbon::parse($nextHour)->addHour(1));
                $count++;
            }
        }
        return redirect()->route('rooms.index')->with('success', 'All good!');
    }
    public function destroy(RoomTime $room_time)
    {
        $room = Room::find(request('set_room_destroy'));
        $roomTime = RoomTime::all()->where('room_id', request('set_room_destroy'))->where('created_at', '>=', $room->updated_at)->each->delete();
        return redirect()->route('rooms.index')->with('success', 'RoomTime deleted successfully');
    }
}
