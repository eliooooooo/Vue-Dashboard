<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import ContainerSimple from './ContainerSimple.vue';
import SitesVisitsTable from './Sites/SitesVisitsTable.vue';

const route = useRoute();
const router = useRouter();

const visits = ref([
    { id: 1, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 2, name: 'Facebook', page: 'index.html', source: 'META', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 4, name: 'LinkedIn', page: 'index.html', source: 'LI', campaign: 'lancement', content: 'content', term:'linkedin, search', medium:'social', language: 'en', platform: 'Safari'  },
    { id: 3, name: 'Twitter', page: 'index.html', source: 'TW', campaign: 'lancement', content: 'content', term:'twitter, search', medium:'social', language: 'en', platform: 'Firefox'  },
    { id: 6, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 7, name: 'Google', page: 'index.html', source: 'FB', campaign: 'lancement', content: 'content', term:'google, search', medium:'email', language: 'fr', platform: 'Chrome'  },
    { id: 8, name: 'LinkedIn', page: 'index.html', source: 'LI', campaign: 'lancement', content: 'content', term:'linkedin, search', medium:'social', language: 'en', platform: 'Safari'  },
    { id: 5, name: 'Instagram', page: 'index.html', source: 'IG', campaign: 'lancement', content: 'content', term:'instagram, search', medium:'social', language: 'fr', platform: 'Edge'  }
])

const filteredVisits = ref([]);
const site = ref('0');
const source = ref('');
const campaign = ref('');
const content = ref('');
const term = ref('');
const medium = ref('');
const language = ref('');
const platform = ref('');

const filterVisits = () => {
    filteredVisits.value = visits.value.filter(visit => {
        return (site.value == 0 || visit.name === site.value) &&
            (source.value === '' || visit.source.includes(source.value)) &&
            (campaign.value === '' || visit.campaign.includes(campaign.value)) &&
            (content.value === '' || visit.content.includes(content.value)) &&
            (term.value === '' || visit.term.includes(term.value)) &&
            (medium.value === '' || visit.medium.includes(medium.value)) &&
            (language.value === '' || visit.language.includes(language.value)) &&
            (platform.value === '' || visit.platform.includes(platform.value));
    });
}

const resetFilters = () => {
    console.log('reset');
    site.value = '0';
    source.value = '';
    campaign.value = '';
    content.value = '';
    term.value = '';
    medium.value = '';
    language.value = '';
    platform.value = '';
    filterVisits();
}

const setUrlParams = () => {
    router.replace({
        query: {
            site: site.value !== '0' ? site.value : undefined,
            source: source.value || undefined,
            campaign: campaign.value || undefined,
            content: content.value || undefined,
            term: term.value || undefined,
            medium: medium.value || undefined,
            language: language.value || undefined,
            platform: platform.value || undefined,
        }}).catch(err => {
            console.log(err);
        }
    );
}

const names = [];
visits.value.forEach(visit => {
    if (!names.includes(visit.name)) {
        names.push(visit.name);
    }
});

onMounted(() => {
    const query = route.query;
    site.value = query.site || '0';
    source.value = query.source || '';
    campaign.value = query.campaign || '';
    content.value = query.content || '';
    term.value = query.term || '';
    medium.value = query.medium || '';
    language.value = query.language || '';
    platform.value = query.platform || '';
    filterVisits();
});

watch([site, source, campaign, content, term, medium, language, platform], () => {
    setUrlParams();
    filterVisits();
});
</script>

<template>
    <div class="grid grid-cols-12 gap-4" >
        <div class="flex flex-col gap-2 col-span-12">
            <h1>Visits</h1>
            <p>Here is all the visits register on your account. Custom the filters to match your needs !</p>   
        </div>
        <ContainerSimple title="Filters" desc="Custom filters to match your needs" @resetFilters="resetFilters" :toggle="true" :resetFilters="true" class="col-span-12">
            <div class="grid grid-cols-4 gap-4">
                <div class="flex flex-col gap-1">
                    <label for="site">Site :</label>
                    <select id="site" name="site" v-model="site" @change="filterVisits">
                        <option value="0" >All</option>
                        <option v-for="name in names" :value="name">{{ name }}</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="source">Source :</label>
                    <input type="text" id="source" name="source" placeholder="Enter valid source(s)" v-model="source" @change="filterVisits"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="campaign">Campaign :</label>
                    <input type="text" id="campaign" name="campaign" placeholder="Enter valid campaign(s)" v-model="campaign" @change="filterVisits"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="content">Content :</label>
                    <input type="text" id="content" name="content" placeholder="Enter valid content(s)" v-model="content" @change="filterVisits"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="term">Term :</label>
                    <input type="text" id="term" name="term" placeholder="Enter valid term(s)" v-model="term" @change="filterVisits"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="medium">Medium :</label>
                    <input type="text" id="medium" name="medium" placeholder="Enter valid medium(s)" v-model="medium" @change="filterVisits"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="language">Language :</label>
                    <input type="text" id="language" name="language" placeholder="Enter valid language(s)" v-model="language" @change="filterVisits"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="platform">Platform :</label>
                    <input type="text" id="platform" name="platform" placeholder="Enter valid platform(s)" v-model="platform" @change="filterVisits"/>
                </div>
            </div>
            <div class="ml-auto mt-4 w-fit">
                <p class="btn primary">Apply</p>
            </div>
        </ContainerSimple>
        <SitesVisitsTable :filteredVisits="filteredVisits" title="Filtered visits" desc="Here is your reactives data" class="col-span-12" ></SitesVisitsTable>
    </div>
</template>