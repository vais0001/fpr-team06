<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index()
    {
        $rooms = Room::all();
        return view('rooms.index', compact('rooms'));
    }
    public function show()
    {
        return view('rooms.show');
    }
    public function create()
    {
        return view('rooms.create');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'floor' => 'required|integer',
            'temperature' => 'required|integer',
            'co2' => 'required|integer',
            'energyStatus' => 'required|boolean',
        ]);

        $room = new Room([
            'name' => $validatedData['name'],
            'floor' => $validatedData['floor'],
            'temperature' => $validatedData['temperature'],
            'co2' => $validatedData['co2'],
            'energyStatus' => $validatedData['energyStatus'],
        ]);

        $room->save();

        return redirect()->route('rooms.index');
    }
    public function edit()
    {
        return view('rooms.edit');
    }
    public function update()
    {
        return redirect()->route('rooms.index');
    }
    public function destroy()
    {
        return redirect()->route('rooms.index');
    }
}
