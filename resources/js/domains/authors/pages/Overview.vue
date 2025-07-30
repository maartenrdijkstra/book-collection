<template>
    <p class="error-msg" v-if="message">{{ message }}</p>
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
import { ref } from "vue";
import { authorStore } from "../store";

authorStore.actions.getAll();
const authors: ComputedRef = authorStore.getters.all;

let message = ref<string>("");
const deleteAuthor = async (id: number) => {
    try {
        await authorStore.actions.delete(id);
    } catch (error: any) {
        message.value = error.response.data.message;
    }
};
</script>

<style>
.error-msg {
    color: red;
    font-weight: bold;
    margin: 1rem;
}
</style>
