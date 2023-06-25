<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    // app/Console/Kernel.php

    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            $this->checkCO2Levels();
        })->everyMinute();
    }

    public function checkCO2Levels()
    {
        $rooms = DB::table('room_times')->where('co2', '>', 1000)->get();

        foreach($rooms as $room)
        {
            User::all()->each(function($user) use ($room) {
                $user->notify(new HighCO2Level($room->room_id));
            });
        }
    }


    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
