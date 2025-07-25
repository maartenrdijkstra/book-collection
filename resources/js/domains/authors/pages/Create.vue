<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import Form from "./components/Form.vue";
import { Author } from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { storeModuleFactory } from "../../../services/store";

const router = useRouter();

const author = ref({
    id: 0,
    name: "",
});

const handleSubmit = async (data: Author) => {
    await storeModuleFactory("authors").actions.create(data);
    router.push({ name: "authors.overview" });
};
</script>
