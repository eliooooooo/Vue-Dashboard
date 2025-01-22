<script setup>
import MemberRow from './MemberRow.vue';

import { ref } from 'vue';
const users = ref([
    { name: 'John Doe', profilepic: 'https://picsum.photos/100?random=1', email: 'john.doe@mail.com', role: 'Admin', since: '2021-01-01' },
    { name: 'Jane Smith', profilepic: 'https://picsum.photos/100?random=2', email: 'jane.smith@mail.com', role: 'User', since: '2022-02-15' },
    { name: 'Alice Johnson', profilepic: 'https://picsum.photos/100?random=3', email: 'alice.johnson@mail.com', role: 'Moderator', since: '2020-05-20' },
    { name: 'Bob Brown', profilepic: 'https://picsum.photos/100?random=4', email: 'bob.brown@mail.com', role: 'User', since: '2019-11-30' }
]);
</script>

<template>
    <div class="border h-fit border-dark p-4 rounded-md flex flex-col">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div>
                <h1>Company members accounts</h1>
                <p>Here are the user accounts associated with your company</p> 
            </div>
            <div class="flex flex-row gap-3 items-center self-end">
                <router-link :to="{ name: 'register' }" class="btn primary flex flex-row gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                    Add Member
                </router-link>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2"></div>
        <div class="w-full overflow-scroll">
            <table class="w-full mt-3" v-if="users">
                <thead class="bg-primary-light border border-primary-light">
                    <tr class="[&>th]:text-left [&>th]:p-1 [&>th]:px-2 border-primary-light">
                        <th class="w-1">N°</th>
                        <th>Member</th>
                        <th>Role</th>
                        <th class="w-1">Member&nbsp;since</th>
                        <th class="w-10">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <MemberRow v-for="(user, index) in users" :user="user" :key="index" :index="index" />
                </tbody>
            </table>
            <p class="mt-3" v-else>
                No collaborators to display
            </p>
        </div>
    </div>
</template>