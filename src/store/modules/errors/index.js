import errorsMutation from './errorsMutation';
import errorsGetters from './errorsGetters';
import errorsState from './errorsState';
import errorsAction from './errorsAction';

export default {
  namespaced: true,
  state: errorsState,
  getters: errorsGetters,
  actions: errorsAction,
  mutataions: errorsMutation,
};
