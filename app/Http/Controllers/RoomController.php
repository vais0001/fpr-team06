<?php

namespace App\Http\Controllers;

//use App\Imports\RoomsImport;
use App\Models\Room;
use App\Models\RoomTime;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class RoomController extends Controller
{
    public function index()
    {
        $rooms = Room::all();
        return view('dashboard', compact('rooms'));
    }
    public function show(Room $room)
    {
        return view('room.show', compact('room'));
    }
    public function create()
    {
        return view('room.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'time_id' => 'required',
        ]);
        Room::create($request->all());
        return redirect()->route('room.index')->with('success', 'Room created successfully.');
    }
    public function edit(Room $room)
    {
        return view('room.edit', compact('room'));
    }
    public function update(Request $request, Room $room)
    {
        $request->validate([
            'name' => 'required',
            'time_id' => 'required',
        ]);
        $room->update($request->all());
        return redirect()->route('room.index')->with('success', 'Room updated successfully');
    }
    public function destroy(Room $room)
    {
        $room->delete();
        return redirect()->route('room.index')->with('success', 'Room deleted successfully');
    }
//    public function import()
//    {
//        Excel::import(new RoomsImport, 'room_times.xlsx');
//        return redirect('/')->with('success', 'All good!');
//    }
}
