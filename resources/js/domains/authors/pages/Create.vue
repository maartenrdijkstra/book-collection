<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import Form from "./components/Form.vue";
import { createAuthor, Author } from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const author = ref({
    id: 0,
    name: "",
});

const handleSubmit = async (data: Author) => {
    await createAuthor(data as Author);
    router.push({ name: "authors.overview" });
};
</script>
