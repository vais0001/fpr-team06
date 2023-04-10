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
    public function show($index)
    {
        $rooms = Room::all();
        $selectedRoom = Room::find($index);
        return view('rooms.show', compact('rooms', 'selectedRoom'));
    }
    public function create()
    {
        return view('rooms.create');
    }
    public function store()
    {
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
