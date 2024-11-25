<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="px-4 py-1 bg-primary text-light">
        <p class="text-center">{{ props.text }}</p>
    </div>
</template>