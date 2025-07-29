<?php

namespace App\Http\Requests;

class StoreReviewRequest extends BaseFormRequest
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
            'reviewer' => 'required|string|max:255',
            'stars' => 'required|integer|min:1|max:5',
            'content' => 'required|string',
            'book_id' => 'required|exists:book,id'
        ];
    }
}