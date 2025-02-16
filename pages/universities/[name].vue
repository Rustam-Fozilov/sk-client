<template>
  <Head>
    <Title>Surish Kerak | {{ university?.name }}</title>
  </Head>
  <div>
    <div class="my-container">
      <line-loader v-if="loading" class="text-center"/>
      <div>
        <div class="my-16 text-center xl:my-10 sm:my-5">
          <div class="title sm:mid-title">
            {{ university?.name }}
          </div>
          <div class="sub-title">
            {{ university?.address }}
          </div>
        </div>
        <div v-if="university" class="w-full h-[650px] lg:h-[450px] sm:h-[300px]">
          <img class="w-full h-full object-cover rounded-3xl sm:rounded-2xl" :src="baseApiUrl + '/storage/' + university?.image_link"
          alt="Banner" />
        </div>
        <div v-if="university" class="mt-12 w-full bg-white rounded-3xl sm:rounded-2xl py-12 px-60 2xl:px-14 sm:mt-5 sm:py-6 sm:px-6">
          <div v-html="university?.info" class="text-sm sm:text-rg"></div>
          <div class="w-full h-px mt-12 bg-black bg-opacity-20 sm:mt-5"></div>
          <div class="mt-7 flex gap-5 items-center sm:mt-5 sm:gap-3">
            <div @click="makeLiked" class="flex items-end gap-1 cursor-pointer">
              <like-icon v-if="!isLiked" />
              <like-icon-pressed v-if="isLiked" />
              <div>
                {{ university?.like_count }}
              </div>
            </div>
            <div @click="toggleSaved" class="cursor-pointer">
              <save-icon2 v-if="!isSaved" />
              <save-yellow-icon v-if="isSaved" />
            </div>
            <div @click="makeShared" class="cursor-pointer">
              <share-icon v-if="!isShared" />
              <read-icon width="25px" v-if="isShared" />
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-7">
          <university-carousel-list v-if="universities && university" :universities="universities"/>
        </div>
      </div>
    </div>
    <div class="mt-24 sm:mt-12">
      <the-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheFooter from '~/components/TheFooter.vue';
import UniversityCarouselList from '~/components/main/UniversityCarouselList.vue';
import ShareIcon from '~/components/ui/ShareIcon.vue';
import ReadIcon from '~/components/ui/ReadIcon.vue';
import SaveIcon2 from '~/components/ui/SaveIcon2.vue';
import SaveYellowIcon from '~/components/ui/SaveYellowIcon.vue';
import LikeIcon from '~/components/ui/LikeIcon.vue';
import LikeIconPressed from '~/components/ui/LikeIconPressed.vue';
import { UniversityService } from '~/core/services/university.service';
import type { University } from '~/core/types/university.type';
import { getBaseApiUrl } from '~/core/utils/apiUrl.util';

definePageMeta({
  layout: "main-layout",
});

useSeoMeta({
  ogTitle: 'Surish Kerak | Universitetlar',
  description: 'Surish Kerak | Universitetlar',
  ogDescription: 'Surish Kerak | Universitetlar',
  ogImage: 'https://surish-kerak.uz/images/og.jpg',
  ogUrl: 'https://surish-kerak.uz',
  ogType: 'website',
  robots: 'index, follow',
  keywords: 'Surish Kerak, Universitetlar, Stanford, Stipendiya, Kirish, Qabul',
  applicationName: 'Surish Kerak | Universitetlar',
});

const { $getSessionItem } = useNuxtApp();
const isSaved = ref<boolean|undefined>(false);
const isShared = ref<boolean|undefined>(false);
const isLiked = ref<boolean|undefined>(false);
const service = new UniversityService();
const university = ref<University|null>();
const universities = ref<University[]>([]);
const route = useRoute();
const router = useRouter();
const id = Number(route.params.name);
const baseApiUrl = getBaseApiUrl();
const loading = ref<boolean>(false);

onMounted(async () => {
  loading.value = true;
  await fetchUniversity();
  loading.value = false;

  isSaved.value = university.value?.is_saved;
  isLiked.value = university.value?.is_liked;
});

const toggleSaved = () => {
  if (!$getSessionItem('me')) {
    router.push(`/login?redirect=universities/${id}`);
    return;
  }

  isSaved.value = !isSaved.value;

  if (isSaved.value) {
    service.saveUniversity(id);
  } else {
    service.unsaveUniversity(id);
  }
};

const makeShared = () => {
  navigator.clipboard.writeText(window.location.href);
  isShared.value = true;

  setTimeout(() => {
    isShared.value = false;
  }, 3000);
};

const makeLiked = () => {
  if (!$getSessionItem('me')) {
    router.push(`/login?redirect=universities/${id}`);
    return;
  }

  isLiked.value = !isLiked.value;

  if (isLiked.value) {
    university.value!.like_count++;
    service.likeUniversity(id);
  } else {
    university.value!.like_count--;
    service.unlikeUniversity(id);
  }
};

const fetchUniversity = async () => {
  university.value = await service.fetchUniversityById(id);
};

const fetchUniversities = async () => {
  const {universities: result} = await service.fetchUniversities({
    per_page: 10,
  });

  universities.value = result;
};

await fetchUniversities();

</script>
