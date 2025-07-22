import axios from "axios";
import { ref, computed } from "vue";

// state
const books = ref([]);

// getters
export const getAllBooks = computed(() => books.value);

// actions
export const fetchBooks = async () => {
    const response = await axios.get("/api/books");
    books.value = response.data.data;
};
