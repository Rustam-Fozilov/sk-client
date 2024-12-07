<template>
  <div>
    <div class="w-full flex flex-col items-center gap-5 xl:gap-3">
      <div class="title md:mid-title">Surish Kerak Blog</div>
      <div class="opacity-50 w-1/2 text-center text-md tracking-tight xl:leading-none lg:w-full md:text-sm">Amerika Universitetlariga topshirish, to’liq grantni qo’lga kiritish, visa masalalari, hujjat topshirish, va boshqa mavzularda gaplashamiz.</div>
    </div>
    <div class="mt-7 flex items-start justify-between h-[650px] xl:flex-col xl:gap-5 xl:h-auto">
      <div class="cursor-pointer w-[48%] xl:w-full xl:h-[350px] flex flex-col justify-end items-start h-full rounded-3xl bg-[url('/assets/images/main/blog-banner.png')] bg-cover xl:bg-center">
        <div class="flex flex-col gap-12 w-[70%] bg-white p-5 rounded-tr-3xl rounded-bl-3xl xl:w-[40%] lg:w-full xl:gap-5 lg:rounded-tr-none lg:rounded-e-3xl">
          <div class="mid-title text-ellipsis overflow-hidden whitespace-nowrap xl:text-lg sm:text-md">
            Как поступить на магистратуру в Европе и учиться бесплатно
          </div>
          <div
              @mouseover="isHoverToUniversBtn = true"
              @mouseleave="isHoverToUniversBtn = false"
              class="flex cursor-pointer"
          >
            <div class="bg-primary-blue py-[12px] px-12 text-white rounded-full">
              Blog
            </div>
            <div
                id="arrow_btn"
                :class="{'rotate-[405deg]': isHoverToUniversBtn}"
                class="rounded-full bg-primary-blue w-12 h-12 flex justify-center items-center transition ease-in-out duration-[400ms]"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5066 1.3934C12.5066 0.896341 12.1037 0.493398 11.6066 0.493398L3.5066 0.493398C3.00955 0.493398 2.6066 0.896342 2.6066 1.3934C2.6066 1.89045 3.00955 2.2934 3.5066 2.2934L10.7066 2.2934L10.7066 9.4934C10.7066 9.99045 11.1095 10.3934 11.6066 10.3934C12.1037 10.3934 12.5066 9.99045 12.5066 9.4934L12.5066 1.3934ZM1.6364 12.6364L12.243 2.02979L10.9702 0.757002L0.363604 11.3636L1.6364 12.6364Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[48%] h-full flex flex-col gap-7 xl:w-full xl:h-[550px] sm:gap-5 sm:h-auto">
        <div class="flex w-full h-full justify-between items-center sm:flex-col sm:gap-5">
          <div class="bg-white w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px]"></div>
          <div class="bg-white w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px]"></div>
        </div>
        <div class="flex w-full h-full justify-between items-center sm:flex-col sm:gap-5">
          <div class="bg-white w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px]"></div>
          <div class="bg-white w-[48%] h-[98%] rounded-2xl sm:w-full sm:h-[250px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isHoverToUniversBtn = ref(false)

</script>
