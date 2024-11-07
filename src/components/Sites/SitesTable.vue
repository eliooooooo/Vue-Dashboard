<script setup>
import SiteRow from './SiteRow.vue'
import { ref, watch } from 'vue'
import ContainerSimple from './../ContainerSimple.vue'

const sites = ref([
    { id: 1, name: 'Google', url: 'https://www.google.com', key: 'abcdefghijklmnopqrstuvwxyz' },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com', key: 'abcdefghijklmnopqrstuvwxyz' }
])

const removeSite = (id) => {
    sites.value = sites.
    value.filter(site => site.id !== id)
}

const addSite = () => {
    sites.value.push({ id: sites.value.length + 1, name: 'New Site', url: 'https://www.newsite.com', key: 'abcdefghijklmnopqrstuvwxyz' })
}
</script>

<template>
    <ContainerSimple title="Websites" desc="Here are the websites you are tracking" :toggle="true" :addSite="true" :fixedHeight="true" @addSite="addSite()">
        <table class="w-full" v-if="sites.length >= 1">
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
                <SiteRow v-for="site in sites" class="[&:nth-child(2n)]:bg-gray-light" :key="site.id" :site="site" @remove-site="removeSite"/>
            </tbody>
        </table>
    </ContainerSimple>
</template>