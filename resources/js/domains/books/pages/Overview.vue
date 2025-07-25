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
            <td>{{ book.author.name ?? "Onbekend" }}</td>
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
import { ComputedRef } from "vue";
import { storeModuleFactory } from "../../../services/store";

const bookStore = storeModuleFactory("books");

bookStore.actions.getAll();

const books: ComputedRef = bookStore.getters.all;

const deleteBook = async (id: number) => {
    await bookStore.actions.delete(id);
    bookStore.actions.getAll(); // Refresh the list after deletion
};
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
