<script setup>
import { ref, watch } from 'vue'
import VisitsRow from './VisitsRow.vue';
import ContainerSimple from './../ContainerSimple.vue';

const props = defineProps({
    siteCell: {
        type: Boolean,
        default: true
    },
    desc: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: 'Last visits'
    },
    filteredVisits: {
        type: Array,
        default: []
    }
});


if (props.desc == null) {
    props.desc = `Here are the last visits of your website${props.siteCell ? 's' : ''}`;
}

const visits = ref([
    { id: 1, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 2, name: 'Facebook', page: 'index.html', source: 'META', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 4, name: 'LinkedIn', page: 'index.html', source: 'LI', campaign: 'lancement', content: 'content', term:'linkedin, search', medium:'social', language: 'en', platform: 'Safari'  },
    { id: 3, name: 'Twitter', page: 'index.html', source: 'TW', campaign: 'lancement', content: 'content', term:'twitter, search', medium:'social', language: 'en', platform: 'Firefox'  },
    { id: 1, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 1, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 4, name: 'LinkedIn', page: 'index.html', source: 'LI', campaign: 'lancement', content: 'content', term:'linkedin, search', medium:'social', language: 'en', platform: 'Safari'  },
    { id: 5, name: 'Instagram', page: 'index.html', source: 'IG', campaign: 'lancement', content: 'content', term:'instagram, search', medium:'social', language: 'fr', platform: 'Edge'  }
])

if (props.filteredVisits.length > 0) {
    visits.value = ref(props.filteredVisits);
}

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
        { name: 'term', display: true },
        { name: 'platform', display: true },
        { name: 'language', display: false }
    ]);
    localStorage.setItem('displayVisits', JSON.stringify(displayVisits.value));
}

watch(displayVisits, (newVal) => {
    localStorage.setItem('displayVisits', JSON.stringify(newVal));
}, { deep: true });

watch(() => props.filteredVisits, (newVal) => {
    visits.value = newVal;
}, { deep: true });

</script>
<template>
    <ContainerSimple :title="props.title" :desc="props.desc" :fixedHeight="true" :displayVisits="displayVisits" :toggle="true">
        <table class="w-full" v-if="visits.length >= 1">
            <thead class="bg-primary-light border border-primary-light">
                <tr class="[&>th]:text-left [&>th]:p-1 [&>th]:px-2 border-primary-light">
                    <th class="w-1">Id</th>
                    <th v-if="props.siteCell">Site</th>
                    <th>Page</th>
                    <th v-for="displayVisit in displayVisits" v-show="displayVisit.display"><span>{{ displayVisit.name[0].toUpperCase() + displayVisit.name.slice(1) }}</span></th>
                    <th class="w-1">Data</th>
                    <th class="w-10">Actions</th>
                </tr>
            </thead>
            <tbody>
                <VisitsRow v-for="visit in visits" class="[&:nth-child(2n)]:bg-gray-light" :key="visit.id" :visit="visit" :visitDisplay="displayVisits" :siteCell="props.siteCell"/>
            </tbody>
        </table>
        <p v-else >No data to display</p>
    </ContainerSimple>
</template>