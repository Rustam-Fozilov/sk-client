<template>
  <div>
    <div class="w-full flex flex-col items-center gap-5 xl:gap-3">
      <div class="title md:mid-title">Blog</div>
      <line-loader v-if="loading" class="text-center w-full"/>
      <div class="opacity-50 w-1/2 text-center text-md tracking-tight xl:leading-none lg:w-full md:text-sm">Amerika Universitetlariga topshirish, to’liq grantni qo’lga kiritish, visa masalalari, hujjat topshirish, va boshqa mavzularda gaplashamiz.</div>
    </div>

    <div class="mt-7 flex items-start justify-between h-[650px] xl:flex-col xl:gap-5 xl:h-auto">
      <div
      class="w-[48%] xl:w-full xl:h-[350px] flex flex-col justify-end items-start h-full rounded-3xl bg-cover xl:bg-center"
      :style="`background-image: url('${baseApiUrl + '/storage/' + blog?.image_link}');`"
      >
        <div class="flex flex-col gap-12 w-[70%] bg-white p-5 rounded-tr-3xl rounded-bl-3xl xl:w-[40%] lg:w-full xl:gap-5 lg:rounded-tr-none lg:rounded-e-3xl">
          <div @click="gotoBlogItem(blog?.id ?? 1)" class="cursor-pointer mid-title text-ellipsis overflow-hidden whitespace-nowrap xl:text-lg sm:text-md">
            {{ blog?.title }}
          </div>
          <div
              @click.stop="gotoBlog"
              @mouseover="isHoverToUniversBtn = true"
              @mouseleave="isHoverToUniversBtn = false"
              class="flex cursor-pointer"
          >
            <RouterLink to="/blog" class="bg-primary-blue py-[12px] px-12 text-white rounded-full">
              Blog
            </RouterLink>
            <div
                id="arrow_btn"
                :class="{'rotate-[405deg]': isHoverToUniversBtn}"
                class="rounded-full bg-primary-blue w-12 h-12 flex justify-center items-center transition ease-in-out duration-[400ms]"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5066 1.3934C12.5066 0.896341 12.1037 0.493398 11.6066 0.493398L3.5066 0.493398C3.00955 0.493398 2.6066 0.896342 2.6066 1.3934C2.6066 1.89045 3.00955 2.2934 3.5066 2.2934L10.7066 2.2934L10.7066 9.4934C10.7066 9.99045 11.1095 10.3934 11.6066 10.3934C12.1037 10.3934 12.5066 9.99045 12.5066 9.4934L12.5066 1.3934ZM1.6364 12.6364L12.243 2.02979L10.9702 0.757002L0.363604 11.3636L1.6364 12.6364Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[48%] h-full flex flex-col gap-7 xl:w-full xl:h-[550px] sm:gap-5 sm:h-auto">
        <div class="flex w-full h-full justify-between items-center sm:flex-col sm:gap-5">
          <div
          @click="gotoBlogItem(blogs[0]?.id)"
          class="w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px] cursor-pointer"
          :style="`background-image: url('${baseApiUrl + '/storage/' + blogs[0]?.image_link}');`"
          >
            <div class="flex flex-col justify-end w-full h-full p-4">
              <div class="text-white font-tt-medium text-md text-ellipsis overflow-hidden whitespace-nowrap">{{ blogs[0]?.title }}</div>
            </div>
          </div>

          <div
          @click="gotoBlogItem(blogs[1]?.id)"
          class="w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px] cursor-pointer"
          :style="`background-image: url('${baseApiUrl + '/storage/' + blogs[1]?.image_link}');`"
          >
            <div class="flex flex-col justify-end w-full h-full p-4">
              <div class="text-white font-tt-medium text-md text-ellipsis overflow-hidden whitespace-nowrap">{{ blogs[1]?.title }}</div>
            </div>
          </div>
        </div>

        <div class="flex w-full h-full justify-between items-center sm:flex-col sm:gap-5">
          <div
          @click="gotoBlogItem(blogs[2]?.id)"
          class="w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px] cursor-pointer"
          :style="`background-image: url('${baseApiUrl + '/storage/' + blogs[2]?.image_link}');`"
          >
            <div class="flex flex-col justify-end w-full h-full p-4">
              <div class="text-white font-tt-medium text-md text-ellipsis overflow-hidden whitespace-nowrap">{{ blogs[2]?.title }}</div>
            </div>
          </div>

          <div
          @click="gotoBlogItem(blogs[3]?.id)"
          class="w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px] cursor-pointer"
          :style="`background-image: url('${baseApiUrl + '/storage/' + blogs[3]?.image_link}');`"
          >
            <div class="flex flex-col justify-end w-full h-full p-4">
              <div class="text-white font-tt-medium text-md text-ellipsis overflow-hidden whitespace-nowrap">{{ blogs[3]?.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogService } from '~/core/services/blog.service';
import { type Blog } from '~/core/types/blog.type';
import { getBaseApiUrl } from '~/core/utils/apiUrl.util';
import LineLoader from '../ui/LineLoader.vue';

const isHoverToUniversBtn = ref(false);
const router = useRouter();
const service = new BlogService();
const blog = ref<Blog|null>(null);
const blogs = ref<Blog[]>([]);
const baseApiUrl = getBaseApiUrl();
const loading = ref<boolean>(false);

onMounted( async () => {
  loading.value = true;
  await fetchBlogs();
  loading.value = false;
});

const gotoBlog = () => {
  router.push('/blog');
}

const gotoBlogItem = (id: number) => {
  router.push('/blog/' + id);
}

const fetchBlogs = async () => {
  const {blogs: result} = await service.fetchBlogs({
    per_page: 5,
    page: 1
  });

  blogs.value = result;
  blog.value = result[0];
  blogs.value.shift();
}

</script>
