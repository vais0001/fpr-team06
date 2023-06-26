<?php

namespace App\Http\Controllers;

use App\Imports\BookingDataImport;
use App\Models\Room;
use App\Models\RoomTime;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Imports\RoomTimesImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;


class RoomTimeController extends Controller
{
    public function showModel()  // Method for showing the view
    {
        return view('model');
    }

    public function import(Request $request)
    {
        $url = "https://api.open-meteo.com/v1/forecast?latitude=51.494931&longitude=3.609084&hourly=temperature_2m&past_days=92&forecast_days=1&timezone=Europe%2FBerlin";

        $json_data = file_get_contents($url);
        $result = json_decode($json_data);

        $timeCreation = now()->subSecond(1);

        $request->validate([
            'room_times' => 'required|mimes:xlsx,xls,csv'
        ]);
        $import = new RoomTimesImport;
        try {
            Excel::import($import, $request->file('room_times'));
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            return back()->withErrors(['errorTime' => '* File has invalid columns. Make sure the file is the correct format. (Column 1: Time, Column 3: CO2, Column 4: Temperature)']);
        }
        Room::where('id', request('set_room'))->update(array('updated_at' => now()->subSecond(10)));

        $roomTimes = RoomTime::all()->where('room_id', request('set_room'))->where('created_at', '>=', $timeCreation);

        $start_time = $roomTimes->first()->time;
        $end_time = strval(Carbon::parse($roomTimes->last()->time)->addDay(1));

        foreach ($result->hourly->time as $i => $time) {
            if ($time < $start_time || $time > $end_time) {
                unset($result->hourly->time[$i]);
                unset($result->hourly->temperature_2m[$i]);
            }
        }

        $currentHour = $roomTimes->first()->time;
        $nextHour = strval(Carbon::parse($currentHour)->addHour(1));
        $count = key($result->hourly->time);
        foreach ($roomTimes as $roomTime) {
            if ($roomTime->time >= $currentHour && $roomTime->time < $nextHour) {
                RoomTime::where('id', $roomTime->id)->update(array('outside_temperature' => round($result->hourly->temperature_2m[$count])));
            } else {
                try {
                    RoomTime::where('id', $roomTime->id)->update(array('outside_temperature' => round($result->hourly->temperature_2m[$count])));
                    $currentHour = strval(Carbon::parse($currentHour)->addHour(1));
                    $nextHour = strval(Carbon::parse($nextHour)->addHour(1));
                    $count++;
                } catch (\Exception $e) {
                    break;
                }
            }
        }
        return redirect()->route('rooms.index')->with('success', 'Imported successfully.');
    }

    public function importBookings(Request $request): \Illuminate\Http\RedirectResponse
    {
        $import = new BookingDataImport();
        Excel::import($import, $request->file('booking'));
        if ($import->data == null) {
            return back()->withErrors(['errorBooking' => '* Invalid file']);
        }
        $request->validate([
            'booking' => 'required|mimes:xlsx,xls,csv'
        ]);
        foreach ($import->data['rooms'] as $room) {
            $startHour = Carbon::parse($import->data['date'])->addHour(8);
            $endHour = Carbon::parse($import->data['date'])->addHour(17);
            $currentHour = $startHour;
            $nextHour = strval(Carbon::parse($currentHour)->addHour(1));
            preg_match('/\((.*?)\)/', $room['name'], $matches);
            $roomName = $matches[1];
            $roomTimes = RoomTime::where('room_id', '=', Room::where('name', $roomName)->first()->id)->where('time', '>=', $startHour)->where('time', '<=', $endHour)->orderBy('id')->get();
            $count = 0;
            foreach ($roomTimes as $roomTime) {
                if ($roomTime->time >= $currentHour && $roomTime->time < $nextHour && $count < count($room['bookings'])) {
                    $roomTime->update(['booked' => round($room['bookings'][$count]) == 1]);
                } else {
                    try {
                        $roomTime->update(array('booked' => round($room['bookings'][$count]) == 1));
                        $currentHour = strval(Carbon::parse($currentHour)->addHour(1));
                        $nextHour = strval(Carbon::parse($nextHour)->addHour(1));
                        $count++;
                    } catch (\Exception $e) {
                        break;
                    }
                }
            }
        }
        return redirect()->route('rooms.index')->with('success', 'Bookings added successfully.');
    }

    public function destroy(RoomTime $room_time)
    {
        $room = Room::find(request('set_room_destroy'));
        RoomTime::all()->where('room_id', request('set_room_destroy'))->where('created_at', '>=', $room->updated_at)->each->delete();
        return redirect()->route('rooms.index');
    }

    public function getData($roomName)
    {
        $data = [];
        $room = Room::where('name', $roomName)->orderBy('id')->get()->first();
        $roomTimes = $room->roomTime()->orderBy('id')->get();

        if ($roomTimes->isEmpty()) {
            return response()->json([]);
        }

        foreach ($roomTimes as $roomTime) {
            $data[] = [
                'id' => $room->id,
                'name' => $room->name,
                'latestTemperature' => $roomTime->temperature,
                'time' => $roomTime->time,
                'temperature' => $roomTime->temperature,
                'co2' => $roomTime->co2,
                'outside_temperature' => $roomTime->outside_temperature,
                'booked' => $roomTime->booked,
            ];
        }
        return response()->json($data);
    }
    public function getCo2Data(): \Illuminate\Http\JsonResponse
    {
        $roomData = [];
        $rooms = Room::all(); // Retrieve all rooms

        foreach ($rooms as $room) {
            $roomTimes = $room->roomTime()->orderBy('time', 'DESC')->take(2016)->get();

            $highestCo2Entry = $roomTimes->sortByDesc('co2')->first(); // Retrieve the entry with the highest CO2 level

            if ($highestCo2Entry) {
                $roomData[] = [
                    'room_id' => $room->id,
                    'room_name' => $room->name,
                    'co2' => $highestCo2Entry->co2,
                    'timestamp' => $highestCo2Entry->time,
                ];
            }
        }

        return response()->json($roomData);
    }
    public function importData(): \Illuminate\Http\JsonResponse
    {
        $roomTimes = RoomTime::orderBy('id')->get();
        $groupedRoomTimes = $roomTimes->groupBy('room_id');

        return response()->json($groupedRoomTimes);
    }
}
