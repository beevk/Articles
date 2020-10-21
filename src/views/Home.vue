<template>
  <div class="borderWithPadding home">
    <h1>This is Home page</h1>
    <div class="borderWithPadding filterComponent">
      <div class="borderWithPadding searchBar">
        searchBar
      </div>
      <div class="borderWithPadding filterDropdown">
        <DropDownListForFilter />
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
import DropDownListForFilter from '../components/filter/DropDownListForFilter.vue';

export default {
  name: 'Home',
  components: {
    Articles,
    DropDownListForFilter,
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
