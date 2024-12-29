<template>
  <div>
    <carousel v-if="realWidth > 0" class="flex gap-5 flex-wrap" :items-to-show="itemsToShow" :autoplay="2000">
      <slide v-for="university in universities" key="university">
        <university-card :university="university" :width="`${realWidth}px`" :height="`${realWidth}px`"/>
      </slide>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import UniversityCard from '../modules/UniversityCard.vue';
import { type University } from '~/core/types/university.type';

const props = defineProps({
  universities: {
    required: true,
    type: Array as () => University[],
  }
});

const windowWidth = ref<Number | any>(1920);
const realWidth = ref<Number | any>(0);
const itemsToShow = ref<Number>(4);
const universities = ref<University[]>([]);

const calculateCardWidth = () => {
  windowWidth.value = window.innerWidth;

  let clearValue = windowWidth.value - (windowWidth.value * 7 / 100)
  let leftValue = clearValue - (3.8 * 20);

  realWidth.value = leftValue / 4;

  if (windowWidth.value <= 1425) {
    leftValue = clearValue - (2.8 * 20)
    realWidth.value = leftValue / 3;

    itemsToShow.value = 3;
  }

  if (windowWidth.value <= 1024) {
    leftValue = clearValue - (1.8 * 20)
    realWidth.value = leftValue / 2;

    itemsToShow.value = 2;
  }

  if (windowWidth.value <= 660) {
    leftValue = clearValue - (0.8 * 20)
    realWidth.value = leftValue / 1;

    itemsToShow.value = 1;
  }
};

onMounted(async () => {
  calculateCardWidth();
  universities.value = props.universities;

  window.addEventListener('resize', () => {
    calculateCardWidth();
  })
});

</script>
