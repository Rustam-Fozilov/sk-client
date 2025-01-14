<template>
  <div
      v-if="loading"
      class="fixed left-0 top-0 h-[5px] w-full z-50 bg-primary-blue drop-shadow-xl"
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
});

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
