<template>
    <div>
        <h2>Review bewerken</h2>
        <form v-if="review" @submit.prevent="handleSubmit">
            <label for="reviewer">Reviewer:</label>
            <input
                v-model="review.reviewer"
                type="text"
                required
                id="reviewer"
            />
            <label for="stars">Stars:</label>
            <input
                v-model="review.stars"
                type="number"
                min="1"
                max="5"
                step="1"
                required
                id="stars"
            />
            <label for="content">Content:</label>
            <textarea
                v-model="review.content"
                id="content"
                cols="120"
                rows="4"
                required
            ></textarea>
            <button type="submit">Opslaan</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Review, reviewStore } from "../store";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

reviewStore.actions.getAll();

const originalReview = reviewStore.getters.getById(Number(route.params.id));

const review = ref<Review>({ ...originalReview.value });

const handleSubmit = async () => {
    await reviewStore.actions.update(Number(route.params.id), review.value);
    router.push({ name: "books.show", params: { id: review.value.book_id } });
};
</script>
