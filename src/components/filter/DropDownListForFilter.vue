<template>
  <v-row class="my-0">
    <div v-if="dropDownOptions">
      <v-col>
        <v-select
            :items="dropDownOptions"
            item-text="text"
            item-value="value"
            item-name="text"
            label="Select Source"
            prepend-icon="filter_alt"
            v-on:change="onSelect"
            single-line
          ></v-select>
        </v-col>
    </div>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DropDownListForFilter',

  methods: {
    ...mapActions({
      setSelectedSourceForFilter: 'setSelectedSourceForFilter',
    }),

    onSelect(value) {
      this.setSelectedSourceForFilter(value);
    },
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
