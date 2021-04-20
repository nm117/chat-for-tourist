import firebase from '../firebase'
// import { firestoreAction } from 'vuexfire'
// import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';

const db = firebase.firestore()
const usersRef = db.collection('users')

const AuthModule = {
  state: {
    user: null,
    isSignIn: false
  },
  getters: {
    getUser: state => state.user,
    isSignIn: state => state.isSignIn
  },
  mutations: {//第一引数にstate必須
    setSignIn(state, payload) {
      state.isSignIn = payload
    },
    setUser(state, payload) {
      state.user = payload
    }

  },
  actions: {
    //Vuexfire
    // bindUsersRef: firestoreAction(({ bindFirestoreRef }) => {
    //   bindFirestoreRef('users', usersRef);
    // }),
    // unbindUsersRef: firestoreAction(({ unbindFirestoreRef }) => {
    //   unbindFirestoreRef('users');
    // }),
    updateUser ({ commit }, user) {
      commit('setUser', {
        _id: user.uid,
        email: user.email,
        username: user.displayName
      });
    },
    //Signup
    async signupWithEmail({ commit }, payload) {
      await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          usersRef.doc(user.user.uid).set({
            username: payload.username,
          })
          commit('setUser', user);
          commit('setSignIn', true);
          console.log(user);
          console.log("signup");
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        }
      );
    },
    async signupWithGoogle({ commit }) {
      var provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider)
        .then(result => {
          commit('setUser', result);
          commit('setSignIn', true);
          console.log(result);
          console.log("signup");
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        }
      );
    },
    //Signin
    async signinWithEmail({ commit }, payload) {
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setUser', user);
          commit('setSignIn', true);
          console.log(user);
          console.log("signin");
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        }
      );
    },
    async signinWithGoogle({ commit }) {
      var provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider)
        .then(result => {
          commit('setUser', result);
          commit('setSignIn', true)
          console.log(result);
          console.log("signin");
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        }
      );
    },
    //Signout
    async signOut({ commit }) {
      location.reload();
      await firebase.auth().signOut()
      .then(() => {
        commit('setUser', null)
        commit('setSignIn', false)
        console.log("logout");
      })
      .catch(error => {
        commit('setError', error);
        console.log(error.code);
        console.log(error.message);
      })
    }
    //VUEXFIRE
    // EDIT_USER: firestoreAction((context, { i, payload }) => {
    //   usersRef.doc(i).update({
    //     username: payload.username,
    //   });
    // }),
    // DELETE_USER: firestoreAction((context, i) => {
    //   usersRef.doc(i).delete();
    // })
  }
};

export default AuthModule