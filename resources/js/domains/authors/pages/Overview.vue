<template>
    <ErrorMessage />
    <table>
        <tr>
            <th>Name</th>
            <th colspan="2">Actions</th>
        </tr>
        <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
            <td>
                <RouterLink
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
import { ref } from "vue";
import { authorStore } from "../store";
import ErrorMessage from "../../../ErrorMessage.vue";

authorStore.actions.getAll();
const authors = authorStore.getters.all;

const message = ref("");
const deleteAuthor = async (id: number) => {
    await authorStore.actions.delete(id);
};
</script>
