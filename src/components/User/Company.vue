<script setup>
import CompanyCard from './CompanyCard.vue';
import CompanyMemberList from './CompanyMemberList.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <CompanyCard class="col-span-12 lg:col-span-3" />
        <CompanyMemberList class="col-span-12 lg:col-span-9" />
    </div>
</template>