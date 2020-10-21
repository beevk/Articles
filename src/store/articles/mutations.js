const mutations = {
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  },

  setArticles: (state, news) => {
    state.articles = [...news];
  },

  setNewsError: (state, errorMessage) => {
    state.hasError = true;
    state.errorMessage = errorMessage;
  },

  setSourceError: (state, errorMessage) => {
    state.hasSourceError = true;
    state.sourceErrorMessage = errorMessage;
  },

  clearSourceError: (state) => {
    state.hasSourceError = false;
    state.sourceErrorMessage = '';
  },

  clearNewsError: (state) => {
    state.hasError = false;
    state.errorMessage = '';
  },

  updateCurrentPage: (state, currentPage) => {
    state.currentPage = currentPage;
  },

  initializeHistory: (state, history) => {
    state.history = [...history];
  },

  pushToHistory: (state, articleSlug) => {
    const { history } = state;
    if (history.indexOf(articleSlug) === -1) {
      state.history = [...history, articleSlug];
    }
  },

  setCurrentArticle: (state, articleSlug) => {
    state.currentArticle = articleSlug;
  },

  setSources: (state, sources) => {
    state.sources = sources;
  },

  setSelectedSource: (state, source) => {
    state.selectedSourceForFilter = source;
  },
};

export default mutations;
