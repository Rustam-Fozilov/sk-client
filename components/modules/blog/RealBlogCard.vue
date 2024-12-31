<template>
  <div
  class="bg-white w-[24%] 2xl:w-[32%] xl:w-[48%] sm:w-full rounded-2xl flex flex-col justify-start"
  :style="`width: ${width}; height: ${height};`"
  >
    <div
    class="rounded-t-2xl h-[150px] bg-cover"
    :style="`background-image: url('${baseApiUrl + '/storage/' + blog.image_link}');`"
    ></div>
    <div class="flex flex-col justify-between p-5">
      <div class="relative -top-8 flex items-center justify-start gap-0.5">
        <div v-for="tag in blog.tags" class="bg-soft-blue text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
          {{ tag?.name }}
        </div>
      </div>
      <RouterLink :to="`/blog/${blog.id}`" class="sub-title truncate-ellipsis cursor-pointer text-start">{{ blog.title }}</RouterLink>
      <div class="truncate-ellipsis-3 mt-5 opacity-60 text-start">
        {{ blog.content }}
      </div>
      <div class="opacity-60 mt-3 text-start">{{ blog.created_at }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Blog } from '~/core/types/blog.type';
import { getBaseApiUrl } from '~/core/utils/apiUrl.util';

defineProps({
  blog: {
    required: true,
    type: Object as () => Blog,
  },
  width: {
    required: true,
  },
  height: {
    required: true,
  },
});

const baseApiUrl = getBaseApiUrl();

</script>

<style scoped>
.truncate-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.truncate-ellipsis-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>