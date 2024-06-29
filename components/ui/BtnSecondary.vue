<template>
  <div>
    <button class="bg-soft-gray py-[14px] px-9 rounded-full hover:bg-opacity-70 transition duration-300" :class="className">
      <slot name="btn-secondary"></slot>
    </button>
  </div>
</template>

<script setup>

defineProps({
  className: String,
})

</script>
