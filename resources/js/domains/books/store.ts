import { storeModuleFactory } from "../../services/store";

export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
}

export const bookStore = storeModuleFactory("books");

export interface Review {
    id: number;
    reviewer: string;
    stars: number;
    content: string;
    book_id: number;
}

export const reviewStore = storeModuleFactory("reviews");
