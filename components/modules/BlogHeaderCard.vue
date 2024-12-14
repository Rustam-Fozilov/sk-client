<template>
  <div class="cursor-pointer w-full h-[500px] flex flex-col justify-end items-start rounded-3xl bg-[url('/assets/images/main/blog-full.png')] bg-cover bg-center">
    <div class="flex flex-col justify-between h-[200px] bg-white p-5 pt-0 rounded-tr-3xl rounded-bl-3xl w-[42%] lg:w-full xl:gap-5 lg:rounded-tr-none lg:rounded-e-3xl">
      <div class="relative -top-3 flex items-center justify-between">
        <div class="flex">
          <div class="bg-soft-blue text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
            study
          </div>
          <div class="bg-soft-blue text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
            scholarship
          </div>
        </div>
        <div class="bg-soft-blue flex items-center gap-1 text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
          <ClockIcon/>
          2 min
        </div>
      </div>
      <RouterLink to="/blog/1" class="mid-title text-ellipsis truncate-lines overflow-hidden leading-9 xl:text-lg sm:text-md">
        Vizadan rad olmaslik uchun qaysi universitetni tanlash kerak
      </RouterLink>
      <div class="flex cursor-pointer font-tt-medium opacity-50">
        11.11.2024
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "main-layout"
});

</script>

<style scoped>
.truncate-lines {
  display: -webkit-box; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>