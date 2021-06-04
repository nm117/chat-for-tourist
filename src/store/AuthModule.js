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
    async signupWithEmail({ commit, dispatch }, payload) {
      await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          usersRef.doc(user.user.uid).set({
            username: payload.username,
            avatar: 'https://firebasestorage.googleapis.com/v0/b/vue-chat-tourist.appspot.com/o/user-image%2FLocals_userAvatar_original.gif?alt=media&token=3afc5ea3-38b1-408a-819b-16cc465cd728',
            created: firebase.firestore.FieldValue.serverTimestamp(),
          })
          commit('setUser', user);
          commit('setSignIn', true);
          console.log("signup");
          console.log(user.user);

          commit('setUser', {
            _id: user.user.uid,
            email: user.user.email,
            username: payload.username,
          })
          dispatch('updateProfile', user.user);
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        }
      );
      dispatch('updateProfile');
    },
    async signupWithGoogle({ commit, dispatch }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider)
        .then(result => {
          usersRef.doc(result.user.uid).set({
            username: result.user.displayName,
            avatar: 'https://firebasestorage.googleapis.com/v0/b/vue-chat-tourist.appspot.com/o/user-image%2FLocals_userAvatar_original.gif?alt=media&token=3afc5ea3-38b1-408a-819b-16cc465cd728',
            created: firebase.firestore.FieldValue.serverTimestamp(),
          })
          commit('setUser', result);
          commit('setSignIn', true);
          console.log("signup");

          commit('setUser', {
            _id: result.user.uid,
            email: result.user.email,
            username: result.user.displayName,
          })
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        }
      );
      dispatch('updateProfile');
    },
    updateProfile() {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/vue-chat-tourist.appspot.com/o/user-image%2FLocals_userAvatar_original.gif?alt=media&token=3afc5ea3-38b1-408a-819b-16cc465cd728',
      }).then(() => {
        console.log("original icon is set");
      }).catch(error => {
        console.log(error.code);
        console.log(error.message);
      });
    },
    //Signin
    signinWithEmail({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setUser', user);
          commit('setSignIn', true);
          console.log("signin");
          
          const usersRef = db.collection("users").doc(user.user.uid);
          usersRef.get().then((doc) => {
            const username = doc.data().username;
            commit('setUser', {
              _id: user.user.uid,
              email: user.user.email,
              username: username,
            })
          })
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
          commit('setSignIn', true);
          console.log("signin");

          const usersRef = db.collection("users").doc(result.user.uid);
          usersRef.get().then((doc) => {
            const username = doc.data().username;
            commit('setUser', {
              _id: result.user.uid,
              email: result.user.email,
              username: username,
            })
          })
        })
        .catch(error => {
          commit('setError', error);
          console.log(error.code);
          console.log(error.message);
        }
      );
    },
    signinForGuest({ commit }) {
      firebase.auth().signInWithEmailAndPassword('guestuser@locals.com', 'locals123')
        .then(user => {
          commit('setUser', user);
          commit('setSignIn', true);
          console.log("guest signin");
          
          const usersRef = db.collection("users").doc(user.user.uid);
          usersRef.get().then((doc) => {
            const username = doc.data().username;
            commit('setUser', {
              _id: user.user.uid,
              email: user.user.email,
              username: username,
            })
          })
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
    //set icon
    setAvatar ({ commit }, payload)  {
      const user = firebase.auth().currentUser;
      const usersRef = db.collection("users").doc(user.uid);
      const avatarRef = firebase.storage().ref().child('user-image/' + payload.fileImgName);

      avatarRef.put(payload.fileImg).then(() => {
        avatarRef.getDownloadURL().then((url) => {
          user.updateProfile({
            photoURL: url,
          })
          .then(() => {
            usersRef.update({
              avatar: user.photoURL,
              updated: firebase.firestore.FieldValue.serverTimestamp()
            });
            commit('setMessage', "Your profile photo is successfully updated!");
            console.log("Icon updated");
          })
          .catch(error => {
            commit('setError', error);
            console.log(error.code);
            console.log(error.message);
          });
        });
      });
    },
    //Change email
    changeEmail({ commit }, payload) {
      const user = firebase.auth().currentUser;
      const newEmail = payload.email
      const userName = payload.username
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, payload.password);
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
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, payload.currentPass);
      user.reauthenticateWithCredential(credential)
      .then(() => {
        console.log("User re-authenticated");
        user.updatePassword(newPassword)
        .then(() => {
          commit('setMessage', "New password is successfully changed!");
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