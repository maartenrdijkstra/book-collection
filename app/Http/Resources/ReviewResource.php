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
            'reviewer' => $this->reviewer,
            'stars' => $this->stars,
            'content' => $this->content,
            'book_id' => $this->book_id,
        ];
    }
}
