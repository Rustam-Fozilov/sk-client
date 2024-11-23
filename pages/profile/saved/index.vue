<template>
    <div class="my-container">
        <div class="text-2xl font-tt-medium border-b border-b-black border-opacity-10 py-10">
            <div>Salom Rustam</div>
        </div>

        <div class="mt-12">
            <university-list />
        </div>
    </div>
    <div class="mt-16">
      <the-footer/>
    </div>
</template>

<script setup lang="ts">
import UniversityList from '~/components/main/UniversityList.vue';
import TheFooter from '~/components/TheFooter.vue';

definePageMeta({
  layout: "main-layout"
});

</script>

<style scoped>

</style>