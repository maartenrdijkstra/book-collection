dit is de hele file: books/Edit.vue:

<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
//@ts-ignore
import Form from "../components/Form.vue";
import { storeModuleFactory } from "../../../services/store";
import { Book } from "../store";

const route = useRoute();
const router = useRouter();

const bookStore = storeModuleFactory("books");

bookStore.actions.getAll();

const book = bookStore.getters.getById(Number(route.params.id));

const handleSubmit = async (data: Book) => {
    await bookStore.actions.update(Number(route.params.id), data);
    router.push({ name: "books.overview" });
};
</script>
