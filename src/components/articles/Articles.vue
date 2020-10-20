<template>
  <div class="borderWithPadding about">
    <h2> Articles Component </h2>
    <div>
      <div v-if="isLoading">Loading spinner...</div>
      <div v-else-if="hasError">{{errorMessage}}</div>
      <div v-else v-for="article in articles" :key="article.slug">
        <p>{{article.title}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Articles',
  components: {
  },
  methods: {
    ...mapActions({
      fetchArticles: 'fetchArticles',
    }),
  },
  computed: {
    ...mapGetters({
      articles: 'processedArticles',
      isLoading: 'isLoading',
      hasError: 'hasError',
      errorMessage: 'errorMessage',
    }),
  },
  created() {
    this.fetchArticles();
  },
};
</script>

<style scoped>
</style>
