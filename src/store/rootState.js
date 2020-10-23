const state = {
  isLoading: false,
  hasError: false,
  hasSourceError: false,
  articles: [],
  errorMessage: '',
  sourceErrorMessage: '',
  selectedSourceForFilter: 'all',
  currentPage: '',
  history: [],
  sources: [],
  currentArticle: '',
};

export default state;
