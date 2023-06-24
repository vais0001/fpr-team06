<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomTime extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_id',
        'time',
        'co2',
        'temperature',
        'outside_temperature',
        'booked',
    ];
}
