<template>
  <div>
    <div class="my-container">
      <div class="mt-12 md:mt-5">
        <BlogHeaderCard/>
      </div>

      <div class="mt-12 w-full bg-white rounded-3xl sm:rounded-2xl py-12 px-60 2xl:px-14 md:mt-5 sm:py-6 sm:px-6">
        <div class="mid-title sm:sub-title">Pathway</div>
        <div class="mt-12 text-sm 2xl:mt-7 sm:mt-2 sm:text-rg">
          Princeton University - 1746-yilda ochilgan New Jersey
          shtatining Princeton shaxrida joylashgan AQSHning 4-eng
          qadimiy universiteti va Amerika revolutsiyasidan oldin
          tashkil etilgan 9 ta universitetlardan biri. 8500 ga
          yaqin studentlar tahsil oladi. Prinston universitetining
          asosiy kampusi New Jersey shtatining Princeton shahri
          markazida joylashgan. Kampusda 10 ta kutubxona, san'at
          muzeyi, teatr, basseynli katta fitnes markazi va tennis
          korti mavjud. Prinston universitetining asosiy kampusi
          New Jersey shtatining Princeton shahri markazida
          joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi,
          teatr, basseynli katta fitnes markazi va tennis korti
          mavjud. Prinston universitetining asosiy kampusi New
          Jersey shtatining Princeton shahri markazida joylashgan.
          Kampusda 10 ta kutubxona, san'at muzeyi, teatr,
          basseynli katta fitnes markazi va tennis korti mavjud.
          Prinston universitetining asosiy kampusi New Jersey
          shtatining Princeton shahri markazida joylashgan.
          Kampusda 10 ta kutubxona, san'at muzeyi, teatr,
          basseynli katta fitnes markazi va tennis korti mavjud.
          Prinston universitetining asosiy kampusi New Jersey
          shtatining Princeton shahri markazida joylashgan.
          Kampusda 10 ta kutubxona, san'at muzeyi, teatr,
          basseynli katta fitnes markazi va tennis korti mavjud.
          Prinston universitetining asosiy kampusi New Jersey
          shtatining Princeton shahri markazida joylashgan.
          Kampusda 10 ta kutubxona, san'at muzeyi, teatr,
          basseynli katta fitnes markazi va tennis korti mavjud.
          Prinston universitetining asosiy kampusi New Jersey
          shtatining Princeton shahri markazida joylashgan.
          Kampusda 10 ta kutubxona, san'at muzeyi, teatr,
          basseynli katta fitnes markazi va tennis korti mavjud.
        </div>
        <div class="w-full h-px mt-12 bg-black bg-opacity-20 sm:mt-5"></div>
        <div class="mt-7 flex gap-5 items-center sm:mt-5 sm:gap-3">
          <div @click="makeLiked" class="flex items-end gap-1 cursor-pointer">
            <like-icon v-if="!isLiked" />
            <like-icon-pressed v-if="isLiked" />
            <div>12</div>
          </div>
          <div @click="toggleSaved" class="cursor-pointer">
            <save-icon2 v-if="!isSaved" />
            <save-yellow-icon v-if="isSaved" />
          </div>
          <div @click="makeShared" class="cursor-pointer">
            <share-icon v-if="!isShared" />
            <read-icon width="25px" v-if="isShared" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "main-layout"
});

const isSaved = ref(false);
const isShared = ref(false);
const isLiked = ref(false);

const toggleSaved = () => {
  isSaved.value = !isSaved.value;
};

const makeShared = () => {
  isShared.value = true;
};

const makeLiked = () => {
  isLiked.value = !isLiked.value;
};

</script>

<style scoped>

</style>