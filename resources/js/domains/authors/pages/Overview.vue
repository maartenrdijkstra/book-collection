<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
        </tr>
    </table>
</template>

<script setup>
import { fetchAuthors, getAllAuthors } from "../store";
import { onMounted } from "vue";

fetchAuthors();
console.log(getAllAuthors);
</script>
