<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
            <th>Author</th>
            <th colspan="2">Actions</th>
        </tr>
        <tr v-for="book in books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td>{{ book.author?.name ?? "Onbekend" }}</td>
            <td>
                <template v-if="book.id">
                    <RouterLink
                        :to="{ name: 'books.edit', params: { id: book.id } }"
                        >Bewerk</RouterLink
                    >
                </template>
            </td>
            <td><button @click="deleteBook(book.id)">Verwijder</button></td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import { Author } from "../../authors/store";
import { fetchBooks, getAllBooks, deleteBook, Book } from "../store";
import { ComputedRef, onMounted, ref } from "vue";

fetchBooks();
const books: ComputedRef = getAllBooks;
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}
th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
    text-align: left;
}
tr:nth-child(even) {
    background-color: #f9f9f9;
}
tr:hover {
    background-color: #f1f1f1;
}
</style>
