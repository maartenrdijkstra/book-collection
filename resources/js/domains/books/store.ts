import axios from "axios";
import { ref, computed } from "vue";

export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
}
// state
const books = ref([]);

// getters
export const getAllBooks = computed(() => books.value);

export const getBookById = (id: Number) =>
    computed(() => books.value.find((book) => book["id"] == id));

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

export const updateBook = async (id: Number, updatedBook: Book) => {
    const { data } = await axios.put(`/api/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data.data;
};

export const deleteBook = async (id: Number) => {
    await axios.delete(`/api/books/${id}`);
    books.value = books.value.filter((book) => book["id"] !== id);
};
