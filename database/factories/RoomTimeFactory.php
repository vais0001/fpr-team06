<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RoomTime>
 */
class RoomTimeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'room_id' => RoomFactory::new(),
            'time' => $this->faker->dateTime(),
            'co2' => $this->faker->numberBetween(300,500),
            'temperature' => $this->faker->numberBetween(20,30),
        ];
    }
}
