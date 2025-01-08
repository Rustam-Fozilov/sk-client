<template>
  <div>
    <div class="absolute top-0 z-[100000] text-center w-full bg-soft-blue font-tt-medium py-1">Sayt ishlab chiqishda, tez orada stabil holatga tushadi</div>
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
