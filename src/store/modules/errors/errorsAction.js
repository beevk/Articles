const actions = {
  setNewsError({ commit }, payload) {
    commit('setArticleError', payload);
  },

  setSourceError({ commit }, payload) {
    commit('setSourceError', payload);
  },

  clearNewsError({ commit }, payload) {
    commit('clearArticleError', payload);
  },

  clearSourceError({ commit }, payload) {
    commit('clearSourceError', payload);
  },
};

export default actions;
