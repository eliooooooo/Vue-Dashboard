<script setup>
import SitesNewVisits from './Sites/SitesNewVisits.vue';
import SitesNumber from './Sites/SitesNumber.vue';
import SitesTable from './Sites/SitesTable.vue';
import SitesVisits from './Sites/SitesVisits.vue';
import SitesVisitsTable from './Sites/SitesVisitsTable.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-4 [&>*]:w-full w-full">
            <SitesNumber />
            <SitesVisits />
            <SitesNewVisits />
        </div>
        <SitesTable />
        <SitesVisitsTable />
    </div>
</template>