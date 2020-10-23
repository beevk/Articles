<template>
  <v-container>
    <v-row>
      <v-col class="xs-12" xs="12" md="4">
        <h1>Headlines</h1>
      </v-col>
      <v-col class="xs-12" xs="12" md="8">
        <v-toolbar flat class="d-flex justify-end">
          <v-row wrap>
            <v-col s="12" md="6" l="4">
              <DropDownListForFilter />
            </v-col>
            <v-col s="12" md="6" l="4">
              <Search />
            </v-col>
          </v-row>
        </v-toolbar>
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
