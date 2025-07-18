import axios from "axios";
import { ref, computed } from "vue";

// state
const books = ref([]);

// getters
export const getAllBooks = computed(() => books.value);

// actions
export const fetchBooks = async () => {
    const { data } = await axios.get("/api/books");
    console.log("Books fetched:", data); // ✅ voeg dit toe
    if (!data) return;
    books.value = data;
};
