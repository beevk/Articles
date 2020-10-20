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

};

export default mutations;
