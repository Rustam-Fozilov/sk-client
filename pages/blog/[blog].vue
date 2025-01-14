<template>
  <Head>
    <Title>Surish Kerak | {{ blog?.title }}</title>
  </Head>
  <div>
    <div class="my-container">
      <line-loader v-if="loading" class="text-center"/>
      <div class="mt-12 md:mt-5">
        <BlogHeaderCard v-if="blog" :blog="blog"/>
      </div>

      <div v-if="blog" class="mt-12 w-full bg-white rounded-3xl sm:rounded-2xl py-12 px-60 2xl:px-14 md:mt-5 sm:py-6 sm:px-6">
        <div v-html="blog?.content" class="text-sm 2xl:mt-7 sm:mt-2 sm:text-rg"></div>
        <div class="w-full h-px mt-12 bg-black bg-opacity-20 sm:mt-5"></div>
        <div class="mt-7 flex gap-5 items-center sm:mt-5 sm:gap-3">
          <div @click="makeLiked" class="flex items-end gap-1 cursor-pointer">
            <like-icon v-if="!isLiked" />
            <like-icon-pressed v-if="isLiked" />
            <div>{{ blog?.like_count }}</div>
          </div>
          <div @click="toggleSaved" class="cursor-pointer">
            <save-icon2 v-if="!isSaved" />
            <save-yellow-icon v-if="isSaved" />
          </div>
          <div @click="makeShared" class="cursor-pointer">
            <share-icon v-if="!isShared" />
            <read-icon width="25px" v-if="isShared" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogHeaderCard from '~/components/modules/BlogHeaderCard.vue';
import LikeIcon from '~/components/ui/LikeIcon.vue';
import LikeIconPressed from '~/components/ui/LikeIconPressed.vue';
import SaveIcon2 from '~/components/ui/SaveIcon2.vue';
import SaveYellowIcon from '~/components/ui/SaveYellowIcon.vue';
import ShareIcon from '~/components/ui/ShareIcon.vue';
import ReadIcon from '~/components/ui/ReadIcon.vue';
import TheFooter from '~/components/TheFooter.vue';
import { type Blog } from '~/core/types/blog.type';
import { BlogService } from '~/core/services/blog.service';

definePageMeta({
  layout: "main-layout"
});

useSeoMeta({
  ogTitle: 'Surish Kerak | Blog',
  description: 'Surish Kerak | Blog',
  ogDescription: 'Surish Kerak | Blog',
  ogImage: 'https://surish-kerak.uz/images/og.jpg',
  ogUrl: 'https://surish-kerak.uz',
  ogType: 'website',
  robots: 'index, follow',
  keywords: 'Surish Kerak, Universitetlar, Stanford, Stipendiya, Kirish, Qabul',
  applicationName: 'Surish Kerak | Blog',
});

const isSaved = ref<boolean|undefined>(false);
const isShared = ref<boolean>(false);
const isLiked = ref<boolean|undefined>(false);
const blog = ref<Blog|null>();
const service = new BlogService();
const route = useRoute();
const router = useRouter();
const id = Number(route.params.blog);
const { $getSessionItem } = useNuxtApp();
const loading = ref<boolean>(false);

onMounted(async () => {
  loading.value = true;
  await fetchBlog();
  loading.value = false;

  isSaved.value = blog.value?.is_saved;
  isLiked.value = blog.value?.is_liked;
});

const fetchBlog = async () => {
  blog.value = await service.fetchBlogById(id);
};

const toggleSaved = () => {
  if (!$getSessionItem('me')) {
    router.push(`/login?redirect=blog/${id}`);
    return;
  }

  isSaved.value = !isSaved.value;

  if (isSaved.value) {
    service.saveBlog(id);
  } else {
    service.unsaveBlog(id);
  }
};

const makeShared = () => {
  navigator.clipboard.writeText(window.location.href);
  isShared.value = true;

  setTimeout(() => {
    isShared.value = false;
  }, 3000);
};

const makeLiked = () => {
  if (!$getSessionItem('me')) {
    router.push(`/login?redirect=blog/${id}`);
    return;
  }

  isLiked.value = !isLiked.value;

  if (isLiked.value) {
    blog.value!.like_count++;
    service.likeBlog(id);
  } else {
    blog.value!.like_count--;
    service.unlikeBlog(id);
  }
};

</script>
