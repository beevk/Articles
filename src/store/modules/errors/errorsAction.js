import {
  setArticleError,
  setSourceError,
  clearArticleError,
  clearSourceError,
} from '../../types';

const actions = {
  setArticleError({ commit }, payload) {
    commit(setArticleError, payload);
  },

  setSourceError({ commit }, payload) {
    commit(setSourceError, payload);
  },

  clearArticleError({ commit }, payload) {
    commit(clearArticleError, payload);
  },

  clearSourceError({ commit }, payload) {
    commit(clearSourceError, payload);
  },
};

export default actions;
