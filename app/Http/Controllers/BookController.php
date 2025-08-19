<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;

class BookController extends Controller {
    public function index() {
        return BookResource::collection(Book::all());
    }

    public function store(StoreBookRequest $request) {
        $book = Book::create($request->validated());

        $books = Book::all();
        return BookResource::collection($books);
    }

    public function update(StoreBookRequest $request, Book $book) {
        $book->update($request->validated());

        $books = Book::all();
        return BookResource::collection($books);
    }

    public function destroy(Book $book) {
        if ($book->reviews()->exists()) {
            throw new HttpResponseException(response()->json([
                'message' => 'Dit boek kan niet worden verwijderd omdat er nog reviews aan gekoppeld zijn.'
            ], 422));
        }
        $book->delete();
        return response()->json(['message' => 'Boek succesvol verwijderd']);
    }
}
