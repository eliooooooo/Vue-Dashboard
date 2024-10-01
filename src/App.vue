<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <Header />
  <div class="container_aside flex w-full" x-data="{ asideOpen: false }">
    <Aside />
    <div class="container_content bg-blue-200 flex flex-col justify-between flex-grow h-[calc(100vh-8rem)]">
      <div>
        <SearchBar />
        <router-view id="main" class="px-10 py-4" />
      </div>
      <Footer />
    </div>
  </div>
</template>
