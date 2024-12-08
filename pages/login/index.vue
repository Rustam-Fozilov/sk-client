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
        <span><a href="" target="_blank" class="underline underline-offset-4 font-tt-regular">@skbot</a></span> telegram botiga kiring va 1 daqiqalik kodingizni <br> oling.
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

definePageMeta({
  layout: "main-layout"
})

const logoWidth = ref('120px');
const code = ref(["", "", "", "", "", ""]);
const inputs = ref<HTMLInputElement[]>([]);

onMounted(() => {
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
})

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

</script>

<style scoped>

</style>
