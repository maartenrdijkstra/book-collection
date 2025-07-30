<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
{
    use HasFactory;
    
         protected $fillable = ['reviewer', 'stars', 'content', 'book_id'];

    public function books() {
        return $this->belongsTo(Book::class);
    }
}
