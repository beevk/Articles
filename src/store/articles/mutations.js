const mutations = {
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  },

  setArticles: (state, news) => {
    // const oldNews = state.news;
    // console.log('setNews - data:::', oldNews);
    state.articles = [...news];
  },

  setNewsError: (state, errorMessage) => {
    state.hasError = true;
    state.errorMessage = errorMessage;
  },

  clearNewsError: (state, hasError) => {
    state.hasError = hasError;
    state.errorMessage = '';
  },

  updateCurrentPage: (state, currentPage) => {
    state.currentPage = currentPage;
  },

  initializeHistory: (state, history) => {
    state.history = [...history];
  },

  pushToHistory: (state, articleSlug) => {
    // don't push duplicate copy
    const { history } = state;
    if (history.indexOf(articleSlug) === -1) {
      state.history = [...history, articleSlug];
    }
  },

  setCurrentArticle: (state, articleSlug) => {
    state.currentArticle = articleSlug;
  },
};

export default mutations;
