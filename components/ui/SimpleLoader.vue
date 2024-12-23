<template>
  <div>
    <span class="loader" :style="`width: ${width}; height: ${height};`"></span>
  </div>
</template>

<script setup lang="ts">

defineProps({
  width: {
    required: false,
    type: String,
    default: '30px'
  },
  height: {
    required: false,
    type: String,
    default: '30px'
  },
});

</script>

<style scoped>
.loader {
  border: 2px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 0.4s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>
