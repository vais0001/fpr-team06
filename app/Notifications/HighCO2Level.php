<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class HighCO2Level extends Notification
{
    use Queueable;

    public $room_id;

    public function __construct($room_id)
    {
        $this->room_id = $room_id;
    }

    public function via($notifiable)
    {
        return ['database']; // Here you can add more channels like 'mail', 'sms' etc.
    }

    public function toDatabase($notifiable)
    {
        return [
            'room_id' => $this->room_id,
            'message' => 'The CO2 level is above 1000 in room ' . $this->room_id
        ];
    }
}
