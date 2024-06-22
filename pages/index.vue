<template>
  <div>
    <div class="my-container">
<!--      TOP HEADER-->
      <div class="flex justify-between mt-7">
        <div class="title">
          <div class="flex items-center gap-2 mt-[102px]">
            <img class="h-12 object-cover rounded-full w-36" src="../assets/images/main/title.png" alt="Title image">
            <div class="m-0 p-0 text-wrap"  style="line-height: normal;">Amerika universitetlariga kirish</div>
          </div>
          <div class="p-0 m-0"  style="line-height: normal;">
            va to'liq grant yutish bo'yicha
          </div>
          <div class="flex items-end gap-2 text-nowrap"  style="line-height: normal;">
            <div>batafsil qo'llanma</div>
            <div class="w-80 border border-black border-opacity-20 h-12 rounded-full flex items-center justify-between p-5 hover:border-opacity-70 transition duration-300">
              <search-icon/>
              <input
                  id="search-input"
                  type="text"
                  class="font-tt-regular tracking-normal bg-transparent outline-0 text-rg ml-2"
                  placeholder="Qidiruv..."
              />
              <div class="text-rg font-tt-regular tracking-normal">Ctrl + K</div>
            </div>
          </div>
          <div class="w-full flex justify-end mt-5 text-sm font-tt-regular tracking-normal opacity-80 text-wrap">
            <div class="w-[60%]">
              Amerika universitetlarida mutlaqo bepul o’qish uchun batafsil qo’llanma, yohud qanday qilib amerikaga surish mumkin.
            </div>
          </div>
        </div>
        <div class="w-5/12 h-full">
          <img class="w-full h-full object-cover rounded-3xl" src="../assets/images/main/banner.png" alt="Banner">
        </div>
      </div>

      <div>
        <top-universities/>
      </div>

      <div class="mt-24">
        <blog-card/>
      </div>

      <div class="mt-24">
        <faq/>
      </div>
    </div>

    <div class="mt-24">
      <the-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from "~/components/ui/SearchIcon.vue";
import TopUniversities from "~/components/modules/top-universities.vue";
import BlogCard from "~/components/modules/blog-card.vue";
import Faq from "~/components/modules/faq.vue";

definePageMeta({
  layout: "main-layout"
})

</script>

<style scoped>

#search-input::placeholder {
  color: black;
  opacity: 1;
}

</style>
