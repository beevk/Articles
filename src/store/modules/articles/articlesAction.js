import getSdk from '../../../api';

const sluggedUrl = (publishedAt, url) => {
  if (!(publishedAt || url)) {
    return '';
  }
  const stripedUrl = url.split('/').slice(3).join('-');
  const trimmedDate = publishedAt?.split('T').join('-');
  const sluggedTitle = stripedUrl?.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${trimmedDate}-${sluggedTitle}`;
};

const actions = {
  async fetchArticles(context) {
    const { commit, dispatch } = context;
    commit('setLoading', true);
    commit('setSelectedSource', 'all');

    const client = getSdk();
    const data = await client.headlines.listHeadlines();

    const { articles, status, message = '' } = data;
    if (status === 'error') {
      commit('setLoading', false);
      return commit('errors/setNewsError', message, { root: true });
    }

    const articlesWithSlug = articles.map(
      (article) => {
        const copy = { ...article };
        const { publishedAt, url } = copy;
        const slug = sluggedUrl(publishedAt, url);
        copy.slug = slug;
        return copy;
      },
    );

    commit('setArticles', articlesWithSlug);
    dispatch('errors/clearNewsError', null, { root: true });
    return commit('setLoading', false);
  },

  async fetchSources({ commit, dispatch }) {
    const client = getSdk();
    const data = await client.sources.listSources();

    const { sources, status, message = '' } = data;
    if (status === 'error') {
      return commit('setSourceError', message);
    }

    commit('setSources', sources);
    return dispatch('errors/clearSourceError', false, { root: true });
  },

  async searchArticles({ commit, dispatch }, query) {
    commit('setLoading', true);

    const client = getSdk();
    const data = await client.search.search(query);

    const { articles, status, message = '' } = data;
    if (status === 'error') {
      commit('setLoading', false);
      return dispatch('errors/setNewsError', message, { root: true });
    }
    if (articles.length === 0) {
      return dispatch('errors/setNewsError', `No news Article found for ${query}`, { root: true });
    }

    const articlesWithSlug = articles.map(
      (article) => {
        const copy = { ...article };
        const { publishedAt, title } = copy;
        const slug = sluggedUrl(publishedAt, title);
        copy.slug = slug;
        return copy;
      },
    );

    commit('setArticles', articlesWithSlug);
    dispatch('errors/clearNewsError', null, { root: true });
    return commit('setLoading', false);
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

  updateTitle({ commit, state }, payload) {
    const { articles } = state;
    const { slug, value } = payload;
    const originalArticle = articles.find((x) => x.slug === slug);
    const updatedArticle = { ...originalArticle, title: value };
    commit('updateTitle', { slug, updatedArticle });
  },

  setSelectedSourceForFilter({ commit }, source) {
    commit('setSelectedSource', source);
  },
};

export default actions;
