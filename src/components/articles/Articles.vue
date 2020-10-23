<template>
  <div>
      <div class="d-flex wrap justify-center" v-if="isLoading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else-if="hasError">
        <v-alert
          color="red"
          position="top"
          icon="error"
          type="error"
        >
          {{errorMessage}}
        </v-alert>
      </div>
      <v-row v-else>
        <v-col cols="12" sm="6" md="6" lg="4"
        v-for="article in articles"
        :key="article.url"
        @click="onClick(article.slug)"
      >
        <SummaryCard :article="article" />
        </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SummaryCard from '../ui/SummaryCard.vue';

export default {
  name: 'Articles',
  components: {
    SummaryCard,
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

</style>
