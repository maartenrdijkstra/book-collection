<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index() {
        return AuthorResource::collection(Author::all());
    }

    public function store(StoreAuthorRequest $request) {
        $author = Author::create($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function update(StoreAuthorRequest $request, Author $author) {
        $author->update($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

     public function destroy(Author $author) {
        if ($author->books()->exists()) {
        return response()->json([
            'message' => 'Auteur kan niet worden verwijderd omdat er boeken aan gekoppeld zijn.'
        ], 400); // Bad Request
    }
        $author->delete();
        return response()->json(['message' => 'Auteur succesvol verwijderd']);
    }
}
