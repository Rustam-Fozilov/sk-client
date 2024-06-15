<template>
  <div>
    <div class="my-container flex justify-between mt-7">
      <div class="text-md">
        <div class="flex items-center gap-2 mt-[102px]">
          <img class="h-12 object-cover rounded-full w-36" src="@/assets/images/main/title1.png" alt="Title image">
          <div class="m-0 p-0 text-wrap">Amerika universitetlariga kirish</div>
        </div>
        <div class="p-0 m-0">
          va to'liq grant yutish bo'yicha
        </div>
        <div class="flex items-center gap-2 text-nowrap">
          <div>batafsil qo'llanma</div>
          <input
            type="text"
            class="bg-transparent h-12 rounded-full border border-black border-opacity-20 outline-0 px-5 text-[16px] w-80"
            placeholder="Qidiruv..."
          />
        </div>
      </div>
      <div class="w-5/12 h-full">
        <img class="w-full h-full object-cover rounded-3xl" src="@/assets/images/main/banner1.png" alt="Banner">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "main-layout"
})


</script>
