<template>
    <div>
        <h2>Auteur bewerken</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeModuleFactory } from "../../../services/store";
import { Author } from "../store";
import Form from "../pages/components/Form.vue";

const route = useRoute();
const router = useRouter();

const authorStore = storeModuleFactory("authors");

authorStore.actions.getAll();

const author = authorStore.getters.getById(Number(route.params.id));

console.log(author);

const handleSubmit = async (data: Author) => {
    await authorStore.actions.update(Number(route.params.id), data);
    router.push({ name: "authors.overview" });
};
</script>
