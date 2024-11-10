<script setup>
import { ref } from 'vue'
import SitesVisitsTable from './Visits/SitesVisitsTable.vue';
import ContainerSimple from './ContainerSimple.vue';
import PageHeader from './PageHeader.vue';

const visit = ref({ id: 1, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  })

</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <PageHeader title="Visit n°83904" >
            <div class="flex flex-col gap-2">
                <button class="btn secondary small">Delete </button>
            </div>
        </PageHeader>
        <div class="col-span-12">Origin site : <router-link to="/sites/1">Google</router-link></div>
        <ContainerSimple title="General informations" desc="Here is the visit general infos" class="col-span-6">
            <div class="flex flex-col gap-2">
                <p  class="flex flex-row gap-1.5">Page :<a href="#" target="_blank" class="flex flex-row gap-2 items-center">index.html
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </a></p>
                <p>Source : Email</p>
                <p>Campaign : Relance</p>
                <p>Content : Blog</p>
                <p>Term : search</p>
                <p>Medium : FB</p>
                <p>Language : EN</p>
                <p>Platform : Chrome</p>
            </div>
        </ContainerSimple>
        <ContainerSimple title="Location informations" desc="Here is the visit location infos" class="col-span-6">
            <div class="flex flex-col gap-2">
                <p>Country : France</p>
                <p>Region : Alsace</p>
                <p>City : Strasbourg</p>
                <p>Postal code : 67000</p>
                <p>Timezone : UTC +2</p>
                <p>Latitude : 48.5839</p>
                <p>Longitude : 7.7455</p>
            </div>
        </ContainerSimple>
        <SitesVisitsTable title="Similar as" desc="Here is similar visits" class="col-span-12"/>
    </div>
</template>