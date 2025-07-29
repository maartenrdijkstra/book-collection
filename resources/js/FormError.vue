<template>
    <div v-for="error in getErrorByProperty(name).value" :key="error">
        {{ error }}
    </div>
    <div v-if="getMessage">
        {{ getMessage }}
    </div>
</template>

<script setup lang="ts">
import { getErrorByProperty } from "./services/error";
import { getMessage } from "./services/error";

defineProps<{ name: string }>();
</script>
