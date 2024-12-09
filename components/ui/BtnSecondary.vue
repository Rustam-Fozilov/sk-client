<template>
  <div>
    <button @click="handleEmit" class="bg-soft-gray py-[13px] px-9 rounded-full hover:bg-opacity-70 transition duration-300" :class="className">
      <slot name="btn-secondary"></slot>
    </button>
  </div>
</template>

<script setup>

defineProps({
  className: String,
})

const emit = defineEmits(['clicked']);

const handleEmit = () => {
  emit('clicked');
}

</script>
