<template>
  <header class="game-header m-0 p-2 flex items-center h-16">
    <MainLogo class="w-20 lg:w-28 stroke-white fill-red-700" />
  </header>
</template>

<script setup>
  import pkg from '@root/package.json';
  import { ref } from 'vue';
  import MainLogo from '@components/MainLogo.vue';

  const version = ref(null);
  version.value = pkg?.version || '0.00';
</script>
