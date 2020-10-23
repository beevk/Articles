<template>
      <v-col v-if="historyDetails">
        <v-row>
          <h2 class=".text-h2 text--primary mb-3"> Recently Visited </h2>
        </v-row>
        <v-row
          v-for="history in historyDetails"
          :key="history.slug"
          @click="onClick(history.slug)"
          class="d-flex justify-center flex-wrap"
        >
          <v-col class="my-0">
            <v-card
              v-if="history.slug !== currentSlug"
              class="historyCard"
            >
              <v-card-text>
                <div class="d-flex">
                  <v-icon color="primary">link</v-icon>
                  <h3 class="historyLink">{{history.title}}</h3>
                </div>
                <small v-if="hasName(history)">- {{history.source.name}}</small>
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

.historyLink:hover {
  color: #1976d2;
}

.historyCard:hover {
  cursor: pointer;
}
</style>
