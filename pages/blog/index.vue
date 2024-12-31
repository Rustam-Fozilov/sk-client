<template>
  <div>
    <div class="my-container">
      <div class="text-center mt-12 md:mt-5">
        <div class="title sm:mid-title">Blog</div>
        <p class="opacity-70 mt-3 md:mt-2">Пишем про языковые курсы за рубежом и поступление в заграничные вузы, а также изучение английского онлайн.</p>
      </div>

      <!-- <div class="flex justify-center mt-7 xl:hidden">
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
      </div> -->

      <div class="mt-12 md:mt-5">
        <simple-loader v-if="headerLoading" class="text-center"/>
        <BlogHeaderCard v-if="latestBlog" :blog="latestBlog"/>
      </div>

      <div class="my-12 md:my-5">
        <div class="mid-title tracking-tight sm:text-md">
          Ko'p ko'rilganlar
        </div>

        <div class="mt-12 md:mt-5">
          <simple-loader v-if="mostViewedBlogs.length < 1" class="text-center"/>
          <BlogCarouselList v-if="mostViewedBlogs.length > 0" :blogs="mostViewedBlogs"/>
        </div>
      </div>

      <div>
        <div class="mid-title tracking-tight sm:text-md">
          Oxirgi maqolalar
        </div>

        <div class="mt-12 md:mt-5">
          <simple-loader v-if="loading" class="text-center"/>
          <BlogList :blogs="blogs" :pagination-data="paginationData"/>
        </div>
      </div>
    </div>

    <div class="mt-24">
      <the-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCarouselList from '~/components/main/BlogCarouselList.vue';
import BlogList from '~/components/main/BlogList.vue';
import BlogHeaderCard from '~/components/modules/BlogHeaderCard.vue';
import { BlogService } from '~/core/services/blog.service';
import { type Blog } from '~/core/types/blog.type';
import SimpleLoader from '~/components/ui/SimpleLoader.vue';
import { type Pagination } from '~/core/types/pagination.type';

definePageMeta({
  layout: "main-layout"
});

const blogs = ref<Blog[]>([]);
const latestBlog = ref<Blog|null>(null);
const mostViewedBlogs = ref<Blog[]>([]);
const service = new BlogService();
const headerLoading = ref<boolean>(false);
const loading = ref<boolean>(false);
const route = useRoute();
const currentPage = ref<number>(route.query.page ? parseInt(route.query.page as string) : 1);
const per_page = 16;
const paginationData = ref<Pagination>({
  total: 0,
  per_page: per_page,
  current_page: currentPage.value,
});

onMounted(async () => {
  loading.value = true;
  await fetchLastBlog();
  await fetchMostViewedBlogs();
  await fetchBlogs({
    per_page: per_page,
    page: currentPage.value
  });
  loading.value = false;
});

onUpdated(async () => {
  const check = route.query.page ? parseInt(route.query.page as string) : 1;
  if (check !== currentPage.value) {
    currentPage.value = parseInt(route.query.page as string);
    loading.value = true;
    await fetchBlogs({
      per_page: per_page,
      page: currentPage.value
    });
    loading.value = false;
    return;
  }
});

const fetchLastBlog = async () => {
  headerLoading.value = true;
  latestBlog.value = await service.latestBlog();
  headerLoading.value = false;
};

const fetchMostViewedBlogs = async () => {
  const {blogs: result} = await service.fetchBlogs({
    per_page: 10,
  });

  mostViewedBlogs.value = result;
};

const fetchBlogs = async (params?: Object) => {
  const {blogs: result, pagination} = await service.fetchBlogs(params);

  blogs.value = result;
  paginationData.value = pagination;
};

</script>

<style scoped>

</style>
