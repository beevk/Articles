<template>
  <div class="details">
    <h2> Articles Component </h2>
    <div v-if="article">
      <img :src="article.urlToImage" :alt="article.description" class='image'>
      <h1>{{article.title}}</h1>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Details',
  components: {
  },

  methods: {
    ...mapActions({
      updateCurrentPage: 'updateCurrentPage',
    }),
  },

  computed: {
    ...mapGetters({
      article: 'currentArticle',
    }),
  },

  mounted() {
    const { name = '' } = this.$route.params;
    this.updateCurrentPage(name);
  },
};
</script>

<style scoped>
.image {
  max-height: 40vh;
}
</style>
