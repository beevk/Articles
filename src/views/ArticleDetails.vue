<template>
  <div class="borderWithPadding about">
    <h1>This is an Article Details page</h1>
    <div class="borderWithPadding functionalComponent">
      Functional components
      <button>Read this news</button>
      <button>Edit this Headline</button>
      <div class="borderWithPadding modal">
        Modal to edit headline (only visible on button click - Edit this Headline)
      </div>
    </div>
    <div class="borderWithPadding articleDetailsPage">
      articleDetailsPage
      <Details />
    </div>
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
