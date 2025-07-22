import axios from "axios";
import { ref, computed } from "vue";

// state
const authors = ref([]);

// getters
export const getAllAuthors = computed(() => authors.value);

// actions
export const fetchAuthors = async () => {
    const response = await axios.get("/api/authors");
    authors.value = response.data.data;
};
