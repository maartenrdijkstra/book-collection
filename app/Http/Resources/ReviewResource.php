<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'stars' => $this->stars,
            'text' => $this->text,
            'book' => [
                'id' => $this->book?->id,
                'title' => $this->book?->title,
                'summary' => $this->book?->summary,
                'author' => [
                    'id' => $this->book?->author?->id,
                    'name' => $this->book?->author?->name,
                ],
            ],
        ];
    }
}
