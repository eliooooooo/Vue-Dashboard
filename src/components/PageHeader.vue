<script setup>

const props = defineProps({
    title: {
        type: String,
        defautl: null
    },
    desc: {
        type: String,
        default: null
    }
})

</script>

<template>
    <div class="col-span-12 flex flex-row justify-between">
        <div class="flex flex-col gap-2">
            <h1 v-html="props.title"></h1>
            <p v-if="props.desc" v-html="props.desc"></p>
        </div>
        <slot></slot>
    </div>
</template>