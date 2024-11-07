<script setup>
import { ref } from 'vue'
import SitesVisitsTable from './Sites/SitesVisitsTable.vue';

const visit = ref({ id: 1, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  })

</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <div class="flex flex-row justify-between col-span-12">
            <div class="flex flex-col gap-2">
                <h1>Visit n°83904</h1>
                <p>Origin site : { Website name }</p>
            </div>
            <div class="flex flex-col gap-2">
                <button class="btn secondary small">Delete </button>
            </div>
        </div>
        <div class="border border-dark p-4 rounded-md flex flex-col col-span-6">
            <div>
                <h1>General informations</h1>
                <p>Here is the visit general infos.</p>
            </div>
            <div class="w-full border-dark border-b pt-2 mb-3"></div>
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
        </div>
        <div class="border border-dark p-4 rounded-md flex flex-col col-span-6">
            <div>
                <h1>Location informations</h1>
                <p>Here is the visit location infos.</p>
            </div>
            <div class="w-full border-dark border-b pt-2 mb-3"></div>
            <div class="flex flex-col gap-2">
                <p>Country : France</p>
                <p>Region : Alsace</p>
                <p>City : Strasbourg</p>
                <p>Postal code : 67000</p>
                <p>Timezone : UTC +2</p>
                <p>Latitude : 48.5839</p>
                <p>Longitude : 7.7455</p>
            </div>
        </div>
        <div class="border border-dark p-4 rounded-md flex flex-col col-span-12">
            <div>
                <h1>Similar as</h1>
                <p>Here is similar visits</p>
            </div>
            <div class="w-full border-dark border-b pt-2 mb-3"></div>
            <div class="flex flex-col gap-2">
                <SitesVisitsTable :container="false"/>
            </div>
        </div>
    </div>
</template>