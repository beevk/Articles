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

  dropDownOptions: (state) => {
    const { articles, sources } = state;
    const availableSourceInArticles = articles.map((article) => article.source.id);

    const sourceForDropDownOptions = sources.map((item) => ({
      text: item.name,
      value: item.id,
    }));

    const sortedOptions = sourceForDropDownOptions.sort((a, b) => {
      const current = a.value;
      const next = b.value;
      // console.log(`current: ${current}, next: ${next}`);
      if (availableSourceInArticles.indexOf(current) < availableSourceInArticles.indexOf(next)) {
        console.log('sorting on top', current);
        return 1;
      }
      return -1;
    });
    const allSource = {
      text: 'All',
      value: '',
    };
    sortedOptions.unshift(allSource);
    return sortedOptions;
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
