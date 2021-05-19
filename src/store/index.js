import Vue from 'vue';
import Vuex from 'vuex';

import AuthModule from './AuthModule';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    a: AuthModule,
  },
  plugins: [createPersistedState(
    {
      key: 'chat-tourist',
      paths: ['a.user', 'a.isSignIn'],
      storage: window.sessionStorage
    }
  )],
  state: {
    error: null,
    message: null,
  },
  getters: {
    getError: state => state.error,
    getMessage: state => state.message,
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    },
    setMessage(state, payload) {
      state.message = payload
    },
  }
});