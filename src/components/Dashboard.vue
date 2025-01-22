<script setup>
import SitesRanking from './Sites/SitesRanking.vue';
import CampaignRanking from './Sites/CampaignRanking.vue';
import OverviewChart from './Sites/OverviewChart.vue';
import PageHeader from './PageHeader.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <PageHeader title="Welcome John !" />
        <CampaignRanking class="col-span-12 md:col-span-6" />
        <SitesRanking class="col-span-12 md:col-span-6" />
        <OverviewChart class="col-span-12" />
    </div>
</template>
