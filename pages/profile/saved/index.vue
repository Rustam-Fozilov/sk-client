<template>
  <div class="my-container">
    <div class="text-2xl font-tt-medium border-b border-b-black border-opacity-10 py-10 lg:py-5 md:py-3 md:text-lg">
      <div>Salom Rustam</div>
    </div>

    <div class="mt-12 md:mt-5">
      <simple-loader v-if="loading" class="text-center"/>
      <university-list v-if="universities.length > 0" :universities="universities" :pagination-data="paginationData"/>
      <div v-if="universities.length === 0" class="text-center">Sizda hali saqlanganlar yo'q</div>
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
import { UniversityService } from '~/core/services/university.service';
import SimpleLoader from '~/components/ui/SimpleLoader.vue';
import { type Pagination } from '~/core/types/pagination.type';

definePageMeta({
  layout: "main-layout"
});

onMounted(async () => {
  if (!$getSessionItem('authToken')) {
    router.push('/login');
    return;
  }

  await fetchUniversities({
    per_page: perPage,
    page: currentPage.value
  });
});

onUpdated(async () => {
  const check = route.query.page ? parseInt(route.query.page as string) : 1;
  if (check !== currentPage.value) {
    currentPage.value = parseInt(route.query.page as string);
    await fetchUniversities({
      per_page: perPage,
      page: currentPage.value
    });
    return;
  }
});

const universities = ref<University[]>([]);
const service = new UniversityService();
const router = useRouter();
const route = useRoute();
const { $getSessionItem } = useNuxtApp();
const loading = ref(false);
const currentPage = ref<number>(route.query.page ? parseInt(route.query.page as string) : 1);
const perPage = 16;

const paginationData = ref<Pagination>({
  total: 0,
  per_page: perPage,
  current_page: currentPage.value,
});

const fetchUniversities = async (params?: Object) => {
  loading.value = true;

  const {savedItems: data, pagination} = await service.fetchSavedUniversities(params);

  paginationData.value = pagination;
  universities.value = [];
  data.filter((item) => item.saveable_type === 'university').map((item) => {
    universities.value.push(item);
  });

  loading.value = false;
};

</script>

<style scoped>

</style>