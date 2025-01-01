<template>
  <div>
    <div v-if="realWidth > 0" class="flex gap-5 flex-wrap w-full sm:justify-center">
      <real-blog-card v-for="blog in blogs" :blog="blog" :width="`${realWidth}px`" :height="`${realWidth}px`"/>
    </div>
    <pagination :total="paginationData.total" :per_page="paginationData.per_page" :current_page="paginationData.current_page" v-if="blogs.length > 0"></pagination>
  </div>
</template>

<script setup lang="ts">
import RealBlogCard from '../modules/blog/RealBlogCard.vue';
import pagination from '../modules/pagination.vue';
import { type Blog } from '~/core/types/blog.type';
import { type Pagination } from '~/core/types/pagination.type';

defineProps({
  paginationView: {
    required: false,
    type: Boolean,
    default: true
  },
  blogs: {
    required: true,
    type: Array as () => Blog[],
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
