<template>
  <div>
    <span class="line_loader"></span>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.line_loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.line_loader::after {
  content: '';
  width: 100px;
  height: 3px;
  background: #007AFF;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animloader 1.3s linear infinite;
}

@keyframes animloader {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    width: 70%;
    left: 100%;
    transform: translateX(0%);
  }
}
</style>
