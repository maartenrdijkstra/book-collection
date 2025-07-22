import axios from "axios";
import { ref, computed } from "vue";

class Book {
    constructor(
        public title: string,
        public summary: string,
        public author_id: number
    ) {}
}
// state
const books = ref([]);

await axios.get("/sanctum/csrf-cookie");

// getters
export const getAllBooks = computed(() => books.value);

// actions
export const fetchBooks = async () => {
    const { data } = await axios.get("/api/books");
    if (!data) return;
    books.value = data.data;
};

export const createBook = async (newBook: Book) => {
    const { data } = await axios.post("/api/books", newBook, {
        withCredentials: true,
    });
    if (!data) return;
    books.value = data.data;
};
