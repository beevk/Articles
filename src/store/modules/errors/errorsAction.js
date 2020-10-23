const actions = {
  setNewsError({ commit }, payload) {
    commit('setNewsError', payload);
  },

  setSourceError({ commit }, payload) {
    commit('setSourceError', payload);
  },

  clearNewsError({ commit }, payload) {
    commit('clearNewsError', payload);
  },

  clearSourceError({ commit }, payload) {
    commit('clearSourceError', payload);
  },
};

export default actions;
