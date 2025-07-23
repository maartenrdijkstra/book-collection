import axios from "axios";
import { ref, computed } from "vue";
import {
    deleteRequest,
    getRequest,
    postRequest,
    putRequest,
} from "../../services";

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
    const { data } = await getRequest("/books");
    if (!data) return;
    books.value = data.data;
};

export const createBook = async (newBook: Book) => {
    const { data } = await postRequest("/books", newBook);
    if (!data) return;
    books.value = data.data;
};

export const updateBook = async (id: Number, updatedBook: Book) => {
    const { data } = await putRequest(`/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data.data;
};

export const deleteBook = async (id: Number) => {
    await deleteRequest(`/books/${id}`);
    books.value = books.value.filter((book) => book["id"] !== id);
};
