<template>
  <div>
    <div v-if="true" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-[1000]"></div>
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]">
      <div id="comments_area" class="w-[1000px] bg-soft-white h-96 rounded-3xl overflow-auto">
        <div class="mid-title p-7">Izohlar</div>
        <hr class="w-full">
        <div>
          <div class="mt-7">
            <div class="flex gap-5 items-start px-7">
              <div class="min-w-12 min-h-12 bg-blue-300 rounded-full"></div>
              <div class="text-wrap">
                Raxmat sizga, sog buling, borizga shukur. Maslaxatlariz bilan kaatta yordamiz tegdi. Men anchadan
                Raxmat sizga, sog buling, borizga shukur. Maslaxatlariz bilan kaatta yordamiz tegdi. Men anchadan
                Raxmat sizga, sog buling, borizga shukur. Maslaxatlariz bilan kaatta yordamiz tegdi. Men anchadan
                <div class="text-xs mt-3 opacity-50">25.07.2023. 12:33</div>
              </div>
            </div>
            <hr class="mt-7">
          </div>

          <div class="mt-7">
            <div class="flex gap-5 items-start px-7">
              <div class="min-w-12 min-h-12 bg-blue-300 rounded-full"></div>
              <div class="text-wrap">
                Raxmat sizga, sog buling, borizga shukur. Maslaxatlariz bilan kaatta yordamiz tegdi. Men anchadan
                Raxmat sizga, sog buling, borizga shukur. Maslaxatlariz bilan kaatta yordamiz tegdi. Men anchadan
                Raxmat sizga, sog buling, borizga shukur. Maslaxatlariz bilan kaatta yordamiz tegdi. Men anchadan
                <div class="text-xs mt-3 opacity-50">25.07.2023. 12:33</div>
              </div>
            </div>
            <hr class="mt-7">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#comments_area::-webkit-scrollbar {
  width: 5px;
}

/* Track */
#comments_area::-webkit-scrollbar-track {
  border-radius: 10px;
}

#comments_area::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border-radius: 5px;
}

</style>
