<template>
    <ErrorMessage />
    <div>
        <table v-if="books">
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th colspan="3">Actions</th>
            </tr>
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.title }}</td>
                <td>
                    {{
                        authorStore.getters.getById(book.author_id).value?.name
                    }}
                </td>
                <td>
                    <RouterLink
                        :to="{
                            name: 'books.show',
                            params: { id: book.id },
                        }"
                        >Show</RouterLink
                    >
                </td>
                <td>
                    <RouterLink
                        :to="{
                            name: 'books.edit',
                            params: { id: book.id },
                        }"
                        >Bewerk</RouterLink
                    >
                </td>
                <td><button @click="deleteBook(book.id)">Verwijder</button></td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import { Book, bookStore } from "../store";
import { authorStore } from "../../authors/store";
import ErrorMessage from "../../../ErrorMessage.vue";

bookStore.actions.getAll();
authorStore.actions.getAll();

const books = bookStore.getters.all;

const deleteBook = async (id: number) => {
    await bookStore.actions.delete(id);
    bookStore.actions.getAll();
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
