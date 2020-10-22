const countArticlesFromSource = (articles, sourceId) => {
  const filteredArticles = articles.filter((article) => article.source.id === sourceId);
  return filteredArticles.length;
};

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

  selectedSource: (state) => {
    const { sources, selectedSourceForFilter, articles } = state;
    let selected;
    if (!selectedSourceForFilter) {
      selected = {
        text: `All (${articles.count}`,
        value: selectedSourceForFilter,
      };
      return selected;
    }
    const selectedSourceOption = sources.filter((source) => source.id === selected);
    selected = {
      text: selectedSourceOption.name,
      value: selectedSourceForFilter,
    };
    return selected;
  },

  dropDownOptions: (state) => {
    const { articles, sources } = state;
    const fullSource = sources.map((source) => {
      const numberOfArticles = countArticlesFromSource(articles, source.id);
      return {
        ...source,
        articleCount: numberOfArticles,
      };
    });
    fullSource.sort((a, b) => b.articleCount - a.articleCount);
    return [
      { value: '', text: `All (${articles.length})` },
      ...fullSource.map((x) => ({ value: x.id, text: `${x.name} (${x.articleCount})` })),
    ];
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
