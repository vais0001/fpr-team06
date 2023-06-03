<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rooms')->insert(['name' => 'RC011', 'floor' => 0, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC016', 'floor' => 0, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC017', 'floor' => 0, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC020', 'floor' => 0, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC021', 'floor' => 0, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC023', 'floor' => 0, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC102', 'floor' => 1, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC103', 'floor' => 1, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC104', 'floor' => 1, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC201', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC202', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC203', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC204', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC205', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC108', 'floor' => 1, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC210', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC211', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC213', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC214', 'floor' => 2, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC301', 'floor' => 3, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC304', 'floor' => 3, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC305', 'floor' => 3, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC309', 'floor' => 3, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC315', 'floor' => 3, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC316', 'floor' => 3, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC317', 'floor' => 3, 'created_at' => now()]);
        DB::table('rooms')->insert(['name' => 'RC318', 'floor' => 3, 'created_at' => now()]);
    }
}
