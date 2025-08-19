<template>
    <div v-if="book">
        <h2>
            {{ book.title }} by
            {{ authorStore.getters.getById(book.author_id).value?.name }}
        </h2>
        <h4>Samenvatting</h4>
        <p>{{ book.summary }}</p>

        <button>Maak Nieuwe Review</button>
        <form @submit="postReview(review)">
            <table>
                <thead>
                    <tr>
                        <th>
                            <label for="reviewer">Reviewer</label>
                        </th>
                        <th>
                            <label for="stars">Stars</label>
                        </th>
                        <th>
                            <label for="content">Content</label>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                v-model="review.reviewer"
                                id="reviewer"
                                type="text"
                                placeholder="John Smith"
                                required
                            />
                        </td>
                        <td>
                            <input
                                v-model="review.stars"
                                id="stars"
                                type="number"
                                min="1"
                                max="5"
                                step="1"
                                required
                                value="3"
                            />
                        </td>
                        <td>
                            <textarea
                                v-model="review.content"
                                id="content"
                                type="text"
                                cols="120"
                                rows="4"
                                placeholder="Best book ever"
                                required
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
                <tr>
                    <td colspan="3">
                        <button type="submit">Voeg toe</button>
                    </td>
                </tr>
            </table>
        </form>

        <h4>Reviews</h4>
        <ErrorMessage />
        <table>
            <thead>
                <tr>
                    <th>Reviewer</th>
                    <th>Stars</th>
                    <th>Content</th>
                    <th colspan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="review in filteredReviews" :key="review.id">
                    <td>{{ review.reviewer }}</td>
                    <td>{{ review.stars }}</td>
                    <td>{{ review.content }}</td>
                    <td>
                        <router-link :to="`/reviews/${review.id}`">
                            <button>Update review</button>
                        </router-link>
                    </td>
                    <td>
                        <button @click="deleteReview(review.id)">
                            Verwijder
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-else>
        <h2>Loading...</h2>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { storeModuleFactory } from "../../../services/store";
import { bookStore, Review, reviewStore } from "../store";
import { authorStore } from "../../authors/store";
import { computed, ref } from "vue";
import ErrorMessage from "../../../ErrorMessage.vue";

const route = useRoute();
const router = useRouter();

authorStore.actions.getAll();
bookStore.actions.getAll();
reviewStore.actions.getAll();

const book = bookStore.getters.getById(Number(route.params.id));
const reviews = reviewStore.getters.all;

const review = ref({
    id: 0,
    reviewer: "",
    stars: 3,
    content: "",
    book_id: 0,
});

const filteredReviews = computed(() =>
    reviews.value.filter(({ book_id }) => book_id === Number(route.params.id))
);

const postReview = async (data: Review) => {
    const review: Review = {
        book_id: Number(route.params.id),
        reviewer: data.reviewer,
        stars: data.stars,
        content: data.content,
    };
    console.log(review);
    await storeModuleFactory("reviews").actions.create(review);
};

const deleteReview = async (id: number) => {
    await reviewStore.actions.delete(id);
    reviewStore.actions.getAll();
};
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
