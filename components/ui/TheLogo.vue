<template>
  <div class="cursor-pointer" @click="gotoMain" :style="`width: ${width}; height: ${height}; color: black;`">
    <img class="w-full h-full object-cover" src="@/assets/images/logo.svg" alt="LOGO"/>
  </div>
</template>

<script setup lang="ts">

defineProps({
  width: {
    type: String,
    required: false,
    default: 'auto'
  },
  height: {
    type: String,
    required: false,
    default: 'auto'
  },
  color: {
    type: String,
    required: false,
    default: 'black',
  },
})

const gotoMain = () => {
  window.location.href = '/';
}

</script>
