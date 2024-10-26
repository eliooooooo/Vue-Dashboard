<script setup>
const props = defineProps({
  breadcrumb: {
    type: Array,
    required: true
  }
})
</script>

<template>
    <div aria-label="breadcrumb" v-if="breadcrumb">
        <ol class="breadcrumb flex flex-row gap-3">
            <li v-for="(item, index) in breadcrumb" :key="item.name" class="flex flex-row gap-3">
                <a v-if="item.link" :href="item.link">{{ item.name }}</a>
                <span v-else>{{ item.name }}</span>
                <span v-if="index < breadcrumb.length - 1">/</span>
            </li>
        </ol>
    </div>
</template>