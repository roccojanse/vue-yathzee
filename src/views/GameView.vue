<template>
  <main class="w-screen h-screen">
    <PlayHeader />
    <TheGame class="game w-screen" />
    <PlayFooter />
  </main>
</template>

<script setup>
  import PlayHeader from '@components/GameHeader.vue';
  import TheGame from '@components/TheGame.vue';
  import PlayFooter from '@components/GameFooter.vue';
</script>

<style lang="postcss">
  .game {
    height: calc(100vh - 96px);
  }
</style>
