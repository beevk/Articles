<template>
  <v-app class="grey lighten-4">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
       <nav class="red text-white">
          <span class="font-weight-light">News</span>
          <span>Today</span>
        </nav>
      </router-link>
    </v-app-bar>

    <v-main>
      <div id="app">
        <header>
          <h1>Common Header for all pages</h1>
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/article/a">Article</router-link> |
            <v-btn @click="toggleToken">Toggle Buggy Request</v-btn>
          </div>
        </header>
        <main>
          <router-view :key="$route.fullPath" />
        </main>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import { unsubscribeStore } from './store';

export default {
  name: 'App',

  methods: {
    ...mapActions({
      loadInitialStateForHistory: 'loadInitialStateForHistory',
      fetchSources: 'fetchSources',
    }),

    toggleToken() {
      localStorage.setItem('token', localStorage.getItem('token').split('').reverse().join(''));
    },
  },

  data: () => ({
  }),

  created() {
    this.loadInitialStateForHistory();
    this.fetchSources();
  },

  destroyed() {
    unsubscribeStore();
  },
};
</script>

<style lang="scss" scoped>
.whiteText {
  color: white;
  border-bottom: 1px solid #fff;
}
</style>
