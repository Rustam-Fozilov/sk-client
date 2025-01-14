<template>
  <div class="my-container">
    <div class="text-2xl font-tt-medium border-b border-b-black border-opacity-10 py-10 lg:py-5 md:py-3 md:text-lg">
      <div>Salom {{ me?.name }}</div>
    </div>

    <line-loader v-if="loading" class="text-center"/>
    <div class="mt-12 md:mt-5">
      <div v-if="universities.length > 0 && !loading">
        <div class="mid-title mb-5 sm:text-lg sm:mb-2">Universitetlar</div>
        <university-list :universities="universities" :pagination-data="paginationData" :pagination-view="blogs.length < 1"/>
      </div>

      <div v-if="blogs.length > 0 && !loading">
        <div class="mid-title my-5 sm:text-lg sm:my-2">Blog</div>
        <blog-list :blogs="blogs" :pagination-data="paginationData"/>
      </div>
      <div v-if="universities.length === 0 && blogs.length === 0 && !loading" class="text-center">Sizda hali saqlanganlar yo'q</div>
    </div>
  </div>
  <div class="mt-16">
    <the-footer/>
  </div>
</template>

<script setup lang="ts">
import UniversityList from '~/components/main/UniversityList.vue';
import TheFooter from '~/components/TheFooter.vue';
import { type University } from '~/core/types/university.type';
import { type Pagination } from '~/core/types/pagination.type';
import { type Blog } from '~/core/types/blog.type';
import { UserService } from '~/core/services/user.service';
import BlogList from '~/components/main/BlogList.vue';

definePageMeta({
  layout: "main-layout"
});

useSeoMeta({
  title: 'Surish Kerak | Profil',
  ogTitle: 'Surish Kerak | Profil',
  description: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma',
  ogDescription: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma',
  ogImage: 'https://surish-kerak.uz/images/og.jpg',
  ogUrl: 'https://surish-kerak.uz',
  ogType: 'website',
  robots: 'index, follow',
  keywords: 'Surish Kerak, Amerika universitetlariga kirish, grant yutish, batafsil qo\'llanma',
  applicationName: 'Surish Kerak | Profil',
});

onMounted(async () => {
  if (!$getSessionItem('authToken')) {
    router.push('/login');
    return;
  }

  await fetchSavedList({
    per_page: perPage,
    page: currentPage.value
  });
});

onUpdated(async () => {
  const check = route.query.page ? parseInt(route.query.page as string) : 1;
  if (check !== currentPage.value) {
    currentPage.value = parseInt(route.query.page as string);
    loading.value = true;
    await fetchSavedList({
      per_page: perPage,
      page: currentPage.value
    });
    loading.value = false;
    return;
  }
});

const universities = ref<University[]>([]);
const blogs = ref<Blog[]>([]);
const service = new UserService();
const router = useRouter();
const route = useRoute();
const { $getSessionItem } = useNuxtApp();
const loading = ref(false);
const currentPage = ref<number>(route.query.page ? parseInt(route.query.page as string) : 1);
const perPage = 16;
const me = JSON.parse($getSessionItem('me') ?? '{}');

const paginationData = ref<Pagination>({
  total: 0,
  per_page: perPage,
  current_page: currentPage.value,
});

const fetchSavedList = async (params?: Object) => {
  loading.value = true;

  const {savedItems: data, pagination} = await service.fetchSavedData(params);

  paginationData.value = pagination;
  universities.value = [];
  blogs.value = [];

  data.filter((item) => item.saveable_type === 'university').map((item) => {
    universities.value.push(item);
  });

  data.filter((item) => item.saveable_type === 'blog').map((item) => {
    blogs.value.push(item);
  });

  loading.value = false;
};

</script>

<style scoped>

</style>