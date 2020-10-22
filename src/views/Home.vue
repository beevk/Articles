<template>
  <div class="borderWithPadding home">
    <div class="borderWithPadding filterComponent">
      <div class="borderWithPadding searchBar">
        <Search />
      </div>
      <div class="borderWithPadding filterDropdown">
        <DropDownListForFilter />
      </div>
    </div>
    <div>
      <h1>Today's Headlines</h1>
      <Articles />
    </div>
  </div>
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
