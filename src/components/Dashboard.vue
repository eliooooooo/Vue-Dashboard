<script setup>
import SitesTable from './Sites/SitesTable.vue';
import UserStats from './User/UserStats.vue';
import SitesStats from './Sites/SitesStats.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <h1 class="col-span-12">Welcome { User }!</h1>
        <SitesTable class="col-span-9" />
        <UserStats class="col-span-3 row-span-2" />
        <SitesStats class="col-span-9" />
    </div>
</template>
