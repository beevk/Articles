<template>
  <div v-if="dropDownOptions">
    <v-select
      :items="dropDownOptions"
      item-text="text"
      item-value="value"
      label="Select Source"
      prepend-icon="filter_alt"
      v-on:change="onSelect"
      single-line
    ></v-select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DropDownListForFilter',

  methods: {
    ...mapActions({
      setSelectedSourceForFilter: 'articles/setSelectedSourceForFilter',
    }),

    onSelect(value) {
      this.setSelectedSourceForFilter(value);
    },
  },

  computed: {
    ...mapGetters({
      dropDownOptions: 'articles/dropDownOptions',
    }),
  },
};
</script>

<style scoped>
.image {
  max-height: 40vh;
}
</style>
