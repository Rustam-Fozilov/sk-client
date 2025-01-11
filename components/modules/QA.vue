<template>
  <div>
    <div class="bg-white rounded-3xl p-12 flex justify-between items-center lg:flex-col lg:gap-5 md:p-7">
      <div class="w-1/3 flex flex-col gap-7 2xl:w-1/2 lg:w-full sm:gap-4">
        <div class="title lg:mid-title">
          O'zingizni qiziqtirgan savollaringizni yo'llang
        </div>
        <div class="font-tt-regular opacity-50 leading-snug">
          Ahil hamjamiyatimiz a’zolari savolingizga javob berishadi. Yoki siz ham jamiyatimiz a’zosiga aylaning va o’z bilimingizni ulashing. <span><a
            href="https://t.me/skdistrict" target="_blank" class="underline">Telegram</a></span> guruhimizga qo’shiling.
        </div>
        <div>
          <btn-primary @clicked="gotoCommunity">
            <template #btn-primary>
              Savol yo'llash
            </template>
          </btn-primary>
        </div>
      </div>

      <div class="w-1/2 flex flex-col gap-7 lg:w-full sm:gap-5">
        <div class="bg-white px-7 py-12 rounded-3xl" style="filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.05));">
          <div class="flex gap-2 items-center font-tt-medium">
            <img class="w-12 h-12 rounded-md object-cover" src="@/assets/images/main/pr1.jpg" alt="Avatar">
            Sevara
          </div>
          <div class="mt-7 sub-title font-tt-regular">
            Universitet stipendiya yoki grantlarni berishda oilaning daromadi, aktivlari yoki boshqa omillarni hisobga oladimi?
          </div>
        </div>

        <div class="bg-white px-7 py-12 rounded-3xl" style="filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.05));">
          <div class="flex gap-2 items-center font-tt-medium">
            <img class="w-12 h-12 rounded-md object-cover" src="@/assets/images/main/pr2.jpg" alt="Avatar">
            Jasur
          </div>
          <div class="mt-7 sub-title font-tt-regular">
            Need based stipendiyalar har yili yangilanadimi? Agar shunday bo‘lsa, yangilash uchun qanday talablar mavjud?
          </div>
        </div>

        <div class="bg-white px-7 py-12 rounded-3xl" style="filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.05));">
          <div class="flex gap-2 items-center font-tt-medium">
            <img class="w-12 h-12 rounded-md object-cover" src="@/assets/images/main/pr3.jpg" alt="Avatar">
            Bekzod
          </div>
          <div class="mt-7 sub-title font-tt-regular">
            Universitet stipendiyasi to‘liq yoki qisman o‘qishni qoplaydimi, shuningdek, xona va ovqat kabi boshqa xarajatlarni ham o‘z ichiga oladimi?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const gotoCommunity = () => {
  window.open('https://t.me/skdistrict', '_blank');
}

</script>
