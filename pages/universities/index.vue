<template>
  <div>
    <div class="my-container">
      <div class="py-24 flex justify-between gap-5">
        <div class="title w-1/2">
          <span class="font-tt-medium">Universitetlar. </span>
          <span class="opacity-50">Amerika orzuingizni amalga oshiring</span>
        </div>
        <div class="w-1/2">
          <div class="flex justify-end gap-5">
            <div class="px-10 py-5 rounded-2xl bg-white inline-block">
              <div class="title">100+</div>
              <div class="opacity-50 sub-title">Universitetlar</div>
            </div>
            <div class="px-10 py-5 rounded-2xl bg-white inline-block">
              <div class="title">50+</div>
              <div class="opacity-50 sub-title">Shaxarlar</div>
            </div>
            <div class="px-10 py-5 rounded-2xl bg-white inline-block">
              <div class="title">40+</div>
              <div class="opacity-50 sub-title">Yo'nalishlar</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="py-24 my-container">
        <div>
          <div class="text-center flex flex-col gap-8 items-center">
            <div class="mid-title">Orzuingizdagi universitetni toping</div>
            <div>
              <form action="">
                <div class="border-[1px] border-black border-opacity-20 rounded-full w-fit bg-soft-white px-7 py-4 flex gap-3 items-center justify-start">
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
          <div class="mt-12">
            <university-list/>
          </div>
        </div>

        <div id="university_pagination" class="flex justify-center mt-12">
          <div class="flex gap-2">
            <div>
              <BtnPrimary>
                <template #btn-primary>
                  Oldingisi
                </template>
              </BtnPrimary>
            </div>
            <div class="flex gap-2">
              <div class="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-white hover:bg-soft-blue hover:text-white transition duration-300">
                1
              </div>
              <div class="cursor-pointer w-12 h-12 flex justify-center items-center text-white rounded-full bg-soft-blue">
                2
              </div>
              <div class="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-white hover:bg-soft-blue hover:text-white transition duration-300">
                3
              </div>
              <div class="w-12 h-12 flex justify-center items-center rounded-full bg-white">
                ...
              </div>
              <div class="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-white hover:bg-soft-blue hover:text-white transition duration-300">
                12
              </div>
            </div>
            <div>
              <BtnPrimary>
                <template #btn-primary>
                  Keyingisi
                </template>
              </BtnPrimary>
            </div>
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

definePageMeta({
  layout: "main-layout"
})

</script>
