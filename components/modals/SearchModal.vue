<template>
  <div>
    <div v-if="isSearchModalOpened" @click="modalService.closeAllModals" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-[1000]"></div>
    <div v-if="isSearchModalOpened" class="fixed top-28 z-[1000] left-1/2 -translate-x-1/2 md:w-full md:px-5 md:top-16">
      <div class="w-[750px] flex flex-col items-start bg-soft-white rounded-xl p-7 md:w-full sm:p-5">
        <div class="rounded-full w-full border border-black border-opacity-20 bg-soft-gray py-4 md:py-3 px-6 md:px-3 flex items-center gap-3 sm:gap-2">
          <SearchIcon width="22" height="22"/>
          <input @input="search" v-focus v-model="searchText" type="text" class="w-full bg-transparent font-tt-regular text-md sm:text-sm outline-none" placeholder="Qidiruv...">
        </div>
        <div v-if="historyList.length === 0 && !hideHistoryList" class="opacity-50 w-full mt-12 text-center md:mt-5">
          Avvalgi qidiruvlar yo'q
        </div>
        <div v-else-if="historyList.length > 0 && !hideHistoryList" class="mt-5 opacity-50 md:mt-3">Avvalgi qidiruvlar</div>
        <div class="text-center w-full">
          <SimpleLoader v-if="loading" width="25px" height="25px"/>
        </div>

        <div v-if="data?.universities?.length === 0 && data?.blogs?.length === 0 && searchText.length >= 3" class="mt-5 w-full text-center opacity-50 md:mt-3">Hech qanday natija topilmadi</div>
        <div v-if="data" class="mt-3 w-full flex flex-col gap-2 max-h-[600px] overflow-auto">
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

          <div v-for="item in data?.blogs" @click="gotoBlog(item.id)" class="bg-soft-gray flex justify-between items-center cursor-pointer w-full rounded-full py-2 px-7 md:px-5 hover:bg-opacity-60">
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

        <div v-if="historyList.length > 0 && !hideHistoryList" class="mt-3 w-full flex flex-col gap-2 max-h-[600px] overflow-auto">
          <div v-if="universityHistoryList.length > 0" v-for="item in universityHistoryList" @click="gotoUniversity(item.id)" class="bg-soft-gray flex justify-between items-center cursor-pointer w-full rounded-full py-2 px-7 md:px-5 hover:bg-opacity-60">
            <div class="flex items-center w-[95%] gap-5 sm:gap-3">
              <div>
                <HatBlackIcon width="22" height="22"/>
              </div>
              <div class="flex flex-col w-full text-ellipsis overflow-hidden whitespace-nowrap">
                <div class="sub-title text-ellipsis overflow-hidden whitespace-nowrap sm:text-rg">{{ item.name }}</div>
                <div class="sm:text-rg">Universitetlar</div>
              </div>
            </div>
            <div @click.stop="removeUniverHistory(item.id)" class="opacity-50 hover:opacity-100 transition">
              <XIconBlack width="16" />
            </div>
          </div>

          <div v-if="blogHistoryList.length > 0" v-for="item in blogHistoryList"  @click="gotoBlog(item.id)" class="bg-soft-gray flex justify-between items-center cursor-pointer w-full rounded-full py-2 px-7 md:px-5 hover:bg-opacity-60">
            <div class="flex items-center w-[95%] gap-5 sm:gap-3">
              <div>
                <HatBlackIcon width="22" height="22"/>
              </div>
              <div class="flex flex-col w-full text-ellipsis overflow-hidden whitespace-nowrap">
                <div class="sub-title text-ellipsis overflow-hidden whitespace-nowrap sm:text-rg">{{ item.title }}</div>
                <div class="sm:text-rg">Blog</div>
              </div>
            </div>
            <div @click.stop="removeBlogHistory(item.id)" class="opacity-50 hover:opacity-100 transition">
              <XIconBlack width="16" />
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
import { type Blog } from '~/core/types/blog.type';
import { type University } from '~/core/types/university.type';

const searchText = ref<string>('');
const isSearchModalOpened = useIsSearchModalOpened();
const modalService = new ModalService();
const service = new SearchService();
const data = ref<any>(null);
const loading = ref<boolean>(false);
const router = useRouter();
const historyList = ref<any[]>([]);
const blogHistoryList = ref<Blog[]>([]);
const universityHistoryList = ref<University[]>([]);
const hideHistoryList = ref<boolean>(false);
const { $getSessionItem } = useNuxtApp();

onMounted(async () => {
  if ($getSessionItem('authToken')) {
    await fetchHistoryList();
  }
});

const fetchSearch = async () => {
  loading.value = true;

  data.value = await service.search(searchText.value, {per_page: 10});  
  loading.value = false;
};

const search = async () => {
  if (searchText.value.length === 0) {
    hideHistoryList.value = false;
    data.value = null;
  }

  if (searchText.value.length >= 3) {
    hideHistoryList.value = true;
    await fetchSearch();
  }
};

const fetchHistoryList = async () => {
  historyList.value = await service.historyList({
    'per_page': 10
  });

  if (historyList.value.length > 0) {
    blogHistoryList.value = historyList.value.filter((item: any) => item.searchable_type === 'blog');
    universityHistoryList.value = historyList.value.filter((item: any) => item.searchable_type === 'university');
  }
};

const gotoUniversity = async (id: number) => {
  if ($getSessionItem('authToken')) {
    await service.saveSearch('university', id);
  }

  modalService.closeAllModals();
  router.push('/universities/' + id);
};

const gotoBlog = async (id: number) => {
  if ($getSessionItem('authToken')) {
    await service.saveSearch('blog', id);
  }

  modalService.closeAllModals();
  router.push('/blog/' + id);
};

const removeUniverHistory = async (id: number) => {
  await service.removeHistory('university', id);

  universityHistoryList.value = universityHistoryList.value.filter((item: any) => item.id !== id);
};

const removeBlogHistory = async (id: number) => {
  await service.removeHistory('blog', id);

  blogHistoryList.value = blogHistoryList.value.filter((item: any) => item.id !== id);
};

</script>

<style scoped>

</style>
