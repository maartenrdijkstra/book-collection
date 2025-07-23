<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import Form from "../components/Form.vue";
import { Book, createBook } from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const book = ref<Book>({
    id: 0,
    title: "",
    summary: "",
    author_id: 0,
});

const handleSubmit = async (data: Book) => {
    await createBook(data);
    router.push({ name: "books.overview" });
};
</script>
