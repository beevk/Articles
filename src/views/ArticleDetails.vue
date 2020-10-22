<template>
  <div class="borderWithPadding about">
    <Details />
    <div class="borderWithPadding historyOfVisitedLinks">
      <History />
    </div>
  </div>
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

  mounted() {
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
