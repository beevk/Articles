<template>
  <v-app class="red darken-4">
    <v-container>
      <v-app-bar
        app
        color="primary"
        dark
      >
        <v-row class="d-flex space-between">
          <v-col>
            <router-link to="/">
              <nav class="text-xs-h3 font-weight-bold white--text">
                <span>
                  <span class="font-weight-light bottomBorder">News</span>
                  <span>Today</span>
                </span>
              </nav>
            </router-link>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  elevation="0"
                  color="error"
                  v-bind="attrs"
                  v-on="on"
                  @click="toggleToken"
                >
                  <v-icon small>
                    power_settings_new
                  </v-icon>
                </v-btn>
              </template>
              <span>Toggle error requests</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-app-bar>

      <v-main>
        <router-view :key="$route.fullPath" />
      </v-main>
    </v-container>
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
.spaceBetween {
  display: flex;
  justify-content: space-between;
}

.bottomBorder {
  border-bottom: 1px solid #fff;
}
</style>
