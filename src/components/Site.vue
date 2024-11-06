<script setup>
import LocationChart from './Sites/LocationChart.vue';
import SitesVisitsTable from './Sites/SitesVisitsTable.vue';
import VisitsChart from './Sites/VisitsChart.vue';
import VisitsMultipleCharts from './Sites/VisitsMultipleCharts.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 flex flex-row justify-between">
            <div class="flex flex-col gap-2">
                <h1>{ Website name }</h1>
                <p>Site origin : { Origin link }</p>
            </div>
            <div class="flex flex-col gap-2">
                <button class="btn primary small">Copy ApiKey</button>
                <button class="btn secondary small">Delete </button>
            </div>
        </div>
        <VisitsChart class="col-span-8" />
        <LocationChart class="col-span-4" />
        <SitesVisitsTable class="col-span-12" :site-cell="false"/>
        <VisitsMultipleCharts class="col-span-12" />
    </div>
</template>