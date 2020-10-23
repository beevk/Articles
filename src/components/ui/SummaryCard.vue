<template>
  <div class="mx-0 mb-0">
  <v-card
    elevation="2"
    class="my-4 ml-auto"
    min-height="400"
  >
    <v-img
      v-if="hasImage"
      height="250"
      lazy-src="https://via.placeholder.com/150"
      :src="`${article.urlToImage}`"
    />
    <v-card-text class="imageFiller" v-else>
      <div>
        {{article.description}}
      </div>
    </v-card-text>
    <v-card-title>
      {{article.title | ellipsis}}
    </v-card-title>
    <v-card-subtitle v-if="hasAuthor">
      - {{article.author}}
    </v-card-subtitle>
  </v-card>
  </div>
</template>

<script>

export default {
  name: 'SummaryCard',
  props: {
    article: Object,
  },

  computed: {
    hasAuthor() {
      return !!(this.article.author);
    },

    hasImage() {
      return !!(this.article.urlToImage);
    },
  },

  filters: {
    ellipsis(text) {
      const { length } = text;
      const trimmedString = text.slice(0, 100);
      if (length > 100) {
        return `${trimmedString}...`;
      }
      return trimmedString;
    },
  },
};
</script>

<style scoped>
  .imageFiller {
    min-height: 250px;
    display: flex;
    align-items: center;
    background-color: #1976d2;
    color: #fff !important;
  }
</style>
