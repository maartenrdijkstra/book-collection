<template>
    <div v-if="book">
        <h2>
            {{ book.title }} by
            {{ authorStore.getters.getById(book.author_id).value?.name }}
        </h2>
        <h4>Samenvatting</h4>
        <p>{{ book.summary }}</p>
        <h4>Reviews</h4>
    </div>

    <div v-else>
        <h2>Loading...</h2>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { storeModuleFactory } from "../../../services/store";
import { bookStore, reviewStore } from "../store";
import { authorStore } from "../../authors/store";

const route = useRoute();
const router = useRouter();

authorStore.actions.getAll();
bookStore.actions.getAll();
reviewStore.actions.getAll();

const book = bookStore.getters.getById(Number(route.params.id));
const reviews = reviewStore.getters.all;
const authors = authorStore.getters.all;

console.log(reviews.value);
console.log(authors.value);
</script>

<style scoped>
h2 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
}

h4 {
    font-size: 28px;
    font-weight: bold;
}
p {
    margin-bottom: 2rem;
}
</style>
