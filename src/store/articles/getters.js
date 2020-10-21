const getters = {
  processedArticles: (state) => {
    const selectedSource = state.selectedSourceForFilter;
    if (!selectedSource) {
      return state.articles;
    }
    return state.articles.filter((article) => article.source.id === selectedSource);
  },

  currentArticle: (state) => {
    const slug = state.currentArticle;
    return state.articles.find((item) => item.slug === slug);
  },

  historyDetails: (state) => {
    const { history } = state;
    return state.articles.filter((item) => history.includes(item.slug));
  },

  isLoading: (state) => state.isLoading,

  hasError: (state) => state.hasError,

  errorMessage: (state) => state.errorMessage,

  getCurrentArticle: (state) => {
    const currentSlug = state.currentPage;
    const allNews = state.news;
    if (!allNews) {
      return undefined;
    }
    const newsArticle = allNews.find((article) => article.slug === currentSlug);
    return { ...newsArticle };
  },
};

export default getters;
