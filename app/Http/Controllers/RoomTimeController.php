<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\RoomTime;
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
        return redirect('/dashboard')->with('success', 'All good!');
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
}
