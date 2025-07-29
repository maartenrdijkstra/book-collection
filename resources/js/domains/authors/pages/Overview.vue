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
import { storeModuleFactory } from "../../../services/store";
import { ref } from "vue";

const authorStore = storeModuleFactory("authors");
authorStore.actions.getAll();
const authors: ComputedRef = authorStore.getters.all;

let message = ref<string>("");
const deleteAuthor = async (id: number) => {
    try {
        message.value = "";
        await authorStore.actions.delete(id);
        authorStore.actions.getAll();
    } catch (error: any) {
        if (error.response?.status === 422) {
            message.value = error.response.data.message;
        } else {
            message.value = "Er ging iets mis bij het verwijderen.";
        }
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
