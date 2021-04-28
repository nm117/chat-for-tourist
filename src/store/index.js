import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import AuthModule from './AuthModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    a: AuthModule,
  },
  plugins: [createPersistedState(
    {
      key: 'chat-tourist',
      storage: window.sessionStorage
    }
  )],

  state: {
    error: null,
  },
  getters: {
    getError: state => state.error,
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    }
  }
});