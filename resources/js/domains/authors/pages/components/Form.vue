<template>
    <form @submit.prevent="handleSubmit">
        <label>Auteur:</label>
        <input v-model="form.name" type="text" required />

        <button type="submit">Opslaan</button>
    </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { Author } from "../../store";

const props = defineProps<{ author: Author }>();

const emit = defineEmits(["submit"]);

const form = ref({ ...props.author });

const handleSubmit = () => emit("submit", form.value);
</script>
