<script setup>
import OverviewChart from './OverviewChart.vue';
</script>

<template>
<div class="border border-dark p-4 rounded-md flex flex-col" x-data="{ openStats: true }">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1>Overview</h1>
                <p>Here are overview stats for the selected websites</p>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <div class="cursor-pointer p-4 bg-primary-light rounded-md text-black" x-on:click="openStats = !openStats">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" x-show="!openStats">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16" x-show="openStats">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2" x-show="openStats" x-cloak transition></div>
        <div x-show="openStats" x-cloak transition>
            <div>
                <OverviewChart />
            </div>
            <p class="mt-3">
                No stats to display
            </p>
        </div>
    </div>
</template>