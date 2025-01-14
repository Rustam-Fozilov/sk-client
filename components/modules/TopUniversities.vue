<template>
  <div>
    <div class="flex flex-col gap-12 sm:gap-5">
      <div class="flex justify-between items-end sm:flex-col sm:items-start sm:gap-1">
        <div class="title md:mid-title">
          Top universitetlar
        </div>
        <NuxtLink to="/universities/" class="hover:underline">
          Barchasini ko'rish
        </NuxtLink>
      </div>

      <div>
        <line-loader v-if="loading" class="text-center"/>
        <university-carousel-list v-if="universities.length > 0" :universities="universities"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { University } from '~/core/types/university.type';
import UniversityCarouselList from '../main/UniversityCarouselList.vue';
import { UniversityService } from '~/core/services/university.service';

const universities = ref<University[]>([]);
const service = new UniversityService();
const loading = ref(false);

const fetchUniversities = async () => {
  loading.value = true;

  const {universities: result} = await service.fetchUniversities({
    order_by: 'id',
    order_direction: 'asc',
    per_page: 10,
  });

  universities.value = result;
  loading.value = false;
};

onMounted( async () => {
  await fetchUniversities();
});

</script>
