import { storeModuleFactory } from "../../services/store";

export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
}

export const bookStore = storeModuleFactory("books");
