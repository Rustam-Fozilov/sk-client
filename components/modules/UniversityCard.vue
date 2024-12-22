<template>
  <div>
    <div
        @click="gotoUniversity"
        @mouseover="isMouseOveredToCard = true"
        @mouseleave="isMouseOveredToCard = false"
        :style="`width: ${width}; height: ${height}`"
        class="cursor-pointer rounded-3xl bg-[url('/assets/images/main/banner.png')] bg-cover p-5"
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

defineProps({
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
const isSaved = ref(false);

const gotoUniversity = () => {
  router.push('/universities/stanford-university');
}

const toggleSaved = () => {
  isSaved.value = !isSaved.value;
}

</script>
