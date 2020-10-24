const checkLink = (history, articles) => {
  const matchingArticle = articles.filter(((article) => article.slug === history.slug));
  return !!matchingArticle.length;
};

const historyGetters = {
  historyDetails: (state, getters, rootState) => {
    const { history } = state;
    const { articles } = rootState.articles;
    const historyDetails = history.map((h) => {
      const hasActiveLink = checkLink(h, articles);
      const relevantDetails = h;
      relevantDetails.hasActiveLink = hasActiveLink;
      return relevantDetails;
    });
    return historyDetails;
  },
};

export default historyGetters;
