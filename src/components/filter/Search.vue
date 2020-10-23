<template>
  <v-form class="">
    <v-text-field
      label="Search"
      v-model="query"
      hide-details="auto"
      @input="onChange"
    >
      <v-icon
        slot="append"
        color="secondary"
      >
        search
      </v-icon>
    </v-text-field>
  </v-form>
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
