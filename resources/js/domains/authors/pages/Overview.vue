<template>
    <table>
        <tr>
            <th>Name</th>
            <th colspan="2">Actions</th>
        </tr>
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <td>
                <RouterLink
                    :to="{ name: 'authors.edit', params: { id: author.id } }"
                    >Bewerk</RouterLink
                >
            </td>
            <td><button @click="deleteAuthor(author.id)">Verwijder</button></td>
        </tr>
    </table>
</template>

<script setup>
import { deleteAuthor, fetchAuthors, getAllAuthors } from "../store";
import { onMounted } from "vue";

fetchAuthors();
console.log(getAllAuthors);
</script>
