import axios from "axios";
import { ref, computed } from "vue";

// state
const authors = ref([]);

export class Author {
    constructor(public id: number, public name: string) {}
}

// getters
export const getAllAuthors = computed(() => authors.value);
export const getAuthorById = (id: Number) =>
    computed(() => authors.value.find((author) => author["id"] == id));

// actions
export const fetchAuthors = async () => {
    const response = await axios.get("/api/authors");
    authors.value = response.data.data;
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
    await axios.delete(`/api/author/${id}`);
    authors.value = authors.value.filter((author) => author["id"] !== id);
};
