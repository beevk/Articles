import {
  setArticleError,
  setSourceError,
  clearArticleError,
  clearSourceError,
} from '../../types';

const mutations = {
  [setArticleError]: (state, errorMessage) => {
    state.hasArticleError = true;
    state.articleErrorMessage = errorMessage;
  },

  [setSourceError]: (state, errorMessage) => {
    state.hasSourceError = true;
    state.sourceErrorMessage = errorMessage;
  },

  [clearArticleError]: (state) => {
    state.hasArticleError = false;
    state.articleErrorMessage = '';
  },

  [clearSourceError]: (state) => {
    state.hasSourceError = false;
    state.sourceErrorMessage = '';
  },
};

export default mutations;
