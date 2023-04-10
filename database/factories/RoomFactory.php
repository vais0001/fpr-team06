<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->numerify('RC###'),
            'floor' => $this->faker->numberBetween(1, 5),
            'temperature' => $this->faker->randomFloat(2, 15, 30),
            'co2' => $this->faker->numberBetween(380, 480),
            'energyStatus' => $this->faker->boolean,
        ];
    }
}
