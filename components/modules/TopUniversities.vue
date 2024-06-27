<template>
  <div>
    <div class="flex flex-col gap-12">
      <div class="flex justify-between items-end">
        <div class="title">
          Top universitetlar
        </div>
        <a href="/universities/" class="hover:underline">
          Barchasini ko'rish
        </a>
      </div>

      <div class="flex justify-start gap-5">
        <div
            v-for="i in 4"
            class="w-1/4 h-[450px] bg-white rounded-[30px]"
        >
          <div class="h-1/2 w-full rounded-t-[30px] bg-soft-gray">
<!--            <img class="rounded-t-[30px] w-full h-full object-cover" src="@/assets/images/main/title.png" alt="Univer image">-->
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
