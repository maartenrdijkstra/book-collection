import { storeModuleFactory } from "../../services/store";

export interface Author {
    id: number;
    name: string;
}

export const authorStore = storeModuleFactory("authors");
