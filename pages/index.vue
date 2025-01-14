<template>
  <div>
    <div class="my-container">
<!--      TOP HEADER-->
      <div class="flex justify-between mt-7 gap-2 2xls:flex-col 2xl:items-center">
        <div class="title">
          <div class="flex items-center gap-2 mt-[102px] 2xls:text-center 2xls:justify-center md:mt-7">
            <img class="h-12 object-cover rounded-full w-36 2xls:w-28 2xls:h-10 md:hidden" src="../assets/images/main/title.png" alt="Title image">
            <div class="m-0 p-0 2xls:text-center md:mid-title sm:hidden" style="line-height: normal;">Amerika universitetlariga kirish</div>
            <div class="hidden m-0 p-0 text-lg sm:flex mb-5" style="line-height: normal;">
              Amerika universitetlariga kirish va to'liq grant yutish bo'yicha batafsil qo'llanma
            </div>
          </div>

          <div class="p-0 m-0 text-wrap 2xls:text-center md:mid-title sm:hidden" style="line-height: normal;">
            va to'liq grant yutish bo'yicha
          </div>

          <div class="flex items-end gap-2 text-nowrap 2xls:flex-col 2xls:items-center"  style="line-height: normal;">

            <div class="md:mid-title sm:hidden">batafsil qo'llanma</div>

            <div @click="modalService.openSearchModal" class="w-80 border cursor-pointer border-black border-opacity-20 h-12 rounded-full flex items-center justify-between p-5 hover:border-opacity-70 transition duration-300">
              <div class="flex gap-3 items-center">
                <search-icon/>
                <div class="font-tt-regular tracking-normal text-rg">Qidiruv...</div>
              </div>
              <div class="text-rg font-tt-regular tracking-normal">Ctrl + K</div>
            </div>
          </div>
          <div class="w-full flex justify-end mt-5 text-sm font-tt-regular tracking-normal opacity-80 text-wrap 2xls:justify-center 2xls:mb-5">
            <div class="w-[60%] 2xls:text-center sm:w-full">
              Amerika universitetlarida mutlaqo bepul o’qish uchun batafsil qo’llanma, yohud qanday qilib amerikaga surish mumkin.
            </div>
          </div>
        </div>
        <div class="w-5/12 h-full 2xls:w-full">
          <img class="w-full h-full object-cover rounded-3xl" src="/assets/images/main/banner.png" alt="Banner">
          <div class="relative w-auto -top-[4.5rem] h-full right-5 flex justify-end">
            <div
                @mouseover="isHoverToUniversBtn = true"
                @mouseleave="isHoverToUniversBtn = false"
                @click="gotoUniversities"
                class="flex cursor-pointer"
            >
              <div class="bg-white py-[14px] px-9 rounded-full">
                Universitetlar
              </div>
              <div
                  id="arrow_btn"
                  :class="{'rotate-[405deg]': isHoverToUniversBtn}"
                  class="rounded-full bg-white w-12 h-12 flex justify-center items-center transition ease-in-out duration-[400ms]"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5066 1.3934C12.5066 0.896341 12.1037 0.493398 11.6066 0.493398L3.5066 0.493398C3.00955 0.493398 2.6066 0.896342 2.6066 1.3934C2.6066 1.89045 3.00955 2.2934 3.5066 2.2934L10.7066 2.2934L10.7066 9.4934C10.7066 9.99045 11.1095 10.3934 11.6066 10.3934C12.1037 10.3934 12.5066 9.99045 12.5066 9.4934L12.5066 1.3934ZM1.6364 12.6364L12.243 2.02979L10.9702 0.757002L0.363604 11.3636L1.6364 12.6364Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <top-universities/>
      </div>

      <div class="mt-24 xl:mt-12">
        <blog-card2/>
      </div>

      <div class="mt-24 xl:mt-12 md:mt-7">
        <q-a/>
      </div>
    </div>

    <div class="mt-24 xl:mt-12">
      <the-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from "~/components/ui/SearchIcon.vue";
import TopUniversities from "~/components/modules/TopUniversities.vue";
import BlogCard2 from "~/components/modules/BlogCard2.vue";
import QA from "~/components/modules/QA.vue";
import { ModalService } from "~/core/services/modal.service";
import TheFooter from "~/components/TheFooter.vue";

definePageMeta({
  layout: "main-layout"
});

useHead({
  title: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma',
  meta: [
    {name: 'description', content: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma'},
    {name: 'robots', content: 'index, follow'},
    {name: 'keywords', content: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
    {name: 'content-type', content: 'text/html; charset=utf-8'},
    {name: 'application-name', content: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma'},
    {property: 'og:type', content: 'website'},
    {property: 'og:title', content: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma'},
    {property: 'og:description', content: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma'},
    {property: 'og:url', content: 'https://surish-kerak.uz'},
    {property: 'og:image', content: 'https://surish-kerak.uz/images/og.jpg'},
    {property: 'og:image:secure_url', content: 'https://surish-kerak.uz/images/og.jpg'},
    {property: 'og:image:type', content: 'image/jpg'},
    {property: 'og:image:width', content: '400'},
    {property: 'og:image:height', content: '300'},
    {property: 'og:image:alt', content: 'website'},
  ],
  link: [
    {rel: 'icon', href: '/favicon.ico'}
  ],
  script: [
    {src: 'https://www.googletagmanager.com/gtag/js?id=G-CGR30YJZR7', async: true},
    {innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-CGR30YJZR7');
    `,tagPosition: 'head'
    },
    {innerHTML: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NK3FMXJN');
    `,tagPosition: 'head'
    },
  ],
  noscript: [
    {body: true, innerHTML: `
        // Google Tag Manager (noscript)
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK3FMXJN" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        // End Google Tag Manager (noscript)
    `, tagPosition: 'bodyOpen'
    },
  ]
});

const isHoverToUniversBtn = ref(false);
const router = useRouter();
const modalService = new ModalService();

const gotoUniversities = () => {
  router.push('/universities')
}

</script>

<style scoped>

</style>
