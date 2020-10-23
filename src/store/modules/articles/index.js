import articlesState from './articlesState';
import articlesMutation from './articlesMutation';
import articlesGetters from './articlesGetters';
import articlesAction from './articlesAction';

export default {
  namespaced: true,
  state: articlesState,
  mutations: articlesMutation,
  getters: articlesGetters,
  actions: articlesAction,
};
