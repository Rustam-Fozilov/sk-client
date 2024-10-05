<template>
  <div>
    <div v-if="true" class="fixed w-screen h-screen top-12 bottom-0 left-0 right-0 bg-black opacity-50 z-[1000]"></div>
    <div class="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]">
      <div class="w-[750px] flex flex-col items-center bg-soft-white h-full rounded-2xl overflow-auto p-7">
        <div class="w-full flex gap-3 items-center bg-soft-white border border-black border-opacity-20 rounded-full py-5 px-7">
          <SearchIcon width="22" height="22"/>
          <div class="w-full">
            <input type="text" class="w-full bg-transparent font-tt-medium text-md outline-none" placeholder="Qidiruv...">
          </div>
        </div>
        <div class="mt-14 mb-10 opacity-50">
          Avvalgi qidiruvlar yo'q
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '../ui/SearchIcon.vue';


</script>

<style scoped>

</style>
