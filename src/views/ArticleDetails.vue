<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <Details />
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <v-col xs="12">
        <History />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Details from '../components/articles/Details.vue';
import History from '../components/articles/History.vue';

export default {
  name: 'ArticleDetails',

  components: {
    Details,
    History,
  },
};
</script>

<style scoped>
  .borderWithPadding {
    border: 1px solid #F57499;
    padding: 20px;
    margin: 10px;
  }

  button {
    border: solid 2px black;
    margin-left: 10px;
  }
</style>
