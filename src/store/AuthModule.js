import firebase from '../firebase'

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
    updateUser ({ commit }, payload) {
      commit('setUser', {
        _id: payload._id,
        email: payload.email,
        username: payload.username,
      });
    },
    //Signup
    signupWithEmail({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          usersRef.doc(user.user.uid).set({
            username: payload.username,
            created: firebase.firestore.FieldValue.serverTimestamp(),
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
    signupWithGoogle({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          usersRef.doc(result.user.uid).set({
            username: result.user.displayName,
            created: firebase.firestore.FieldValue.serverTimestamp(),
          })          
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
    signinWithEmail({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
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
    signinWithGoogle({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
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
    signOut({ commit }) {
      firebase.auth().signOut()
      .then(() => {
        commit('setUser', null)
        commit('setSignIn', false)
        location.reload();
        console.log("logout");
      })
      .catch(error => {
        commit('setError', error);
        console.log(error.code);
        console.log(error.message);
      })
    },
    //Verify email
    verifyEmail ({ commit }) {
      const user = firebase.auth().currentUser;
      user.sendEmailVerification()
      .then(() => {
        commit('setMessage', "Email sent to new email adress, please check it.");
        console.log("Email sent");
      })
      .catch(error => {
        commit('setError', error);
        console.log(error.code);
        console.log(error.message);
      })
    },
    //Change email
    changeEmail({ commit }, payload) {
      const user = firebase.auth().currentUser;
      const newEmail = payload.email
      const userName = payload.username
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email, payload.password);
      user.reauthenticateWithCredential(credential)
      .then(() => {
        console.log("User re-authenticated");
        user.updateEmail(newEmail)
        .then(() => {
          commit('setUser', {
            _id: user.uid,
            email: newEmail,
            username: userName,
          });
          commit('setMessage', "New email is successfully changed!");
          console.log(user);
          console.log("Email Changed");
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        })
      .catch(error => {
        commit('setError', error);
        console.log(error.code);
        console.log(error.message);
      })
      })
    },
    //Change password
    changePassword({ commit }, payload) {
      const user = firebase.auth().currentUser;
      const newPassword = payload.newPass;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email, payload.currentPass);
      user.reauthenticateWithCredential(credential)
      .then(() => {
        console.log("User re-authenticated");
        user.updatePassword(newPassword)
        .then(() => {
          commit('setMessage', "New password is successfully changed!");
          console.log(user);
          console.log("Password Changed");
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        })
      .catch(error => {
        commit('setError', error);
        console.log(error.code);
        console.log(error.message);
      })
      })
    },
    resetPassword({ commit }, payload) {
      firebase.auth().sendPasswordResetEmail(payload.email)
      .then(() => {
        commit('setMessage', "Email sent to your adress.");
        console.log("Email sent");
      })
      .catch(error => {
        commit('setError', error);
        console.log(error.code);
        console.log(error.message);
      })
    },
  }
};

export default AuthModule