import { ref, computed } from "vue";
import { Book, fetchBooks, getAllBooks } from "../books/store";
import {
    deleteRequest,
    getRequest,
    postRequest,
    putRequest,
} from "../../services";

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
    const { data } = await getRequest<{ data: Author[] }>("/authors");
    if (!data) return;
    authors.value = data.data;
};

export const createAuthor = async (newAuthor: Author) => {
    const { data } = await postRequest<{ data: Author }>("/authors", newAuthor);
    if (!data) return;
    authors.value = [...authors.value, data.data];
};

export const updateAuthor = async (id: Number, updatedAuthor: Author) => {
    const { data } = await putRequest<{ data: Author }>(
        `/authors/${id}`,
        updatedAuthor
    );
    if (!data) return;
    authors.value = authors.value.map((author) =>
        author.id === id ? data.data : author
    );
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
        await deleteRequest(`/authors/${id}`);
        authors.value = authors.value.filter((author) => author["id"] !== id);
    }
};
