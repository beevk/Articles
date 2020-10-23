const historyGetters = {
  historyDetails: (state, getters, rootState) => {
    const { history } = state;
    const { articles } = rootState.articles;
    return articles.filter((item) => history.includes(item.slug));
  },
};

export default historyGetters;
