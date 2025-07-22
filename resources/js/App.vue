<template>
    <nav>
        <router-link :to="{ name: 'books.overview' }"
            >Boeken Overzicht</router-link
        >
        |
        <router-link :to="{ name: 'authors.overview' }"
            >Auteurs Overzicht</router-link
        >
        |
        <router-link :to="{ name: 'books.create' }"
            >Nieuw boek toevoegen</router-link
        >
        |
        <router-link :to="{ name: 'authors.create' }"
            >Nieuwe auteur toevoegen</router-link
        >
    </nav>
    <router-view></router-view>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
