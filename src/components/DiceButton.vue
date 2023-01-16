<template>
  <button @click="onDiceRoll">Roll</button>
</template>

<script setup>
  const emit = defineEmits(['onDiceRoll']);

  function onDiceRoll() {
    emit('onDiceRoll');
  }
</script>
