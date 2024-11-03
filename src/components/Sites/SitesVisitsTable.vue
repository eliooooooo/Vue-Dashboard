<script setup>
import { ref, watch } from 'vue'
import VisitsRow from './VisitsRow.vue';

const visits = ref([
    { id: 1, name: 'Google', url: 'https://www.google.com', key: 'abcdefghijklmnopqrstuvwxyz' },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com', key: 'abcdefghijklmnopqrstuvwxyz' }
])

let displayVisits = localStorage.getItem('displayVisits');

if (displayVisits) {
    try {
        displayVisits = ref(JSON.parse(displayVisits));
    } catch (e) {
        localStorage.removeItem('displayVisits');
        console.log(`Error: ${e}, deleting local preferences.`)
    }
} else {
    displayVisits = ref([
        { name: 'source', display: true },
        { name: 'campaign', display: true },
        { name: 'medium', display: true },
        { name: 'content', display: true },
        { name: 'terms', display: true },
        { name: 'platform', display: true },
        { name: 'language', display: false }
    ]);
    localStorage.setItem('displayVisits', JSON.stringify(displayVisits.value));
}

watch(displayVisits, (newVal) => {
    localStorage.setItem('displayVisits', JSON.stringify(newVal));
}, { deep: true });
</script>

<template>
    <div class="border border-dark p-4 rounded-md flex flex-col" x-data="{ openVisits: true, openVisitsParams: false }">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1>Last visits</h1>
                <p>Here are the last visits of your websites</p>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <div class="p-4 rounded-md bg-primary cursor-pointer" x-on:click="openVisitsParams = !openVisitsParams">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
                <div class="cursor-pointer p-4 bg-primary-light rounded-md text-black" x-on:click="openVisits = !openVisits">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" x-show="!openVisits">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16" x-show="openVisits">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-4 py-2" x-show="openVisitsParams">
            <div v-for="displayVisit in displayVisits" class="flex flex-row items-center gap-2">
                <input type="checkbox" :name="displayVisit.name" :id="displayVisit.name" v-model="displayVisit.display" >
                <label :for="displayVisit.name">{{ displayVisit.name }}</label>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2" x-show="openVisits" x-cloak transition></div>
        <div x-show="openVisits" x-cloak transition>
            <table class="w-full mt-3" v-if="visits.length >= 1">
                <thead class="bg-primary-light border border-primary-light">
                    <tr class="[&>th]:text-left [&>th]:p-1 [&>th]:px-2 border-primary-light">
                        <th class="w-1">Id</th>
                        <th>Site</th>
                        <th>Page</th>
                        <th v-for="displayVisit in displayVisits" v-show="displayVisit.display"><span>{{ displayVisit.name }}</span></th>
                        <th class="w-1">Data</th>
                        <th class="w-10">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <VisitsRow v-for="visit in visits" class="[&:nth-child(2n)]:bg-gray-light" :key="visit.id" :visit="visit" :visitDisplay="displayVisits"/>
                </tbody>
            </table>
            <p class="mt-3" v-else>
                No visits to display
            </p>
        </div>
    </div>
</template>