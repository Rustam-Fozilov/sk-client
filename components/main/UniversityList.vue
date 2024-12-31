<template>
  <div>
    <div v-if="realWidth > 0" class="flex gap-5 flex-wrap">
      <university-card v-for="university in universities" :university="university" :width="`${realWidth}px`" :height="`${realWidth}px`"/>
    </div>
    <pagination :total="paginationData.total" :per_page="paginationData.per_page" :current_page="paginationData.current_page" v-if="universities.length > 0 && paginationView"></pagination>
  </div>
</template>

<script setup lang="ts">
import UniversityCard from '../modules/UniversityCard.vue';
import pagination from '../modules/pagination.vue';
import { type University } from '~/core/types/university.type';
import { type Pagination } from '~/core/types/pagination.type';

defineProps({
  paginationView: {
    required: false,
    type: Boolean,
    default: true
  },
  universities: {
    required: true,
    type: Array as () => University[],
  },
  paginationData: {
    required: true,
    type: Object as () => Pagination,
  }
});

const windowWidth = ref<Number | any>(1920);
const realWidth = ref<Number | any>(0);

const calculateCardWidth = () => {
  windowWidth.value = window.innerWidth;
  let clearValue = windowWidth.value - (windowWidth.value * 7 / 100)
  let leftValue = clearValue - (3.8 * 20);
  realWidth.value = leftValue / 4;

  if (windowWidth.value <= 1425) {
    leftValue = clearValue - (2.8 * 20)
    realWidth.value = leftValue / 3;
  }

  if (windowWidth.value <= 1024) {
    leftValue = clearValue - (1.8 * 20)
    realWidth.value = leftValue / 2;
  }

  if (windowWidth.value <= 640) {
    leftValue = clearValue - (0.8 * 20)
    realWidth.value = leftValue / 1;
  }
}

onMounted(() => {
  calculateCardWidth();

  window.addEventListener('resize', () => {
    calculateCardWidth();
  });
});

</script>
