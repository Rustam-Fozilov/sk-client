<template>
  <div>
    <div class="bg-red-300 cursor-pointer rounded-3xl bg-[url('/assets/images/main/banner.png')] bg-cover p-5" :style="`width: ${width}; height: ${height}`">
      <div class="w-full h-full flex items-end">
        <div class="bg-white p-5 w-full rounded-2xl flex justify-between">
          <div>
            <div class="sub-title">Harvard University</div>
            <div class="flex gap-1 items-center">
              <location-icon width="12"/>
              <div>Cambridge</div>
            </div>
          </div>
          <div class="rounded-full w-12 h-12 flex items-center justify-center hover:bg-black transition duration-300">
            <arrow-black-icon width="15"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationIcon from "~/components/ui/LocationIcon.vue";

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
})

</script>
