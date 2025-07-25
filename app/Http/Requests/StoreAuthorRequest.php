<?php

namespace App\Http\Requests;

use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Illuminate\Foundation\Http\FormRequest;

class StoreAuthorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
        ];
    }

    
    public function store(StoreAuthorRequest $request) {
        $author = Author::create($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }
}
