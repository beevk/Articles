<template>
  <div class="borderWithPadding home">
    <h1>This is Home page</h1>
    <div class="borderWithPadding filterComponent">
      filterComponent
      <div class="borderWithPadding searchBar">
        searchBar
      </div>
      <div class="borderWithPadding filterDropdown">
        filterDropdown
      </div>
    </div>
    <div class="borderWithPadding articles">
      articles
      <div class="borderWithPadding article">
        <Articles />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Articles from '@/components/articles/Articles.vue';

export default {
  name: 'Home',
  components: {
    Articles,
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
