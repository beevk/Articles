import {
  setLoading,
  setArticles,
  setCurrentArticle,
  setSources,
  setSelectedSource,
  updateTitle,
} from '../../types';

const mutations = {
  [setLoading]: (state, isLoading) => {
    state.isLoading = isLoading;
  },

  [setArticles]: (state, news) => {
    state.articles = [...news];
  },

  [setCurrentArticle]: (state, articleSlug) => {
    state.currentArticle = articleSlug;
  },

  [setSources]: (state, sources) => {
    state.sources = sources;
  },

  [setSelectedSource]: (state, source) => {
    state.selectedSourceForFilter = source;
  },

  [updateTitle]: (state, { slug, updatedArticle }) => {
    const { articles } = state;
    const otherArticles = articles.filter((article) => article.slug !== slug);
    state.articles = [
      ...otherArticles,
      updatedArticle,
    ];
  },
};

export default mutations;
