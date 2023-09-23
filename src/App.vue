<script setup lang="ts">
import Header from './components/Home/Header.vue';
</script>

<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>
