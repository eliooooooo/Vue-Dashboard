<script setup>
import SiteRow from './SiteRow.vue'
import { ref, watch } from 'vue'

const sites = ref([
    { id: 1, name: 'Google', url: 'https://www.google.com', key: 'abcdefghijklmnopqrstuvwxyz' },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com', key: 'abcdefghijklmnopqrstuvwxyz' }
])

const addSite = () => {
    sites.value.push({ id: sites.value.length + 1, name: 'New Site', url: 'https://www.newsite.com', key: 'abcdefghijklmnopqrstuvwxyz' })
}

const removeSite = (id) => {
    sites.value = sites.
    value.filter(site => site.id !== id)
}

// watch(sites, (newSites) => {
//     console.log('Sites:', newSites)
// })
</script>

<template>
    <div class="border border-dark p-4 rounded-md flex flex-col" x-data="{ openSites: true }">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1>Websites</h1>
                <p>Here are the websites you are tracking</p>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <a class="btn primary flex flex-row gap-2 items-center" x-on:click="openSites = true" @click="addSite()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                    Add Site
                </a>
                <div class="cursor-pointer p-4 bg-primary-light rounded-md text-black" x-on:click="openSites = !openSites">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" x-show="!openSites">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16" x-show="openSites">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2" x-show="openSites" x-cloak transition></div>
        <div x-show="openSites" x-cloak transition>
            <table class="w-full mt-3" v-if="sites.length >= 1">
                <thead class="bg-primary-light border border-primary-light">
                    <tr class="[&>th]:text-left [&>th]:p-1 [&>th]:px-2 border-primary-light">
                        <th class="w-1">Id</th>
                        <th>Site name</th>
                        <th>URL</th>
                        <th>Key</th>
                        <th class="w-1">Data</th>
                        <th class="w-10">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <SiteRow v-for="site in sites" :key="site.id" :site="site" @remove-site="removeSite"/>
                </tbody>
            </table>
            <p class="mt-3" v-else>
                No sites to display
            </p>
        </div>
    </div>
</template>