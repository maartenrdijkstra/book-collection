<template>
    <table>
        <tr>
            <th>Name</th>
            <th colspan="2">Actions</th>
        </tr>
        <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
            <td>
                <RouterLink
                    v-if="author && author.id"
                    :to="{ name: 'authors.edit', params: { id: author.id } }"
                >
                    Bewerken
                </RouterLink>
            </td>
            <td><button @click="deleteAuthor(author.id)">Verwijder</button></td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import { ComputedRef } from "vue";
import { deleteAuthor, fetchAuthors, getAllAuthors } from "../store";

fetchAuthors();
const authors: ComputedRef = getAllAuthors;
</script>
