<template>
  <header class="m-0 p-2 flex items-center justify-end h-8">
    <p class="text-slate-400">version {{ version }}</p>
  </header>
</template>

<script setup>
  import pkg from '@root/package.json';
  import { ref } from 'vue';

  const version = ref(null);
  version.value = pkg?.version || '0.00';
</script>
