<script setup>
import PageHeader from './PageHeader.vue';
import LocationChart from './Sites/LocationChart.vue';
import SitesVisitsTable from './Visits/SitesVisitsTable.vue';
import VisitsChart from './Visits/VisitsChart.vue';
import VisitsMultipleCharts from './Visits/VisitsMultipleCharts.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <PageHeader title="Google" desc="Site origin : <a href='#''>https://google.fr</a>">
            <div class="flex flex-col gap-2">
                <button class="btn primary small">Copy ApiKey</button>
                <button class="btn secondary small">Delete </button>
            </div>
        </PageHeader>
        <VisitsChart class="col-span-12 lg:col-span-8" />
        <LocationChart class="col-span-12 lg:col-span-4" />
        <SitesVisitsTable class="col-span-12" :site-cell="false"/>
        <VisitsMultipleCharts class="col-span-12" />
    </div>
</template>