<template>
  <div>
    <button class="bg-soft-gray py-[14px] px-9 rounded-full" :class="className">
      <slot name="btn-secondary"></slot>
    </button>
  </div>
</template>

<script setup>

defineProps({
  className: String,
})

</script>
