<template>
  <div class="fixed backdrop-blur-2xl w-full z-10">
    <div class="py-6 flex justify-between my-container border-b-[1px] border-opacity-20">
      <div id="breadcrumbs" class="cursor-pointer">
        <div class="bg-soft-gray w-12 h-12 rounded-full flex items-center justify-center">
          <div class="flex flex-col gap-[5px]">
            <div class="bg-black h-[2px] w-[10px] rounded-full"></div>
            <div class="bg-black h-[2px] w-[20px] rounded-full"></div>
            <div class="bg-black h-[2px] w-[10px] rounded-full ml-[10px]"></div>
          </div>
        </div>
      </div>
      <div id="auth_action" class="flex gap-[10px]">
        <BtnSecondary>
          <template #btn-secondary>
            Ro'yhatdan o'tish
          </template>
        </BtnSecondary>
        <BtnPrimary>
          <template #btn-primary>
            Kirish
          </template>
        </BtnPrimary>
      </div>
    </div>
    <div class="absolute top-0 pt-6 left-1/2 -translate-x-1/2">
      <the-logo width="80px"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "@/components/ui/TheLogo.vue";
import BtnPrimary from "@/components/ui/BtnPrimary.vue";
import BtnSecondary from "@/components/ui/BtnSecondary.vue";

</script>
