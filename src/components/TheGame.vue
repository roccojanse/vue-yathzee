<template>
  <section class="p-4">
    THE GAME
    <Dice
      v-for="(dice, i) in dices"
      :key="i"
      :dice="dice"
      @click="onToggleDice(i)"
    />
    <DiceButton @on-dice-roll="onDiceRoll" />
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import Dice from '@components/Dice.vue';
  import DiceButton from '@components/DiceButton.vue';

  const dices = ref([
    { active: true, amount: randomAmount() },
    { active: true, amount: randomAmount() },
    { active: true, amount: randomAmount() },
    { active: true, amount: randomAmount() },
    { active: true, amount: randomAmount() },
  ]);

  function randomAmount() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function randomDegrees() {
    return (Math.floor(Math.random() * 23) + 1) * 90;
  }

  function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function onDiceRoll() {
    console.log('DICE ROLLED');

    dices.value.forEach((dice) => {
      if (dice.active) {
        dice.amount = randomAmount();
        const xRand = randomDegrees();
        const yRand = randomDegrees();
        const speed = randomMinMax(1000, 1500);
        dice.transform = { x: xRand, y: yRand, speed };
      }
    });
  }

  function onToggleDice(index) {
    console.log('DISABLE', index);
    dices.value[index].active = !dices.value[index].active;
  }
</script>

<style lang="postcss"></style>
