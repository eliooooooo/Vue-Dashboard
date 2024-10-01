<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
</script>

<template>
  <Header />
  <div class="container_aside">
    <Aside />
    <div class="container_content">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.container_aside {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.container_content {
  flex-grow: 1;
}
</style>
