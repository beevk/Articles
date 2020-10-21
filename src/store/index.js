import Vue from 'vue';
import Vuex from 'vuex';

import actions from './articles/actions';
import getters from './articles/getters';
import mutations from './articles/mutations';
import state from './rootState';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
});

export const unsubscribeStore = store.subscribe((mutation, updatedState) => {
  if (mutation.type === 'pushToHistory') {
    const articles = JSON.stringify(updatedState.history);
    localStorage.setItem('visitedArticlesHistory', articles);
  }
});

export default store;
