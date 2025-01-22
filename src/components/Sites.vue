<script setup>
import SitesNewVisits from './Sites/Header/SitesNewVisits.vue';
import SitesNumber from './Sites/Header/SitesNumber.vue';
import SitesTable from './Sites/SitesTable.vue';
import SitesVisits from './Sites/Header/SitesVisits.vue';
import SitesVisitsTable from './Visits/SitesVisitsTable.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col lg:flex-row gap-4 [&>*]:w-full w-full">
            <SitesNumber />
            <SitesVisits />
            <SitesNewVisits />
        </div>
        <SitesTable />
        <SitesVisitsTable />
    </div>
</template>