<?php

namespace Database\Factories;

use App\Models\Book;
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
            'reviewer' => $this->faker->name,
            'stars' => $this->faker->numberBetween(1, 5),
            'content' => $this->faker->paragraph(3, true),
            'book_id' => rand(1, Book::count())
        ];
    }
}
