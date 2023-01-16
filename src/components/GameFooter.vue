<template>
  <footer class="game-footer m-0 p-2 flex items-center justify-between h-8 text-sm">
    <div>Yahtzee</div>
    <div>v{{ version }}</div>
  </footer>
</template>

<script setup>
  import pkg from '@root/package.json';
  import { ref } from 'vue';

  const version = ref(null);
  version.value = pkg?.version || '0.00';
</script>
