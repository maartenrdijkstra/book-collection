<template>
    <div>
        <h2>Auteur bewerken</h2>
        <Form v-if="author" :author="author.value" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Form from "./components/Form.vue";
import { fetchAuthors, getAuthorById, updateAuthor } from "../store";

const route = useRoute();
const router = useRouter();

fetchAuthors();

const author = getAuthorById(route.params.id);

const handleSubmit = async (data) => {
    await updateAuthor(route.params.id, data);
    router.push({ name: "author.overview" });
};
</script>
