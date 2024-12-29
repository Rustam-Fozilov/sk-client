<template>
  <div class="my-container">
    <div class="text-2xl font-tt-medium border-b border-b-black border-opacity-10 py-10 lg:py-5 md:py-3 md:text-lg">
      <div>Salom Rustam</div>
    </div>

    <div class="mt-12 md:mt-5">
      <simple-loader v-if="loading" class="text-center"/>
      <university-list v-if="universities.length > 0" :universities="universities" />
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

definePageMeta({
  layout: "main-layout"
});

onBeforeMount(async () => {
  if (!$getSessionItem('authToken')) {
    router.push('/login');
    return;
  }

  await fetchUniversities();
});

const universities = ref<University[]>([]);
const blogs = ref<any[]>([]);
const service = new UniversityService();
const router = useRouter();
const { $getSessionItem } = useNuxtApp();
const loading = ref(false);

const fetchUniversities = async () => {
  loading.value = true;

  let data = await service.fetchSavedUniversities();
  data.filter((item) => item.saveable_type === 'university').map((item) => {
    universities.value.push(item);
  });

  loading.value = false;
};

</script>

<style scoped>

</style>