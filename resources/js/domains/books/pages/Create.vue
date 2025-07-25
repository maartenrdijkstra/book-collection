<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import Form from "../components/Form.vue";
import { Book } from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { storeModuleFactory } from "../../../services/store";

const router = useRouter();

const book = ref<Book>({
    id: 0,
    title: "",
    summary: "",
    author_id: 0,
});

const handleSubmit = async (data: Book) => {
    await storeModuleFactory("books").actions.create(data);
    router.push({ name: "books.overview" });
};
</script>
