<template>
  <div
      v-if="loading"
      class="fixed left-0 top-0 h-[15px] w-full z-50 bg-soft-blue drop-shadow-md"
  ></div>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const loading = ref(false)

nuxtApp.hook("page:start", () => {
  loading.value = true;
  // console.log('true')
})

nuxtApp.hook("page:finish", () => {
  loading.value = false;
  // console.log('false')
})
</script>
