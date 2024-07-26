<template>
  <div>
    <img :width="width" :height="height" src="../../assets/images/svg/read-icon.svg" alt="Read icon" class="max-w-none opacity-80">
  </div>
</template>

<script setup lang="ts">

defineProps({
  width: {
    required: false,
    default: 'auto'
  },
  height: {
    required: false,
    default: 'auto'
  },
})

</script>