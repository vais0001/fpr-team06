<?php

namespace App\Imports;

use App\Models\Room;
use App\Models\RoomTime;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Illuminate\Http\Request;

class RoomTimesImport implements ToModel, WithStartRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row): \Illuminate\Database\Eloquent\Model|RoomTime|null
    {

        return new RoomTime([
            'room_id' => request('set_room'),
            'time' => $row[0],
            'co2' => $row[2],
            'temperature' => $row[3]
        ]);
    }
    public function startRow(): int
    {
        return 3;
    }
}
