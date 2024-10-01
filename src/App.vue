<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
</script>

<template>
  <Header />
  <div class="container_aside flex w-full" x-data="{ asideOpen: true }">
    <Aside />
    <div class="container_content flex flex-col justify-between flex-grow h-[calc(100vh-8rem)]">
      <router-view />
      <Footer />
    </div>
  </div>
</template>
