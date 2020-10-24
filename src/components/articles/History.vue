<template>
      <v-col v-if="historyDetails">
        <v-row>
          <h2 class=".text-h2 text--primary mb-3"> Recently Visited </h2>
        </v-row>
        <v-row
          v-for="history in historyDetails"
          :key="history.slug"
          @click="onClick(history.slug, history.hasActiveLink)"
          class="d-flex justify-center flex-wrap"
        >
          <v-col class="my-0">
            <v-card
              v-if="history.slug !== currentSlug"
              class="historyCard"
              :class="history.hasActiveLink ? 'validHistoryLink' : 'invalidHistoryLink'"
            >
              <v-card-text>
                <div class="d-flex">
                  <v-icon color="primary">link</v-icon>
                  <h3 class="historyLink">{{history.title}}</h3>
                </div>
                <small v-if="hasName(history)">- {{ history.author }}</small>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'History',

  data() {
    return {
      currentSlug: this.$route.params.name,
    };
  },

  methods: {
    onClick(slug, isValid) {
      const currentPath = this.$route.params.name;
      if (currentPath !== slug && isValid) {
        this.$router.push({ name: 'ArticleDetails', params: { name: slug } });
      }
    },

    hasName(history) {
      return !!(history.author);
    },
  },

  computed: {
    ...mapGetters({
      historyDetails: 'history/historyDetails',
    }),
  },
};
</script>

<style scoped>
.image {
  max-height: 40vh;
}

.historyCard.validHistoryLink:hover {
  color: #1976d2;
  cursor: pointer;
}

</style>
