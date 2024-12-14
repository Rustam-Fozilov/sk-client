<template>
  <div class="bg-white w-[24%] 2xl:w-[32%] xl:w-[48%] sm:w-full h-auto rounded-2xl flex flex-col justify-start">
    <div class="bg-[url('/assets/images/main/title.png')] rounded-t-2xl h-[150px]"></div>
    <div class="flex flex-col justify-between p-5">
      <div class="relative -top-8 flex items-center justify-start gap-1">
        <div class="bg-soft-blue text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
          scholarship
        </div>
        <div class="bg-soft-blue text-white border-[2px] border-[#F1F1F1] w-fit px-5 rounded-full">
          mba
        </div>
      </div>
      <RouterLink to="/blog/1" class="sub-title truncate-ellipsis cursor-pointer">Как поступить на бакалавриат по бизнесу в США</RouterLink>
      <div class="truncate-ellipsis-3 mt-5 opacity-60">
        Когда мы сталкиваемся с трудностями или неприятностями, на английском языке можно использовать разные слова: Problem, Trouble, Issue и Matter. Однако каждое из них имеет свои нюансы. В этой статье разберем
      </div>
      <div class="opacity-60 mt-3">15.12.2024</div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  blog: {
    required: false,
  }
});

</script>

<style scoped>
.truncate-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.truncate-ellipsis-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>