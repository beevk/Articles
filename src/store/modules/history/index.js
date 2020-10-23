import historyState from './historyState';
import historyMutation from './historyMutation';
import historyGetters from './historyGetters';
import historyAction from './historyAction';

export default {
  namespaced: true,
  state: historyState,
  mutations: historyMutation,
  getters: historyGetters,
  actions: historyAction,
};
