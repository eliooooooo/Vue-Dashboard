<script setup>
import { onMounted, ref, defineEmits } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: null
    },
    desc: {
        type: String,
        default: null
    },
    toggle: {
        type: Boolean,
        default: false
    },
    displayVisits: {
        type: Object,
        required: false
    },
    fixedHeight: {
        type: Boolean,
        default: false
    },
    addSite: {
        type: Boolean,
        default: false
    },
    period: {
        type: Boolean,
        default: false
    }
});

const selectedPeriod = ref('monthly');
const emit = defineEmits(['updateChartData']);

if (props.period) {
    onMounted(() => {
        emit('updateChartData', selectedPeriod.value)
    })
}

</script>

<template>
    <div class="border border-dark p-4 rounded-md flex flex-col" x-data="{ openContainer: true }">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1 v-if="props.title">{{ props.title }}</h1>
                <p v-if="props.desc">{{ props.desc }}</p>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <select v-if="period" v-model="selectedPeriod" @change="$emit('updateChartData', selectedPeriod)">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
                <a class="btn primary flex flex-row gap-2 items-center" x-on:click="openContainer = true" @click="$emit('addSite')" v-if="props.addSite">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                    Add Site
                </a>
                <div v-if="props.toggle" class="cursor-pointer p-4 bg-primary-light rounded-md text-black" x-on:click="openContainer = !openContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" x-show="!openContainer">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16" x-show="openContainer">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-4 mt-2">
            <div v-if="props.displayVisits" v-for="displayVisit in displayVisits" class="flex flex-row items-center gap-2">
                <input type="checkbox" :name="displayVisit.name" :id="displayVisit.name" v-model="displayVisit.display">
                <label :for="displayVisit.name">{{ displayVisit.name[0].toUpperCase() + displayVisit.name.slice(1) }}</label>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2 mb-3" x-show="openContainer" x-cloak transition></div>
        <div :class="{ 'max-h-[450px]': props.fixedHeight }" x-show="openContainer" class="overflow-auto" x-cloak transition>
            <slot></slot>
        </div>
    </div>
</template>