<template>
  <div class="details">
    <div v-if="dropDownOptions">
      <v-select
          :items="dropDownOptions"
          item-text="text"
          item-value="value"
          label="Select Source"
          :defaultSelected="selectedSource"
          v-on:change="onSelect"
        ></v-select>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DropDownListForFilter',
  components: {
  },

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
      selectedSource: 'selectedSource',
    }),
  },
};
</script>

<style scoped>
.image {
  max-height: 40vh;
}
</style>
