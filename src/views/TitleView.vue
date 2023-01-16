<template>
  <main class="w-screen h-screen">
    <TitleHeader />
    <div class="title flex justify-center flex-col">
      <div class="flex justify-center">
        <MainLogo class="w-3/6 lg:w-2/6 stroke-white fill-red-700" />
      </div>
      <div class="flex justify-center">
        <RouterLink
          to="/game"
          class="mt-10 px-5 py-2 text-xl font-bold text-white bg-red-700 border-white border-4 rounded-md"
        >
          PLAY
        </RouterLink>
      </div>
    </div>
    <TitleFooter />
  </main>
</template>

<script setup>
  import TitleHeader from '@components/TitleHeader.vue';
  import MainLogo from '@components/MainLogo.vue';
  import TitleFooter from '@components/TitleFooter.vue';
</script>

<style lang="postcss">
  .title {
    height: calc(100vh - 64px);
  }
</style>
