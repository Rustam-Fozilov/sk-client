<template>
  <div>
    <div class="my-container">
      <div class="py-24 flex justify-between gap-5 xl:py-16 xl:flex-col sm:py-7">
        <div class="title w-1/2 xl:w-full sm:mid-title">
          <span class="font-tt-medium">Universitetlar. </span>
          <span class="opacity-50">Amerika orzuingizni amalga oshiring</span>
        </div>
        <div class="w-1/2 xl:w-full">
          <div class="flex justify-end gap-5 xl:justify-start sm:w-full sm:flex-wrap sm:gap-3">
            <div class="px-10 sm:px-7 py-5 sm:py-3 rounded-2xl bg-white inline-block">
              <div class="title sm:mid-title">100+</div>
              <div class="opacity-50 sub-title">Universitetlar</div>
            </div>
            <div class="px-10 sm:px-7 py-5 sm:py-3 rounded-2xl bg-white inline-block">
              <div class="title sm:mid-title">50+</div>
              <div class="opacity-50 sub-title">Shaxarlar</div>
            </div>
            <div class="px-10 sm:px-7 py-5 sm:py-3 rounded-2xl bg-white inline-block">
              <div class="title sm:mid-title">40+</div>
              <div class="opacity-50 sub-title">Yo'nalishlar</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="py-24 my-container lg:py-12">
        <div>
          <div class="text-center flex flex-col gap-8 items-center sm:gap-5">
            <div class="mid-title">Orzuingizdagi universitetni toping</div>
            <div>
              <form action="">
                <div class="border-[1px] border-black border-opacity-20 rounded-full w-fit bg-soft-white px-7 sm:px-5 py-4 sm:py-3 flex gap-3 items-center justify-start">
                  <search-icon width="22px" class="opacity-70"/>
                  <input type="text" placeholder="Qidiruv..." class="outline-none bg-transparent sub-title">
                </div>
              </form>
            </div>
          </div>
          <div class="mt-8 font-tt-regular flex gap-2">
            <div class="opacity-70">Saralash:</div>
            <div class="font-tt-medium cursor-pointer hover:opacity-100">Yangi qo'shilganlar</div>
            <div class="cursor-pointer opacity-70 hover:opacity-100 transition duration-300">Mashxurlar</div>
          </div>
        </div>

        <div id="university_cards">
          <div class="mt-12 lg:mt-5">
            <university-list :universities="universities"/>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <the-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UniversityList from '~/components/main/UniversityList.vue';
import TheFooter from '~/components/TheFooter.vue';
import { UniversityService } from '~/core/services/university.service';
import type { University } from '~/core/types/university.type';

definePageMeta({
  layout: "main-layout"
});

const universities = ref<University[]>([]);
const service = new UniversityService();

onMounted(() => {
  fetchUniversities();
});

const fetchUniversities = async () => {
  universities.value = await service.fetchUniversities();  
};

</script>
