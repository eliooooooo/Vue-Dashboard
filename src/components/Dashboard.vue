<script setup>
import SitesTable from './Sites/SitesTable.vue';
import SitesRanking from './Sites/SitesRanking.vue';
import CampaignRanking from './Sites/CampaignRanking.vue';
import OverviewChart from './Sites/OverviewChart.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <h1 class="col-span-12">Welcome { User }!</h1>
        <!-- <SitesTable class="col-span-9" /> -->
        <CampaignRanking class="col-span-6" />
        <SitesRanking class="col-span-6" />
        <OverviewChart class="col-span-12" />
    </div>
</template>
