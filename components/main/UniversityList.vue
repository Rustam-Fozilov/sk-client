<template>
  <div>
    <div v-if="realWidth > 0" class="flex gap-5 flex-wrap">
      <university-card v-for="university in universities" :university="university" :width="`${realWidth}px`" :height="`${realWidth}px`"/>
    </div>
    <pagination></pagination>
  </div>
</template>

<script setup lang="ts">

defineProps({
  universities: {
    required: false,
    type: Array,
    default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  }
})

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
}

onMounted(() => {
  calculateCardWidth();

  window.addEventListener('resize', () => {
    calculateCardWidth();
  })
})

</script>
