<script setup>
import UserCard from './User/UserCard.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <h1>{ User }'s account</h1>
        <div class="grid grid-cols-12">
            <UserCard class="col-span-3" />
        </div>
    </div>
</template>