import getSdk from '../../api';

const sluggedUrl = (publishedAt, title) => {
  if (!(publishedAt || title)) {
    return '';
  }
  const trimmedDate = publishedAt?.split('T')[0];
  const sluggedTitle = title?.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${trimmedDate}-${sluggedTitle}`;
};

const actions = {
  async fetchArticles({ commit }) {
    commit('setLoading', true);

    const client = getSdk();
    const data = await client.headlines.listHeadlines();

    const { articles, status, message = '' } = data;
    if (status === 'error') {
      commit('setLoading', false);
      return commit('setNewsError', message);
    }

    const articlesWithSlug = articles.map(
      (article) => {
        const copy = { ...article };
        const { publishedAt, title } = copy;
        const slug = sluggedUrl(publishedAt, title);
        // console.log('SLUG:::', slug, copy);
        copy.slug = slug;
        return copy;
      },
    );

    commit('setArticles', articlesWithSlug);
    commit('clearNewsError');
    return commit('setLoading', false);
  },

  async fetchSources({ commit }) {
    const client = getSdk();
    const data = await client.sources.listSources();

    const { sources, status, message = '' } = data;
    if (status === 'error') {
      return commit('setSourceError', message);
    }

    commit('setSources', sources);
    return commit('clearSourceError', false);
  },

  async searchArticles({ commit }, query) {
    commit('setLoading', true);

    const client = getSdk();
    const data = await client.search.search(query);

    const { articles, status, message = '' } = data;
    if (status === 'error') {
      commit('setLoading', false);
      return commit('setNewsError', message);
    }
    if (articles.length === 0) {
      return commit('setNewsError', `No news Article found for ${query}`);
    }

    const articlesWithSlug = articles.map(
      (article) => {
        const copy = { ...article };
        const { publishedAt, title } = copy;
        const slug = sluggedUrl(publishedAt, title);
        // console.log('SLUG:::', slug, copy);
        copy.slug = slug;
        return copy;
      },
    );

    commit('setArticles', articlesWithSlug);
    commit('clearNewsError');
    return commit('setLoading', false);
  },

  loadInitialStateForHistory({ commit }) {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem('visitedArticlesHistory'));
    if (Array.isArray(historyFromLocalStorage) && historyFromLocalStorage.length) {
      commit('initializeHistory', historyFromLocalStorage);
    }
  },

  updateHistory({ commit }, url) {
    commit('pushToHistory', url);
  },

  updateCurrentPage({ commit, state, dispatch }, url) {
    const { articles = [] } = state;
    if (articles.length) {
      return commit('setCurrentArticle', url);
    }
    return dispatch('fetchArticles').then(() => {
      commit('setCurrentArticle', url);
    });
  },

  setSelectedSourceForFilter({ commit }, source) {
    commit('setSelectedSource', source);
  },
};

export default actions;
