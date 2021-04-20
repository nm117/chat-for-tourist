import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
// import router from '../router';
// import firebase from '../firebase'

import AuthModule from './AuthModule';
// import { vuexfireMutations } from 'vuexfire';

// const db = firebase.firestore();
// const usersRef = db.collection('users');

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
    error: false,
  },
  getters: {
    getError: state => state.error,
  },
  mutations: {
    // ...vuexfireMutations,

    setError(state, payload) {
      state.error = payload
    }
  }
});

// router