<template>
  <div class="my-container">
    <div class="mt-12">
      <div class="title">/ Kontaktlar</div>
    </div>
    <div class="flex gap-12 items-center my-12">
      <div>
        <div class="font-tt-medium text-sm">thisissk@gmail.com</div>
        <div class="opacity-50">Umumiy savollar uchun</div>
      </div>

      <div>
        <div class="font-tt-medium text-sm">t.me/@skbot</div>
        <div class="opacity-50">Taklif va shikoyatlar uchun</div>
      </div>

      <div>
        <div class="font-tt-medium text-sm">t.me/@skprivat</div>
        <div class="opacity-50">Shaxsiy chat</div>
      </div>

      <div>
        <div class="font-tt-medium text-sm">t.me/@skcommunity</div>
        <div class="opacity-50">Kamyuniti</div>
      </div>
    </div>

    <div class="bg-white p-12 rounded-2xl flex justify-between items-start">
      <div>
        <div class="mid-title">Biz bilan bog'laning</div>
        <div class="w-[25rem] mt-7 leading-none">Вы можете написать нам по любому интересующему вас вопросу: от обучения до сотрудничества</div>
      </div>

      <form action="">
        <div class="w-[420px]">
          <div class="bg-soft-white border border-black border-opacity-10 py-3 px-5 rounded-lg w-full">
            <input required type="text" placeholder="Ism" class="bg-transparent w-full outline-none">
          </div>
          <div class="flex justify-between">
            <div class="bg-soft-white border border-black border-opacity-10 py-3 px-5 rounded-lg mt-5">
              <input required maxlength="13" type="phone" placeholder="+998" class="bg-transparent w-full outline-none">
            </div>
            <div class="bg-soft-white border border-black border-opacity-10 py-3 px-5 rounded-lg mt-5 ml-5">
              <input required type="email" placeholder="Email" class="bg-transparent w-full outline-none">
            </div>
          </div>
          <div>
            <div class="bg-soft-white border border-black border-opacity-10 py-3 px-5 rounded-lg mt-5">
              <textarea required rows="3" placeholder="Xabar" class="bg-transparent w-full outline-none"></textarea>
            </div>
          </div>
          <div class="mt-5">
            <button type="submit" class="bg-soft-blue w-full font-tt-medium text-white rounded-lg px-5 py-3">Yuborish</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="mt-12">
    <the-footer/>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'main-layout'
})

</script>
