import axios from "axios";
import { ref, computed } from "vue";
import { Book, fetchBooks, getAllBooks } from "../books/store";

// state
const authors = ref<Author[]>([]);

export interface Author {
    id: number;
    name: string;
}

// getters
export const getAllAuthors = computed(() => authors.value);
export const getAuthorById = (id: Number) =>
    computed(() => authors.value.find((author) => author["id"] == id));

// actions
export const fetchAuthors = async () => {
    const { data } = await axios.get("/api/authors");
    if (!data) return;
    authors.value = data.data;
};

export const createAuthor = async (newAuthor: Author) => {
    const { data } = await axios.post("/api/authors", newAuthor, {
        withCredentials: true,
    });
    if (!data) return;
    authors.value = data.data;
};

export const updateAuthor = async (id: Number, updatedAuthor: Author) => {
    const { data } = await axios.put(`/api/authors/${id}`, updatedAuthor);
    if (!data) return;
    authors.value = data.data;
};

export const deleteAuthor = async (id: Number) => {
    const author: Author | undefined = authors.value.find(
        (author: Author) => author.id === id
    );
    await fetchBooks();
    const books: Book[] = getAllBooks.value;
    if (author && books.some((book) => book["id"] === author.id)) {
        throw new Error("Cannot delete author with associated books.");
    } else {
        await axios.delete(`/api/authors/${id}`);
        authors.value = authors.value.filter((author) => author["id"] !== id);
    }
};
