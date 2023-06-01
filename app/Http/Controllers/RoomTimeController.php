<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\RoomTime;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Imports\RoomTimesImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;

class RoomTimeController extends Controller
{
    public function import(Request $request)
    {

        $request->validate([
            'room_times' => 'required|mimes:xlsx,xls,csv'
        ]);
        Excel::import(new RoomTimesImport, $request->file('room_times'));
        Room::where('id', request('set_room'))->update(array('updated_at' => now()->subSecond(10)));
        return redirect('/import')->with('success', 'All good!');
    }
    public function index()
    {
        $rooms = Room::with('roomTime')->get();
        return view('import', compact('rooms'));
    }
    public function show(RoomTime $room_time)
    {
        return view('room_time.show', compact('room_time'));
    }
    public function create()
    {
        return view('room_time.create');
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
public function edit(RoomTime $room_time)
    {
        return view('room_time.edit', compact('room_time'));
    }
    public function update(Request $request, RoomTime $room_time)
    {
        $request->validate([
            'room_id' => 'required',
            'time' => 'required',
            'co2' => 'required',
            'temperature' => 'required',
        ]);
        $room_time->update($request->all());
        return redirect()->route('room_time.index')->with('success', 'RoomTime updated successfully');
    }
    public function destroy(RoomTime $room_time)
    {
        $room = Room::find(request('set_room_destroy'));
        $roomTime = RoomTime::all()->where('room_id', request('set_room_destroy'))->where('created_at', '>=', $room->updated_at)->each->delete();
//        dd($roomTime);
//        $rooms = RoomTime::where('room_id', request('set_room_destroy'))->where('created_at', '>', $room->updated_at)->get();
//        dd($rooms);
        return redirect()->route('importPage')->with('success', 'RoomTime deleted successfully');
    }
}
