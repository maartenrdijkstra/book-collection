import { ref, computed } from "vue";
import {
    deleteRequest,
    getRequest,
    postRequest,
    putRequest,
} from "../../services";
import { Author } from "../authors/store";

export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
    author?: Author;
}
// state
const books = ref<Book[]>([]);

// getters
export const getAllBooks = computed(() => books.value);

export const getBookById = (id: Number) =>
    computed(() => books.value.find((book) => book.id === id));
// actions
export const fetchBooks = async () => {
    const { data } = await getRequest<{ data: Book[] }>("/books");
    if (!data) return;
    books.value = data.data;
};

export const createBook = async (newBook: Book) => {
    const { data } = await postRequest<{ data: Book }>("/books", newBook);
    if (!data) return;
    books.value = [...books.value, data.data];
};

export const updateBook = async (id: Number, updatedBook: Book) => {
    const { data } = await putRequest<{ data: Book }>(
        `/books/${id}`,
        updatedBook
    );
    if (!data) return;
    books.value = books.value.map((book) =>
        book.id === id ? data.data : book
    );
};

export const deleteBook = async (id: Number) => {
    await deleteRequest(`/books/${id}`);
    books.value = books.value.filter((book) => book["id"] !== id);
};
