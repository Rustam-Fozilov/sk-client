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
        <simple-loader v-if="loading" class="text-center"/>
        <university-carousel-list :universities="universities"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { University } from '~/core/types/university.type';
import UniversityCarouselList from '../main/UniversityCarouselList.vue';
import { UniversityService } from '~/core/services/university.service';
import SimpleLoader from '~/components/ui/SimpleLoader.vue';

const universities = ref<University[]>([]);
const service = new UniversityService();
const loading = ref(false);

const fetchUniversities = async () => {
  const {universities: result, pagination} = await service.fetchUniversities({
    per_page: 10,
  });

  universities.value = result;
};

loading.value = true;
await fetchUniversities();
loading.value = false;

</script>
