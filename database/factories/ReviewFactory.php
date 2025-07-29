<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'reviewer' => $this->faker->word,
            'stars' => $this->faker->numberBetween(1, 5),
            'content' => $this->faker->paragraph(3, true),
            'book_id' => \App\Models\Book::factory(),
        ];
    }
}
