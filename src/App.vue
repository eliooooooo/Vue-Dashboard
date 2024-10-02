<script setup>
import Footer from './components/Footer.vue'
import BypassLink from './components/BypassLink.vue'
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import SearchBar from './components/SearchBar.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div v-if="!route.meta.full">
    <BypassLink />
    <div class="static w-full bg-light text-dark flex flex-col items-center border-b border-dark h-[134px] md:h-[102px]">
      <Header />
      <div class="relative container flex flex-col md:flex-row gap-3 items-center py-2">
        <Breadcrumb class="w-full" :breadcrumb="route.meta.breadcrumb" />
        <SearchBar />
      </div>
    </div>
    <div class="container_aside relative flex w-full overflow-hidden" x-data="{ asideOpen: false }">
      <Aside />
      <div class="container_content overflow-scroll overflow-x-hidden bg-light flex flex-col justify-between flex-grow h-[calc(100vh-134px)] md:h-[calc(100vh-102px)]">
        <div class="container px-10 py-4">
          <router-view id="main" />
        </div>
        <Footer />
      </div>
    </div>
  </div>
  <div v-else>
    <BypassLink />
    <router-view id="main" />
  </div>
</template>
