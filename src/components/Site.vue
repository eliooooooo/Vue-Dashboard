<script setup>
import SiteHeader from './Sites/SiteHeader.vue';
import LocationChart from './Sites/LocationChart.vue';
import SitesVisitsTable from './Sites/SitesVisitsTable.vue';
import VisitsChart from './Sites/VisitsChart.vue';
import VisitsMultipleCharts from './Sites/VisitsMultipleCharts.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <SiteHeader class="col-span-12" />
        <VisitsChart class="col-span-8" />
        <LocationChart class="col-span-4" />
        <SitesVisitsTable class="col-span-12" :site-cell="false"/>
        <VisitsMultipleCharts class="col-span-12" />
    </div>
</template>