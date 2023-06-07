<?php

namespace App\Http\Controllers;

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
        $request->validate([
            'room_times' => 'required|mimes:xlsx,xls,csv'
        ]);
        Excel::import(new RoomTimesImport, $request->file('room_times'));
        Room::where('id', request('set_room'))->update(array('updated_at' => now()->subSecond(10)));
        return redirect()->route('rooms.index')->with('success', 'All good!');
    }
    public function store(Request $request)
    {
        $request->validate([
            'room_id' => 'required',
            'time' => 'required',
            'co2' => 'required',
            'temperature' => 'required',
        ]);
        RoomTime::create($request->all());
        return redirect()->route('room_time.index')->with('success', 'RoomTime created successfully.');
    }
    public function destroy(RoomTime $room_time)
    {
        $room = Room::find(request('set_room_destroy'));
        $roomTime = RoomTime::all()->where('room_id', request('set_room_destroy'))->where('created_at', '>=', $room->updated_at)->each->delete();
        return redirect()->route('rooms.index')->with('success', 'RoomTime deleted successfully');
    }

    public function getData()
    {
        $rooms = Room::all();

        $data = $rooms->map(function ($room) {
            $latestRoomTime = $room->roomTime()->latest('id')->first();

            return [
                'name' => $room->name,
                'temperature' => optional($latestRoomTime)->temperature,
            ];
        });

        return response()->json($data);
    }
}
