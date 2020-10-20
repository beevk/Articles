// import { Api, ApiTokenMiddleware, WrapMiddleware } from '@beevk/newsapi-sdk';

const sluggify = ({ publishedAt, title }) => {
  if (!(publishedAt || title)) {
    return '';
  }
  const trimmedDate = publishedAt?.split('T')[0];
  const sluggifiedTitle = title?.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${trimmedDate}-${sluggifiedTitle}`;
};

const actions = {
  async fetchArticles({ commit }) {
    commit('setLoading', true);

    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e');
    const data = await response.json();

    const { articles, status, message } = data;
    // console.log('fetchNews - data::: ', data, status);

    if (status !== 'ok') {
      commit('setLoading', false);
      return commit('setNewsError', message);
    }

    const articlesWithSlug = articles.map(
      (article) => {
        const copy = { ...article };
        // const { publishedAt, title } = copy;
        const slug = sluggify(copy);
        // console.log('SLUG:::', slug, copy);
        copy.slug = slug;
        return copy;
      },
    );

    commit('setArticles', articlesWithSlug);
    commit('clearNewsError', false);
    return commit('setLoading', false);
  },

  setCurrentPage(context, slug) {
    // const { news } = this.$state;
    // if (!news) {
    //   context.dispatch('fetchNews');
    // }
    const pages = localStorage.getItem('visitedPages') || '';
    let allVisitedPages = [];
    if (pages) {
      allVisitedPages = JSON.parse(pages);
    }
    allVisitedPages.push(slug);
    const allVisitedPagesList = JSON.stringify(allVisitedPages);
    localStorage.setItem('visitedPages', allVisitedPagesList);
    context.commit('updateCurrentPage', slug);
  },
};

export default actions;
