<template>
  <v-container>
    <v-row align="center">
      <v-col class="xs-12" cols="12" xs="12" md="4">
        <h1>Headlines</h1>
      </v-col>
      <v-col class="xs-12" cols="12" xs="12" md="8">
        <v-row>
          <v-spacer mdOnly md="4" />
          <v-col cols="12" xs="12" sm="6" md="4">
            <DropDownListForFilter />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="4">
            <Search />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Articles />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Articles from '../components/articles/Articles.vue';
import DropDownListForFilter from '../components/filter/DropDownListForFilter.vue';
import Search from '../components/filter/Search.vue';

export default {
  name: 'Home',
  components: {
    Articles,
    DropDownListForFilter,
    Search,
  },
};
</script>

<style scoped>
  .borderWithPadding {
    border: 1px solid #F57499;
    padding: 20px;
    margin: 10px;
  }
</style>
