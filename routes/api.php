<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/books", [BookController::class, 'index']);
Route::get("/authors", [AuthorController::class, 'index']);
Route::post("/books", [BookController::class, 'store']);
Route::post("/authors", [AuthorController::class, 'store']);
Route::put('/books/{book}', [BookController::class, 'update']);
Route::put('/authors/{author}', [AuthorController::class, 'update']);
Route::delete('/books/{book}', [BookController::class, 'destroy']);
Route::delete('/authors/{author}', [AuthorController::class, 'destroy']);