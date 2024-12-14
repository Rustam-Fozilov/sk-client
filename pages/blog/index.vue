<template>
  <div>
    <div class="my-container">
      <div class="text-center mt-12">
        <div class="title">Blog</div>
        <p class="opacity-70 mt-3">Пишем про языковые курсы за рубежом и поступление в заграничные вузы, а также изучение английского онлайн.</p>
      </div>

      <div class="flex justify-center mt-7">
        <div class="flex flex-wrap gap-3 items-center justify-start">
          <BtnSecondary v-for="i in 6">
            <template #btn-secondary>
              Образование за рубежом
            </template>
          </BtnSecondary>
        </div>
      </div>

      <div class="mt-12">
        <BlogHeaderCard/>
      </div>

      <div class="my-12">
        <div class="mid-title tracking-tight">
          Ko'p ko'rilganlar
        </div>

        <div class="mt-12">
          <BlogList :blogs="[1, 2, 3, 4]" :paginationView="false"/>
        </div>
      </div>

      <div>
        <div class="mid-title tracking-tight">
          Oxirgi maqolalar
        </div>

        <div class="mt-12">
          <BlogList/>
        </div>
      </div>
    </div>

    <div class="mt-24">
      <the-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogList from '~/components/main/BlogList.vue';
import BtnSecondary from '~/components/ui/BtnSecondary.vue';
import BlogHeaderCard from '~/components/modules/BlogHeaderCard.vue';

definePageMeta({
  layout: "main-layout"
});

</script>

<style scoped>

</style>
