<template>
  <div>
    <div class="flex flex-col gap-10 mt-24 items-center">
      <div>
        <the-logo color="black" width="120px"/>
      </div>
      <div class="mid-title">
        Kodni kiriting
      </div>
      <div class="text-center">
        <span><a href="" target="_blank" class="underline underline-offset-4 font-tt-regular">@skbot</a></span> telegram botiga kiring va 1 daqiqalik kodingizni <br> oling.
      </div>
      <div class="w-80">
        <div class="w-full flex gap-x-2.5">
          <input v-focus pattern="\d?" maxlength="1" type="text" class="w-full text-sm font-tt-medium h-14 rounded-2xl border border-black border-opacity-20 text-center pt-1 bg-transparent">
          <input pattern="\d?" maxlength="1" type="text" class="w-full text-sm font-tt-medium h-14 rounded-2xl border border-black border-opacity-20 text-center pt-1 bg-transparent">
          <input pattern="\d?" maxlength="1" type="text" class="w-full text-sm font-tt-medium h-14 rounded-2xl border border-black border-opacity-20 text-center pt-1 bg-transparent">
          <input pattern="\d?" maxlength="1" type="text" class="w-full text-sm font-tt-medium h-14 rounded-2xl border border-black border-opacity-20 text-center pt-1 bg-transparent">
          <input pattern="\d?" maxlength="1" type="text" class="w-full text-sm font-tt-medium h-14 rounded-2xl border border-black border-opacity-20 text-center pt-1 bg-transparent">
          <input pattern="\d?" maxlength="1" type="text" class="w-full text-sm font-tt-medium h-14 rounded-2xl border border-black border-opacity-20 text-center pt-1 bg-transparent">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "main-layout"
})

</script>

<style scoped>

</style>
