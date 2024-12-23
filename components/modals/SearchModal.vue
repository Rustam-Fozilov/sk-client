<template>
  <div>
    <div v-if="isSearchModalOpened" @click="modalService.closeAllModals" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-[1000]"></div>
    <div v-if="isSearchModalOpened" class="fixed top-28 z-[1000] left-1/2 -translate-x-1/2 md:w-full md:px-5 md:top-16">
      <div class="w-[750px] flex flex-col items-start bg-soft-white rounded-xl p-7 md:w-full sm:p-5">
        <div class="rounded-full w-full border border-black border-opacity-20 bg-soft-gray py-4 md:py-3 px-6 md:px-3 flex items-center gap-3 sm:gap-2">
          <SearchIcon width="22" height="22"/>
          <input @input="search" v-focus v-model="searchText" type="text" class="w-full bg-transparent font-tt-regular text-md sm:text-sm outline-none" placeholder="Qidiruv...">
        </div>
        <div v-if="!lastSearch" class="opacity-50 w-full mt-12 text-center md:mt-5">
          Avvalgi qidiruvlar yo'q
        </div>
        <div v-if="lastSearch && searchText.length >= 3" class="mt-5 opacity-50 md:mt-3">Avvalgi qidiruvlar</div>
        <div class="text-center w-full">
          <SimpleLoader v-if="loading" width="25px" height="25px"/>
        </div>
        <div v-if="lastSearch" class="mt-3 w-full flex flex-col gap-2 max-h-[600px] overflow-auto">
          <div v-for="item in data?.universities" @click="gotoUniversity(item.id)" class="bg-soft-gray flex justify-between items-center cursor-pointer w-full rounded-full py-2 px-7 md:px-5 hover:bg-opacity-60">
            <div class="flex items-center w-[95%] gap-5 sm:gap-3">
              <div>
                <HatBlackIcon width="22" height="22"/>
              </div>
              <div class="flex flex-col w-full text-ellipsis overflow-hidden whitespace-nowrap">
                <div class="sub-title text-ellipsis overflow-hidden whitespace-nowrap sm:text-rg">{{ item.name }}</div>
                <div class="sm:text-rg">Universitetlar</div>
              </div>
            </div>
            <div>
              <ArrowBlackIcon width="18"/>
            </div>
          </div>

          <div v-for="item in data?.blogs" class="bg-soft-gray flex justify-between items-center cursor-pointer w-full rounded-full py-2 px-7 md:px-5 hover:bg-opacity-60">
            <div class="flex items-center w-[95%] gap-5 sm:gap-3">
              <div>
                <HatBlackIcon width="22" height="22"/>
              </div>
              <div class="flex flex-col w-full text-ellipsis overflow-hidden whitespace-nowrap">
                <div class="sub-title text-ellipsis overflow-hidden whitespace-nowrap sm:text-rg">{{ item.title }}</div>
                <div class="sm:text-rg">Blog</div>
              </div>
            </div>
            <div>
              <ArrowBlackIcon width="18"/>
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
import { SearchService } from '~/core/services/search.service';

const lastSearch = ref<boolean>(false);
const searchText = ref<string>('');
const isSearchModalOpened = useIsSearchModalOpened();
const modalService = new ModalService();
const service = new SearchService();
const data = ref<any>(null);
const loading = ref<boolean>(false);
const router = useRouter();

const deleteRecentSearch = () => {
  console.log('deleteRecentSearch');
};

const fetchSearch = async () => {
  loading.value = true;
  lastSearch.value = true;
  data.value = await service.search(searchText.value, {per_page: 10});
  loading.value = false;
};

const search = async () => {
  if (searchText.value.length === 0) {
    lastSearch.value = false;
    data.value = null;
  }

  if (searchText.value.length >= 3) {
    fetchSearch();
  }
};

const gotoUniversity = (id: number) => {
  modalService.closeAllModals();
  router.push('/universities/' + id);
};

</script>

<style scoped>

</style>
