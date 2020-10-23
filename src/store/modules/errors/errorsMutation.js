const mutations = {
  setNewsError: (state, errorMessage) => {
    state.hasError = true;
    state.errorMessage = errorMessage;
  },

  setSourceError: (state, errorMessage) => {
    state.hasSourceError = true;
    state.sourceErrorMessage = errorMessage;
  },

  clearNewsError: (state) => {
    state.hasError = false;
    state.errorMessage = '';
  },

  clearSourceError: (state) => {
    state.hasSourceError = false;
    state.sourceErrorMessage = '';
  },
};

export default mutations;
