<template>
  <div class="my-container">
    <div class="text-center mt-12">
      <div class="title">Blog</div>
      <p class="opacity-70 mt-3">Пишем про языковые курсы за рубежом и поступление в заграничные вузы, а также изучение английского онлайн.</p>
    </div>

    <div class="flex justify-center mt-7">
      <div class="flex flex-wrap gap-3 items-center justify-start">
        <BtnSecondary v-for="i in 6">
          <template #btn-secondary>
            Образование за рубежом
          </template>
        </BtnSecondary>
      </div>
    </div>

    <div class="mt-12">
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
          <div class="mid-title text-ellipsis overflow-hidden leading-9 xl:text-lg sm:text-md">
            Vizadan rad olmaslik uchun qaysi universitetni tanlash kerak
          </div>
          <div class="flex cursor-pointer font-tt-medium opacity-50">
            11.11.2024
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnSecondary from '~/components/ui/BtnSecondary.vue';

definePageMeta({
  layout: "main-layout"
});

</script>

<style scoped>

</style>
