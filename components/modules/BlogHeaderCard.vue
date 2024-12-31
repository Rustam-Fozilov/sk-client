<template>
  <div
  class="cursor-pointer w-full h-[500px] sm:h-[380px] flex flex-col justify-end items-start rounded-3xl bg-[url('/assets/images/main/blog-full.png')] bg-cover bg-center"
  :style="`background-image: url('${baseApiUrl + '/storage/' + blog.image_link}');`"
  >
    <div class="flex flex-col justify-between h-[200px] sm:h-1/2 bg-white p-5 pt-0 rounded-tr-3xl rounded-bl-3xl w-[42%] lg:w-full xl:gap-5 lg:rounded-tr-none lg:rounded-e-3xl">
      <div class="relative -top-3 flex items-center justify-between sm:flex-wrap">
        <div class="flex">
          <div v-for="tag in blog.tags" class="bg-soft-blue text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
            {{ tag?.name }}
          </div>
        </div>
        <div class="bg-soft-blue flex items-center gap-1 sm:hidden text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
          <ClockIcon/>
          {{ blog.read_minute }} min
        </div>
      </div>
      <RouterLink :to="'/blog/' + blog.id" class="mid-title text-ellipsis truncate-lines overflow-hidden leading-9 xl:text-lg sm:text-md">
        {{ blog.title }}
      </RouterLink>
      <div class="flex cursor-pointer font-tt-medium opacity-50">
        {{ blog.created_at }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Blog } from '~/core/types/blog.type';
import { getBaseApiUrl } from '~/core/utils/apiUrl.util';

definePageMeta({
  layout: "main-layout"
});

defineProps({
  blog: {
    type: Object as PropType<Blog>,
    required: true
  }
});

const baseApiUrl = getBaseApiUrl();

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