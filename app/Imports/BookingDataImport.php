<?php

namespace App\Imports;

use App\Models\RoomTime;
use Illuminate\Support\Carbon;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;

class BookingDataImport implements ToCollection
{
    public function collection(Collection $rows)
    {
        try{
            $dateExcel = intval($rows[1][1]); // Retrieve the date from the second row, first column
            $date = Carbon::createFromDate(1899, 12, 30)->addDays($dateExcel)->format('m/d/Y'); // Convert the Excel date to a Carbon date

            $roomData = [];

            for ($i = 102; $i < 105; $i++) {
                $roomName = $rows[$i][1];
                $bookings = [];

                for ($j = 2; $j < 11; $j++) {
                    $bookings[] = $rows[$i][$j];
                }

                $room = [
                    'name' => $roomName,
                    'bookings' => $bookings,
                ];

                $roomData[] = $room;
            }

            $data = [
                'date' => $date,
                'rooms' => $roomData,
            ];
            $this->data = $data;
        }catch (\Exception){
            $this->data = null;
        }
    }
}
