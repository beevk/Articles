const mutations = {
  initializeHistory: (state, history) => {
    state.history = [...history];
  },

  pushToHistory: (state, articleSlug) => {
    const { history } = state;
    if (history.indexOf(articleSlug) === -1) {
      state.history = [...history, articleSlug];
    }
  },
};

export default mutations;
