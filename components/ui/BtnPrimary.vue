<template>
  <div>
    <button class="bg-primary-blue py-[14px] px-9 rounded-full text-white hover:bg-opacity-70 transition duration-300" :class="className">
      <slot name="btn-primary"></slot>
    </button>
  </div>
</template>

<script setup>

defineProps({
  className: String,
})

</script>
