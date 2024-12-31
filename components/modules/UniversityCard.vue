<template>
  <div>
    <div
        @click="gotoUniversity"
        @mouseover="isMouseOveredToCard = true"
        @mouseleave="isMouseOveredToCard = false"
        :style="`width: ${width}; height: ${height}; background-image: url('${baseApiUrl + '/storage/' + university.image_link}');`"
        class="cursor-pointer rounded-3xl bg-cover p-5"
    >
      <div class="flex flex-col justify-between h-full items-end">
        <div @click.stop="toggleSaved">
          <save-icon v-if="!isSaved"/>
          <save-yellow-icon v-if="isSaved"/>
        </div>
        <div class="w-full">
          <div class="bg-white p-5 w-full rounded-2xl flex gap-1 justify-between">
            <div class="text-ellipsis overflow-hidden whitespace-nowrap text-left">
              <div class="sub-title text-ellipsis overflow-hidden whitespace-nowrap">
                {{ university.name }}
              </div>
              <div class="flex gap-1 items-center">
                <location-icon width="12"/>
                <div class="text-ellipsis overflow-hidden whitespace-nowrap">
                  {{ university.address }}
                </div>
              </div>
            </div>
            <div
                class="rounded-full min-w-12 h-12 flex items-center justify-center transition duration-300"
                :class="isMouseOveredToCard ? 'bg-black' : ''"
            >
              <arrow-black-icon width="15" v-if="!isMouseOveredToCard"/>
              <arrow-white-icon width="15" v-else/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationIcon from "~/components/ui/LocationIcon.vue";
import { useRouter } from "vue-router";
import { type University } from "~/core/types/university.type";
import { getBaseApiUrl } from "~/core/utils/apiUrl.util";
import { UniversityService } from "~/core/services/university.service";

const props = defineProps({
  width: {
    required: true,
  },
  height: {
    required: true,
  },
  university: {
    type: Object as () => University,
    required: true,
  }
});

const isMouseOveredToCard = ref(false);
const router = useRouter();
const isSaved = ref<boolean|undefined>(props.university?.is_saved ?? false);
const changeManual = ref(false);
const baseApiUrl = getBaseApiUrl();
const service = new UniversityService();
const { $getSessionItem } = useNuxtApp();

onMounted(() => {
  if (props.university?.is_saved !== undefined || props.university?.is_saved !== null) {
    isSaved.value = props.university?.is_saved;
  }
});

onUpdated(() => {
  if (
    props.university?.is_saved !== undefined &&
    props.university?.is_saved !== isSaved.value && 
    !changeManual.value
  ) {
    isSaved.value = props.university?.is_saved;
  }
});

const gotoUniversity = () => {
  router.push('/universities/' + props.university.id);
};

const toggleSaved = async () => {
  if (!$getSessionItem('me')) {
    router.push(`/login?redirect=universities/${props.university.id}`);
    return;
  }

  changeManual.value = true;
  isSaved.value = !isSaved.value;

  if (isSaved.value) {
    await service.saveUniversity(props.university.id);
  } else {
    await service.unsaveUniversity(props.university.id);
  }
};

</script>
