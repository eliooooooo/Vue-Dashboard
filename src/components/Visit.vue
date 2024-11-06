<script setup>
import { ref } from 'vue'

const visit = ref({ id: 1, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  })

</script>

<template>
    <div>
        <div class="flex flex-row justify-between">
            <div class="flex flex-col gap-2">
                <h1>Visit n°83904</h1>
                <p>Origin site : { Website name }</p>
            </div>
            <div class="flex flex-col gap-2">
                <button class="btn secondary small">Delete </button>
            </div>
        </div>
        <div>
            <div class="flex flex-row gap-4">
                <div class="flex flex-col gap-2">
                    <h2>General information</h2>
                    <p>Page : { Page }</p>
                    <p>Source : { Source }</p>
                    <p>Campaign : { Campaign }</p>
                    <p>Content : { Content }</p>
                    <p>Term : { Term }</p>
                    <p>Medium : { Medium }</p>
                    <p>Language : { Language }</p>
                    <p>Platform : { Platform }</p>
                </div>
                <div class="flex flex-col gap-2">
                    <h2>Location</h2>
                    <p>Country : { Country }</p>
                    <p>Region : { Region }</p>
                    <p>City : { City }</p>
                    <p>Postal code : { Postal code }</p>
                    <p>Timezone : { Timezone }</p>
                    <p>ISP : { ISP }</p>
                    <p>Organization : { Organization }</p>
                    <p>AS : { AS }</p>
                </div>
            </div>
        </div>
    </div>
</template>