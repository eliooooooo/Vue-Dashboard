<script setup>
import SiteHeader from './Sites/SiteHeader.vue';
import PagesTable from './Sites/PagesTable.vue';
import LocationChart from './Sites/LocationChart.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <SiteHeader />
        <PagesTable />
        <LocationChart />
    </div>
</template>