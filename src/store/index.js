import Vue from 'vue';
import Vuex from 'vuex';

import actions from './articles/actions';
import getters from './articles/getters';
import mutations from './articles/mutations';
import state from './rootState';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
});
