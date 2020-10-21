<template>
  <div class="details">
    <div v-if="historyDetails">
      <h2> Previously visited Links </h2>
      <div
        v-for="history in historyDetails"
        :key="history.slug"
        @click="onClick(history.slug)"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          v-if="history.slug !== currentSlug"
        >
          <v-card-text>
            <h3>{{history.title}}</h3>
            <sub v-if="hasName(history)">{{history.source.name}}</sub>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Details',

  components: {
  },

  data() {
    return {
      currentSlug: this.$route.params.name,
    };
  },

  methods: {
    onClick(slug) {
      const currentPath = this.$route.params.name;
      if (currentPath !== slug) {
        this.$router.push({ name: 'ArticleDetails', params: { name: slug } });
      }
    },

    hasName(history) {
      return !!(history?.source?.name);
    },
  },

  computed: {
    ...mapGetters({
      historyDetails: 'historyDetails',
    }),
  },
};
</script>

<style scoped>
.image {
  max-height: 40vh;
}
</style>
