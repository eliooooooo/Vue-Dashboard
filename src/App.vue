<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import SearchBar from './components/SearchBar.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>

<template>
  <Header />
  <div class="bg-light text-dark flex items-center border-b border-dark h-16">
    <div class="container flex flex-row items-center">
      <Breadcrumb />
      <SearchBar />
    </div>
  </div>
  <div class="container_aside flex w-full" x-data="{ asideOpen: false }">
    <Aside />
    <div class="container_content bg-light flex flex-col justify-between flex-grow h-[calc(100vh-12rem)]">
      <div>
        <router-view id="main" class="px-10 py-4" />
      </div>
      <Footer />
    </div>
  </div>
</template>
