<template>
  <div>
    <div class="my-container">
      <div class="text-center mt-12 md:mt-5">
        <div class="title sm:mid-title">Blog</div>
        <p class="opacity-70 mt-3 md:mt-2">Пишем про языковые курсы за рубежом и поступление в заграничные вузы, а также изучение английского онлайн.</p>
      </div>

      <div class="flex justify-center mt-7 xl:hidden">
        <div class="flex flex-wrap gap-3 items-center justify-center">
          <div v-for="i in 5" class="flex gap-3">
            <BtnPrimary v-if="i === 3">
              <template #btn-primary>
                Образование за рубежом
              </template>
            </BtnPrimary>
            <BtnSecondary>
              <template #btn-secondary>
                Образование за рубежом
              </template>
            </BtnSecondary>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center mid-title xl:hidden">
        Образование за рубежом
      </div>

      <div class="mt-12 md:mt-5">
        <BlogHeaderCard/>
      </div>

      <div class="my-12 md:my-5">
        <div class="mid-title tracking-tight sm:text-md">
          Ko'p ko'rilganlar
        </div>

        <div class="mt-12 md:mt-5">
          <BlogList :blogs="[1, 2, 3, 4]" :paginationView="false"/>
        </div>
      </div>

      <div>
        <div class="mid-title tracking-tight sm:text-md">
          Oxirgi maqolalar
        </div>

        <div class="mt-12 md:mt-5">
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
