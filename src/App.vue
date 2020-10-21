<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <div id="app">
        <header>
          <h1>Common Header for all pages</h1>
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/article/a">Article</router-link>
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
    }),
  },

  data: () => ({
  }),

  created() {
    this.loadInitialStateForHistory();
  },

  destroyed() {
    unsubscribeStore();
  },
};
</script>
