// @ts-ignore
import Create from "./pages/Create.vue";
// @ts-ignore
import Edit from "./pages/Edit.vue";
// @ts-ignore
import Overview from "./pages/Overview.vue";

export const authorRoutes = [
    {
        path: "/authors",
        component: Overview,
        name: "authors.overview",
    },
    {
        path: "/authors/create",
        component: Create,
        name: "authors.create",
    },
    {
        path: "/authors/:id/edit",
        component: Edit,
        name: "authors.edit",
    },
];
