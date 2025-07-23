<template>
    <div>
        <h2>Auteur bewerken</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Form from "./components/Form.vue";
import { Author, fetchAuthors, getAuthorById, updateAuthor } from "../store";

const route = useRoute();
const router = useRouter();

fetchAuthors();

const author = ref<Author>({
    id: 0,
    name: "",
});

const authorById = getAuthorById(Number(route.params.id)).value;

if (authorById) {
    author.value = authorById;
} else {
    // fallback of error-afhandeling
    author.value = { id: 0, name: "Onbekend" };
}

const handleSubmit = async (data: Author) => {
    await updateAuthor(Number(route.params.id), data);
    router.push({ name: "authors.overview" });
};
</script>
