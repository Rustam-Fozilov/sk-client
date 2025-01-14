<template>
  <div>
    <!-- <div class="absolute top-0 z-[100000] text-center w-full bg-soft-blue font-tt-medium py-1">Sayt ishlab chiqishda, tez orada stabil holatga tushadi</div> -->
    <the-navbar/>

    <div class="pt-24">
      <slot/>
    </div>

    <search-modal/>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import SearchModal from "@/components/modals/SearchModal.vue";
import { ModalService } from "~/core/services/modal.service";

useHead({
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
    {
      innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK3FMXJN" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
      tagPosition: 'bodyOpen'
    },
  ]
});

const modalService = new ModalService();

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      modalService.openSearchModal();
    }

    if (e.key === 'Escape') {
      modalService.closeAllModals();
    }
  });
})

</script>

<style>

</style>
