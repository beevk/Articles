import Vue from 'vue';
import Vuex from 'vuex';

import articles from './modules/articles';
import errors from './modules/errors';
import history from './modules/history';
import { pushToHistory } from './types';

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    articles,
    errors,
    history,
  },
});

export const unsubscribeStore = store.subscribe((mutation, updatedState) => {
  if (mutation.type === `history/${pushToHistory}`) {
    const historyArticles = JSON.stringify(updatedState.history);
    localStorage.setItem('visitedArticlesHistory', historyArticles);
  }
});

export default store;
