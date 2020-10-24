import { initializeHistory, pushToHistory } from '../../types';

const validateArticleSlug = (history, slug) => {
  if (!history.length) {
    return true;
  }
  const historyItem = history.filter(((h) => h.slug === slug));
  return !(historyItem.length);
};

const actions = {
  loadInitialStateForHistory({ commit }) {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem('visitedArticlesHistory'));
    if (!historyFromLocalStorage) {
      return;
    }
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
    const oldHistory = [...state.history];
    const isValid = validateArticleSlug(oldHistory, articleSlug);
    if (isValid) {
      const { title, author, slug } = currentArticle;
      commit(pushToHistory, { title, author, slug });
    }
  },
};

export default actions;
