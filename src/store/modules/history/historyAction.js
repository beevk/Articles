import { initializeHistory, pushToHistory } from '../../types';

const actions = {
  loadInitialStateForHistory({ commit }) {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem('visitedArticlesHistory'));
    const isValid = !!(
      Array.isArray(historyFromLocalStorage.history)
      && historyFromLocalStorage.history.length
    );

    if (isValid) {
      commit(initializeHistory, historyFromLocalStorage.history);
    }
  },

  updateHistory({ commit, state, rootState }, articleSlug) {
    const { articles } = rootState.articles;
    const currentArticle = articles.find(((article) => article.slug === articleSlug));
    const oldHistory = state.history.length;
    let isNewHistoryItem = true;
    if (oldHistory) {
      isNewHistoryItem = !(state.history.reduce((h) => h.slug === articleSlug).length);
    }
    if (isNewHistoryItem) {
      const { title, author, slug } = currentArticle;
      commit(pushToHistory, { title, author, slug });
    }
  },
};

export default actions;
