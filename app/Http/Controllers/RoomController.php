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
        $rooms = Room::with('roomTime')->orderBy('id')->get();
        return view('rooms.index', compact('rooms'));
    }

    public function create()
    {
        return view('rooms.create');
    }
    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'floor' => 'required',
        ]);
        Room::create($request->all());
        return redirect()->route('rooms.index')->with('success', 'Room created successfully.');
    }
    public function edit(Room $room)
    {
        $room = Room::find($room->id);
        return view('rooms.edit', compact('room'));
    }
    public function update(Request $request, Room $room)
    {
        $request->validate([
            'name' => 'required',
            'floor' => 'required',
        ]);
        $room->update($request->all());
        return redirect()->route('rooms.index')->with('success', 'Room updated successfully');
    }
    public function destroy(Room $room)
    {
        $room->delete();
        return redirect()->route('rooms.index')->with('success', 'Room deleted successfully');
    }
}
