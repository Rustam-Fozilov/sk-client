<template>
  <div>
    <button @click="handleEmit" class="bg-primary-blue py-[13px] px-9 rounded-full text-white hover:bg-opacity-70 transition duration-300" :class="className">
      <slot name="btn-primary"></slot>
    </button>
  </div>
</template>

<script setup>

defineProps({
  className: String,
});

const emit = defineEmits(['clicked']);

const handleEmit = () => {
  emit('clicked');
}

</script>
