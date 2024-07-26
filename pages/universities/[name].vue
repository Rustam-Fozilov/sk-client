<template>
  <div>
    <div class="my-container">
      <div>
        <div class="my-16 text-center">
          <div class="title">Harvard University</div>
          <div class="sub-title">Cambridge, US</div>
        </div>

        <div class="w-full h-[650px]">
          <img class="w-full h-full object-cover rounded-3xl" src="/assets/images/main/banner.png" alt="Banner">
        </div>

        <div class="mt-12 w-full bg-white rounded-3xl py-12 px-60">
          <div class="mid-title">
            Pathway
          </div>
          <div class="mt-12 text-sm">
            Princeton University - 1746-yilda ochilgan New Jersey shtatining Princeton shaxrida joylashgan AQSHning 4-eng qadimiy universiteti va Amerika revolutsiyasidan oldin tashkil etilgan 9 ta universitetlardan biri. 8500 ga yaqin studentlar tahsil oladi.

            Prinston universitetining asosiy kampusi New Jersey shtatining Princeton shahri markazida joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi, teatr, basseynli katta fitnes markazi va tennis korti mavjud.
            Prinston universitetining asosiy kampusi New Jersey shtatining Princeton shahri markazida joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi, teatr, basseynli katta fitnes markazi va tennis korti mavjud.
            Prinston universitetining asosiy kampusi New Jersey shtatining Princeton shahri markazida joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi, teatr, basseynli katta fitnes markazi va tennis korti mavjud.
            Prinston universitetining asosiy kampusi New Jersey shtatining Princeton shahri markazida joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi, teatr, basseynli katta fitnes markazi va tennis korti mavjud.
            Prinston universitetining asosiy kampusi New Jersey shtatining Princeton shahri markazida joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi, teatr, basseynli katta fitnes markazi va tennis korti mavjud.
            Prinston universitetining asosiy kampusi New Jersey shtatining Princeton shahri markazida joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi, teatr, basseynli katta fitnes markazi va tennis korti mavjud.
            Prinston universitetining asosiy kampusi New Jersey shtatining Princeton shahri markazida joylashgan. Kampusda 10 ta kutubxona, san'at muzeyi, teatr, basseynli katta fitnes markazi va tennis korti mavjud.
          </div>
          <div class="w-full h-px mt-12 bg-black bg-opacity-20"></div>
          <div class="mt-7 flex gap-5 items-center">
            <div class="flex items-end gap-1 cursor-pointer">
              <like-icon/>
              <div>12</div>
            </div>
            <div class="flex gap-1 items-center cursor-pointer">
              <comment-icon/>
              <div>12</div>
            </div>
            <div @click="toggleSaved" class="cursor-pointer">
              <save-icon2 v-if="!isSaved"/>
              <save-yellow-icon v-if="isSaved"/>
            </div>
            <div @click="makeShared" class="cursor-pointer">
              <share-icon v-if="!isShared"/>
              <read-icon width="25px" v-if="isShared"/>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <university-carousel-list/>
        </div>
      </div>
    </div>

    <div class="mt-24">
      <the-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main-layout"
})

const isSaved = ref(false);
const isShared = ref(false);

const toggleSaved = () => {
  isSaved.value = !isSaved.value;
}

const makeShared = () => {
  isShared.value = true;
}
</script>
