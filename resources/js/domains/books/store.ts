import { Author } from "../authors/store";

export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
    author: Author;
}
