<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="container"
    :class="{ 'is-active': props.dice.active }"
  >
    <div
      ref="$dice"
      class="dice"
    >
      <div class="front">
        <span class="dot dot1"></span>
      </div>
      <div class="back">
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
        <span class="dot dot3"></span>
        <span class="dot dot4"></span>
        <span class="dot dot5"></span>
        <span class="dot dot6"></span>
      </div>
      <div class="right">
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
        <span class="dot dot3"></span>
        <span class="dot dot4"></span>
        <span class="dot dot5"></span>
      </div>
      <div class="left">
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
      </div>
      <div class="top">
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
        <span class="dot dot3"></span>
        <span class="dot dot4"></span>
      </div>
      <div class="bottom">
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
        <span class="dot dot3"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  const props = defineProps({
    dice: {
      type: Object,
      default: null,
    },
  });

  const $dice = ref(0);

  watch(props.dice, (newValue) => {
    console.log('DICE AMOUNT:', props.dice.amount);

    const { x, y, speed } = newValue.transform;
    $dice.value.style.webkitTransform = `rotateX(${x}deg) rotateY(${y}deg)`;
    $dice.value.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    $dice.value.style.transition = `transform ${speed}ms`;
  });
</script>

<style lang="postcss">
  :root {
    --dice-size: 56px;
    --dice-half-size: 28px;
    --dice-dot-size: 10px;
  }

  .container {
    @apply relative m-4;
    width: var(--dice-size);
    height: var(--dice-size);

    &.is-active {
      .dot {
        @apply bg-black;
      }
    }
  }

  .dice {
    width: var(--dice-size);
    height: var(--dice-size);
    top: 0;
    position: absolute;
    transform-style: preserve-3d;

    &:hover {
      @apply cursor-pointer;
    }

    div {
      @apply absolute block bg-white rounded-sm;
      width: var(--dice-size);
      height: var(--dice-size);
    }

    .dot {
      @apply absolute block bg-slate-500 rounded;
      width: var(--dice-dot-size);
      height: var(--dice-dot-size);
    }

    .front {
      transform: translateZ(var(--dice-half-size));

      .dot1 {
        top: 23px;
        left: 23px;
      }
    }

    .back {
      transform: rotateX(-180deg) translateZ(var(--dice-half-size));

      .dot1 {
        top: 8px;
        left: 12px;
      }
      .dot2 {
        top: 8px;
        right: 12px;
      }
      .dot3 {
        top: 23px;
        left: 12px;
      }
      .dot4 {
        top: 23px;
        right: 12px;
      }
      .dot5 {
        top: 38px;
        left: 12px;
      }
      .dot6 {
        top: 38px;
        right: 12px;
      }
    }

    .right {
      transform: rotateY(90deg) translateZ(var(--dice-half-size));

      .dot1 {
        top: 8px;
        left: 12px;
      }
      .dot2 {
        top: 8px;
        right: 12px;
      }
      .dot3 {
        top: 23px;
        left: 23px;
      }
      .dot4 {
        top: 38px;
        left: 12px;
      }
      .dot5 {
        top: 38px;
        right: 12px;
      }
    }

    .left {
      transform: rotateY(-90deg) translateZ(var(--dice-half-size));

      .dot1 {
        top: 8px;
        right: 12px;
      }
      .dot2 {
        top: 38px;
        left: 12px;
      }
    }

    .top {
      transform: rotateX(90deg) translateZ(var(--dice-half-size));

      .dot1 {
        top: 12px;
        left: 12px;
      }
      .dot2 {
        top: 12px;
        right: 12px;
      }
      .dot3 {
        top: 35px;
        left: 12px;
      }
      .dot4 {
        top: 35px;
        right: 12px;
      }
    }

    .bottom {
      transform: rotateX(-90deg) translateZ(var(--dice-half-size));

      .dot1 {
        top: 8px;
        right: 12px;
      }
      .dot2 {
        top: 23px;
        left: 23px;
      }
      .dot3 {
        top: 38px;
        left: 12px;
      }
    }
  }
</style>
