<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in getAllBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
        </tr>
    </table>
</template>

<script setup>
import { onMounted } from "vue";
import { fetchBooks, getAllBooks } from "../store";

onMounted(() => {
    fetchBooks();
});
</script>
