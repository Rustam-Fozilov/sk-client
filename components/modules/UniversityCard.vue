<template>
  <div>
    <div
        @click="gotoUniversity"
        @mouseover="isMouseOveredToCard = true"
        @mouseleave="isMouseOveredToCard = false"
        :style="`width: ${width}; height: ${height}`"
        class="bg-red-300 cursor-pointer rounded-3xl bg-[url('/assets/images/main/banner.png')] bg-cover p-5"
    >
      <div class="flex flex-col justify-between h-full items-end">
        <div>
          <save-icon/>
        </div>
        <div class="w-full">
          <div class="bg-white p-5 w-full rounded-2xl flex justify-between">
            <div>
              <div class="sub-title">Harvard University</div>
              <div class="flex gap-1 items-center">
                <location-icon width="12"/>
                <div>Cambridge</div>
              </div>
            </div>
            <div
                class="rounded-full w-12 h-12 flex items-center justify-center transition duration-300"
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

defineProps({
  width: {
    required: true,
  },
  height: {
    required: true,
  },
  university: {
    required: false,
  }
});

const isMouseOveredToCard = ref(false);
const router = useRouter();

const gotoUniversity = () => {
  router.push('/universities/stanford-university');
}

</script>
