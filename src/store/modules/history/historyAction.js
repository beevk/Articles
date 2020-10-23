const actions = {
  loadInitialStateForHistory({ commit }) {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem('visitedArticlesHistory'));
    if (Array.isArray(historyFromLocalStorage) && historyFromLocalStorage.length) {
      commit('initializeHistory', historyFromLocalStorage);
    }
  },

  updateHistory({ commit }, url) {
    commit('pushToHistory', url);
  },
};

export default actions;
