<template>
    <form @submit.prevent="handleSubmit">
        <label>Titel:</label>
        <input v-model="form.title" type="text" required />

        <label>Samenvatting:</label>
        <textarea v-model="form.summary" required></textarea>

        <label>Auteur:</label>
        <select v-model.number="form.author_id" required>
            <option
                v-for="author in authors"
                :key="author.id"
                :value="author.id"
            >
                {{ author.name }}
            </option>
        </select>

        <button type="submit">Opslaan</button>
    </form>
</template>

<script setup lang="ts">
import { ComputedRef, ref } from "vue";
import { Book } from "../store";
import { storeModuleFactory } from "../../../services/store";

const authorStore = storeModuleFactory("authors");

authorStore.actions.getAll();

const authors: ComputedRef = authorStore.getters.all;

const props = defineProps<{ book: Book }>();

const emit = defineEmits(["submit"]);
const form = ref({ ...props.book });

const handleSubmit = () => emit("submit", form.value);
</script>
