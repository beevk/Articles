<template>
  <div class="search">
    <v-form class="px-4">
    <v-text-field
      label="Search"
      v-model="query"
      @input="onChange"
    >
    </v-text-field>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Search',

  data() {
    return {
      query: '',
    };
  },

  timeoutId: '',

  methods: {
    ...mapActions({
      searchArticles: 'searchArticles',
    }),

    onChange(value) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.searchArticles(value);
      }, 500);
      // debounce(this.search, 500);
    },
  },

  computed: {
    ...mapGetters({
      // dropDownOptions: 'dropDownOptions',
    }),
  },
};
</script>

<style scoped>
</style>
