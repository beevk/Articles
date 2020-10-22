<template>
  <div class="borderWithPadding about">
    <h2> Articles Component </h2>
    <div>
      <div v-if="isLoading">Loading spinner...</div>
      <div v-else-if="hasError" class="errorMessage">{{errorMessage}}</div>
      <div v-else v-for="article in articles" :key="article.url" @click="onClick(article.slug)">
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
      updateHistory: 'updateHistory',
    }),

    // this.updateHistory can be called from /article/:name page (mounted event)
    // but since that page only contains history (not similar news),
    // there is no point of storing that history again on click event
    // or we can if you want to keep count for eg.
    onClick(slug) {
      this.$router.push(
        { name: 'ArticleDetails', params: { name: slug } },
        () => this.updateHistory(slug),
      );
    },
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
.errorMessage {
  border: 2px solid lightsalmon;
  padding: 10px;
  color: red;
}
</style>
