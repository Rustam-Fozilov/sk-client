<template>
  <div>
    <div class="flex flex-col gap-10 mt-24 items-center sm:mt-12 sm:gap-5 sm:px-2">
      <div>
        <the-logo color="black" :width="logoWidth"/>
      </div>
      <div class="mid-title">
        Kodni kiriting
      </div>
      <div class="text-center">
        <span><a href="https://t.me/skerak_bot" target="_blank" class="underline underline-offset-4 font-tt-regular">@skerak_bot</a></span> telegram botiga kiring va 1 daqiqalik kodingizni <br> oling.
      </div>
      <div class="w-80">
        <div class="w-full flex gap-x-2.5">
          <input
            v-for="(digit, index) in code"
            :key="index"
            v-model="code[index]"
            ref="inputs"
            @input="handleInput(index)"
            @keydown.backspace="handleBackspace(index, $event)"
            @keydown.right="focusNext"
            @keydown.left="focusPrevious"
            @paste="handleCtrlV"
            maxlength="1"
            pattern="\\d?"
            type="text"
            class="w-full text-sm font-tt-medium h-14 rounded-2xl border border-black border-opacity-20 text-center pt-1 bg-transparent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuthService } from '~/core/services/auth.service';

definePageMeta({
  layout: "main-layout"
});

useSeoMeta({
  title: 'Surish Kerak | Login',
  ogTitle: 'Surish Kerak | Login',
  description: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma',
  ogDescription: 'Surish Kerak | Amerika universitetlariga kirish va to\'liq grant yutish bo\'yicha batafsil qo\'llanma',
  ogImage: 'https://surish-kerak.uz/images/og.jpg',
  ogUrl: 'https://surish-kerak.uz',
  ogType: 'website',
  robots: 'index, follow',
  keywords: 'Surish Kerak, Amerika universitetlariga kirish, grant yutish, batafsil qo\'llanma',
  applicationName: 'Surish Kerak | Login',
});

const logoWidth = ref('120px');
const code = ref(["", "", "", "", "", ""]);
const inputs = ref<HTMLInputElement[]>([]);
const authService = new AuthService();
const router = useRouter();
const route = useRoute();
const redirect = route.query.redirect as string;
const { $getSessionItem } = useNuxtApp();

onMounted(() => {
  const token = $getSessionItem('authToken');

  if (token) {
    router.push('/');
    return;
  }

  if (window.innerWidth <= 640) {
    logoWidth.value = '80px';
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 640) {
      logoWidth.value = '80px';
    } else {
      logoWidth.value = '120px';
    }
  })

  inputs.value[0]?.focus();
});

onUpdated(async () => {
  if (code.value.join("").length === 6) {
    inputs.value.forEach((input) => {
      input.disabled = true;
      input.classList.add("opacity-50");
    });

    await submitLogin();
  }
});

const submitLogin = async () => {
  const codeString = code.value.join("");
  const response: any = await authService.login(codeString);

  if (response) {
    const me = await authService.me();

    if (me) {
      if (redirect) {
        window.location.href = '/' + redirect;
      } else {
        window.location.href = '/';
      }
    }
  } else {
    inputs.value.forEach((input) => {
      input.disabled = false;
      input.classList.remove("opacity-50");
    });

    code.value = ["", "", "", "", "", ""];
    inputs.value[0]?.focus();
  }
}

const focusNext = () => {
  const current = inputs.value.findIndex((input) => document.activeElement === input);
  if (current < inputs.value.length - 1) inputs.value[current + 1]?.focus();
};

const focusPrevious = () => {
  const current = inputs.value.findIndex((input) => document.activeElement === input);
  if (current > 0) inputs.value[current - 1]?.focus();
};

const handleInput = (index: number) => {
  if (code.value[index].length === 1 && index < code.value.length - 1) {
    inputs.value[index + 1]?.focus();
  }
};

const handleBackspace = (index: number, event: KeyboardEvent) => {
  if (event.key === "Backspace" && code.value[index] === "" && index > 0) {
    inputs.value[index - 1]?.focus();
  }
};

const handleCtrlV = (event: ClipboardEvent) => {
  const clipboardData = event.clipboardData?.getData('text');
  const clipboardArray = clipboardData?.split('');

  if (clipboardArray) {
    for (let i = 0; i < clipboardArray.length; i++) {
      if (i < code.value.length) {
        code.value[i] = clipboardArray[i];
      }
    }
  }
};

</script>

<style scoped>

</style>
