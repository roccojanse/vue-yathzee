<template>
  <main class="w-screen h-screen flex items-center justify-center">
    <MainLogo class="w-3/6 lg:w-2/4 stroke-white fill-red-700" />
  </main>
</template>

<script setup>
  import MainLogo from '@components/MainLogo.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  setTimeout(() => {
    router.push({ name: 'titleview' });
  }, 3000);
</script>

<style lang="postcss"></style>
