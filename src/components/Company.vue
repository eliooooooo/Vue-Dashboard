<script setup>
import CompanyCard from './Company/CompanyCard.vue';
import CompanyMemberList from './Company/CompanyMemberList.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <CompanyCard class="col-span-3" />
        <CompanyMemberList class="col-span-9" />
    </div>
</template>