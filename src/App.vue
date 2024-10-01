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
    <Header />
    <div class="bg-light text-dark flex items-center border-b border-dark h-16">
      <div class="container flex flex-row items-center">
        <Breadcrumb :breadcrumb="route.meta.breadcrumb" />
        <SearchBar />
      </div>
    </div>
    <div class="container_aside flex w-full" x-data="{ asideOpen: false }">
      <Aside />
      <div class="container_content bg-light flex flex-col justify-between flex-grow h-[calc(100vh-12rem)]">
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
