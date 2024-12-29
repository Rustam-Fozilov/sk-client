<template>
  <div class="my-container">
    <div class="mt-12 md:mt-5">
      <div class="title sm:mid-title">/ Kontaktlar</div>
    </div>
    <div class="flex gap-12 items-center my-12 md:my-5 md:flex-col md:items-start md:gap-5">
      <div>
        <div class="font-tt-medium text-sm sm:text-rg">thisissk@gmail.com</div>
        <div class="opacity-50">Umumiy savollar uchun</div>
      </div>

      <div>
        <div class="font-tt-medium text-sm sm:text-rg">t.me/@skbot</div>
        <div class="opacity-50">Taklif va shikoyatlar uchun</div>
      </div>

      <div>
        <div class="font-tt-medium text-sm sm:text-rg">t.me/@skprivat</div>
        <div class="opacity-50">Shaxsiy chat</div>
      </div>

      <div>
        <div class="font-tt-medium text-sm sm:text-rg">t.me/@skcommunity</div>
        <div class="opacity-50">Kamyuniti</div>
      </div>
    </div>

    <div class="bg-white p-12 sm:p-6 rounded-2xl flex justify-between items-start lg:flex-col lg:gap-5">
      <div>
        <div class="mid-title sm:text-lg">Biz bilan bog'laning</div>
        <div class="w-[25rem] mt-7 sm:mt-4 leading-none sm:w-full">Вы можете написать нам по любому интересующему вас вопросу: от обучения до сотрудничества</div>
      </div>

      <form @submit.prevent="submitForm" class="md:w-full">
        <div class="w-[420px] lg:w-full">
          <div class="bg-soft-white border border-black border-opacity-10 py-3 px-5 rounded-lg w-full">
            <input required v-model="name" type="text" placeholder="Ism" class="bg-transparent w-full outline-none">
          </div>
          <div class="flex justify-between sm:flex-col sm:justify-start sm:items-start">
            <div class="bg-soft-white border flex border-black border-opacity-10 md:w-[48%] sm:w-full py-3 px-5 rounded-lg mt-5">
              <div>+998</div>
              <input required v-model="phone" maxlength="9" type="phone" class="bg-transparent w-full outline-none">
            </div>
            <div class="bg-soft-white border border-black border-opacity-10 md:w-[48%] sm:w-full py-3 px-5 rounded-lg mt-5 ml-5 sm:ml-0">
              <input v-model="email" type="email" placeholder="Email" class="bg-transparent w-full outline-none">
            </div>
          </div>
          <div>
            <div class="bg-soft-white border border-black border-opacity-10 py-3 px-5 rounded-lg mt-5">
              <textarea required v-model="message" rows="3" placeholder="Xabar" class="bg-transparent w-full outline-none"></textarea>
            </div>
          </div>
          <div class="mt-5">
            <button :disabled="loading" type="submit" class="bg-soft-blue disabled:cursor-not-allowed w-full font-tt-medium text-white rounded-lg px-5 py-3">
              Yuborish
            </button>
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
import { FormService } from '~/core/services/form.service';

const name = ref<string>('');
const phone = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');
const service = new FormService();
const loading = ref<boolean>(false);

definePageMeta({
  layout: 'main-layout'
});

const submitForm = async () => {
  loading.value = true;
  await service.submitForm({
    name: name.value,
    phone: '998' + phone.value,
    email: email.value,
    message: message.value,
  });
  loading.value = false;

  name.value = '';
  phone.value = '';
  email.value = '';
  message.value = '';
};

</script>
