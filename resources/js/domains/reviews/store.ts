import { storeModuleFactory } from "../../services/store";

export interface Review {
    id: number;
    reviewer: string;
    content: string;
    stars: number;
    bookId: number;
}

export const reviewStore = storeModuleFactory("reviews");
