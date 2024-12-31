<template>
  <div v-if="!hidePagination" id="university_pagination" class="flex justify-end mt-12 sm:mt-7">
    <div class="flex gap-2 items-center">
      <div class="text-[14px] font-tt-medium">{{ calculateCurrentCount }}</div>
      <button @click="firstItem" :disabled="disablePrev" class="hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer rounded-full p-2 transition w-9 h-9">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-6 w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>

      <button @click="prev" :disabled="disablePrev" class="hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer rounded-full p-2 transition w-9 h-9">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-6 w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button @click="next" :disabled="disableNext" class="hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer rounded-full p-2 transition w-9 h-9">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-6 w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <button @click="lastItem" :disabled="disableNext" class="hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer rounded-full p-2 transition w-9 h-9">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-6 w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  total: {
    required: true,
    type: Number,
  },
  per_page: {
    required: true,
    type: Number,
  },
  current_page: {
    required: true,
    type: Number,
  },
});

const hidePagination = computed(() => props.total <= props.per_page);
const router = useRouter();
const disablePrev = computed(() => props.current_page === 1);
const disableNext = computed(() => props.current_page === Math.ceil(props.total / props.per_page));
const calculateCurrentCount = computed(() => {
  return `${props.total} dan ${(props.current_page - 1) * props.per_page + 1}-${props.current_page * props.per_page}`;
});

const next = () => {
  if (props.current_page <= Math.ceil(props.total / props.per_page)) {
    router.push({ query: { page: props.current_page + 1 } });
  }
};

const lastItem = () => {
  router.push({ query: { page: Math.ceil(props.total / props.per_page) } });
};

const prev = () => {
  if (props.current_page > 1) {
    router.push({ query: { page: props.current_page - 1 } });
  }
};

const firstItem = () => {
  router.push({ query: { page: 1 } });
};

</script>