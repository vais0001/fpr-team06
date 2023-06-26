<?php

namespace App\Imports;

use App\Models\RoomTime;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\WithValidation;

class RoomTimesImport implements ToModel, WithStartRow, WithValidation
{
    /**
     * @param array $row
     *
     * @return Model|RoomTime|null
     */
    public function model(array $row): Model|RoomTime|null
    {
        return new RoomTime([
            'room_id' => request('set_room'),
            'time' => $row[0],
            'co2' => round($row[2]),
            'temperature' => round($row[3]),
        ]);
    }
    public function startRow(): int
    {
        return 3;
    }

    public function rules(): array
    {
        return [
            '2' => function($attribute, $value, $onFailure) {
                if ($value < 100 || $value > 1000) {
                    $onFailure('Invalid file');
                }
            }
        ];
    }
}
