<template>
  <div>
    <div
      :style="`width: ${width}; height: ${height}`"
      class="cursor-pointer rounded-3xl bg-[url('/assets/images/main/banner.png')] bg-cover p-5"
    >
      <div class="flex flex-col justify-between h-full items-end">
        <div>
          <save-icon/>
        </div>
        <div class="w-full">
          <div class="bg-white p-5 w-full rounded-2xl flex gap-1 justify-between">
            <div class="text-ellipsis overflow-hidden whitespace-nowrap">
              <div class="sub-title text-ellipsis overflow-hidden whitespace-nowrap">
                Harvard University
              </div>
              <div class="flex gap-1 items-center">
                <location-icon width="12"/>
                <div class="text-ellipsis overflow-hidden whitespace-nowrap">
                  Cambridge
                </div>
              </div>
            </div>
            <div
                class="rounded-full min-w-12 h-12 flex items-center justify-center transition duration-300"
            >
              <arrow-black-icon width="15"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps({
  width: {
    required: true,
  },
  height: {
    required: true,
  },
  blog: {
    required: false,
  }
});

const router = useRouter();

const gotoBlog = () => {
  router.push('/universities/stanford-university');
}

</script>

<style scoped>

</style>