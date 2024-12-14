<template>
  <div>
    <div class="flex gap-5 flex-wrap w-full">
      <real-blog-card v-for="blog in blogs" :blog="blog"/>
    </div>
    <pagination v-if="paginationView"></pagination>
  </div>
</template>

<script setup lang="ts">
import RealBlogCard from '../modules/blog/RealBlogCard.vue';
import pagination from '../modules/pagination.vue';

defineProps({
  paginationView: {
    required: false,
    type: Boolean,
    default: true
  },
  blogs: {
    required: false,
    type: Array,
    default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  }
});

</script>
