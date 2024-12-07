<template>
  <div>
    <div v-if="isSearchModalOpened" @click="modalService.closeAllModals" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-[1000]"></div>
    <div v-if="isSearchModalOpened" class="fixed top-28 z-[1000] left-1/2 -translate-x-1/2 md:w-full md:px-5 md:top-16">
      <div class="w-[750px] flex flex-col items-start bg-soft-white rounded-xl p-7 md:w-full sm:p-5">
        <div class="rounded-full w-full border border-black border-opacity-20 bg-soft-gray py-4 md:py-3 px-6 md:px-3 flex items-center gap-3 sm:gap-2">
          <SearchIcon width="22" height="22"/>
          <input v-focus v-model="searchText" type="text" class="w-full bg-transparent font-tt-regular text-md sm:text-sm outline-none" placeholder="Qidiruv...">
        </div>
        <div v-if="!lastSearch" class="opacity-50 w-full mt-12 text-center md:mt-5">
          Avvalgi qidiruvlar yo'q
        </div>
        <div v-if="lastSearch && searchText.length < 3" class="mt-5 opacity-50 md:mt-3">Avvalgi qidiruvlar</div>
        <div v-if="lastSearch" class="mt-3 w-full flex flex-col gap-2 max-h-[600px] overflow-auto">
          <div class="bg-soft-gray flex justify-between items-center cursor-pointer w-full rounded-full py-2 px-7 md:px-5 hover:bg-opacity-60">
            <div class="flex items-center gap-5 sm:gap-3">
              <div>
                <HatBlackIcon width="22" height="22"/>
              </div>
              <div class="flex flex-col">
                <div class="sub-title sm:text-rg">Stanford</div>
                <div class="sm:text-rg">Universities</div>
              </div>
            </div>
            <div>
              <ArrowBlackIcon width="18"/>
            </div>
          </div>

          <div class="bg-soft-gray flex justify-between items-center cursor-pointer w-full rounded-full py-2 px-7 md:px-5 hover:bg-opacity-60">
            <div class="flex items-center gap-5 sm:gap-3">
              <div>
                <HatBlackIcon width="22" height="22"/>
              </div>
              <div class="flex flex-col">
                <div class="sub-title sm:text-rg">Stanford</div>
                <div class="sm:text-rg">Universities</div>
              </div>
            </div>
            <div>
              <XIconBlack width="16" @click="deleteRecentSearch"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '../ui/SearchIcon.vue';
import ArrowBlackIcon from '../ui/ArrowBlackIcon.vue';
import XIconBlack from '../ui/XIconBlack.vue';
import { ModalService } from '~/core/services/modal.service';

const lastSearch = ref<boolean>(true);
const searchText = ref<string>('');
const isSearchModalOpened = useIsSearchModalOpened();
const modalService = new ModalService();

const deleteRecentSearch = () => {
  console.log('deleteRecentSearch');
}

</script>

<style scoped>

</style>
