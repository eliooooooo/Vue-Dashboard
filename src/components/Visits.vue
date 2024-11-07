<script setup>
import { ref } from 'vue'
import ContainerSimple from './ContainerSimple.vue';

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


</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <div class="flex flex-col gap-2 col-span-12">
            <h1>Visits</h1>
            <p>Here is all the visits register on your account. Custom the filters to match your needs !</p>   
        </div>
        <ContainerSimple title="Filters" desc="Custom filters to match your needs" :toggle="true" class="col-span-12">
            <div>
                <div class="flex flex-col gap-1">
                    <label for="site">Site :</label>
                    <select id="site" name="site">
                        <option value="0" selected>All</option>
                        <option value="1">Google</option>
                        <option value="2">Facebook</option>
                        <option value="3">Twitter</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="source">Source :</label>
                    <input type="text" id="source" name="source" placeholder="Source"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="campaign">Campaign :</label>
                    <input type="text" id="campaign" name="campaign" placeholder="Campaign"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="content">Content :</label>
                    <input type="text" id="content" name="content" placeholder="Content"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="term">Term :</label>
                    <input type="text" id="term" name="term" placeholder="Term"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="medium">Medium :</label>
                    <input type="text" id="medium" name="medium" placeholder="Medium"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="language">Language :</label>
                    <input type="text" id="language" name="language" placeholder="Language"/>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="platform">Platform :</label>
                    <input type="text" id="platform" name="platform" placeholder="Platform"/>
                </div>
            </div>
        </ContainerSimple>
    </div>
</template>