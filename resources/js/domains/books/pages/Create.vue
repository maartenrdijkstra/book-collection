<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import Form from "../components/Form.vue";
import { createBook, fetchBooks } from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const book = ref({
    title: "",
    summary: "",
    author_id: null,
});

fetchBooks();

const handleSubmit = async (data) => {
    await createBook(data);
    router.push({ name: "books.overview" });
};
</script>
