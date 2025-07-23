// @ts-ignore
import Overview from "./pages/Overview.vue";
// @ts-ignore
import Create from "./pages/Create.vue";
// @ts-ignore
import Edit from "./pages/Edit.vue";

export const bookRoutes = [
    {
        path: "/books",
        component: Overview,
        name: "books.overview",
    },
    {
        path: "/books/create",
        component: Create,
        name: "books.create",
    },
    {
        path: "/books/:id/edit",
        component: Edit,
        name: "books.edit",
    },
];
