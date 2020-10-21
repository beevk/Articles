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
  name: 'Search',
  components: {
  },

  methods: {
    ...mapActions({
      setSelectedSourceForFilter: 'setSelectedSourceForFilter',
    }),
  },

  computed: {
    ...mapGetters({
      dropDownOptions: 'dropDownOptions',
    }),
  },
};
</script>

<style scoped>
.image {
  max-height: 40vh;
}
</style>
