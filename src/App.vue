<template>
  <div id="app">
    <nav>
      <template v-if="isAuthenticated">
        <div class="nav-left">
          <router-link to="/top" class="title">locals</router-link>
        </div>
        <div class="nav-right">
          <span @click="signOut" class="signout-button">Logout</span>
        </div>
      </template>
      <template v-else>
        <div class="nav-left">
          <router-link to="/" class="title">locals</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/signin" class="signin-button">SIGN IN</router-link>
          <router-link to="/signup" class="getstarted-button">Get Started</router-link>
        </div>
      </template>
    </nav>
    <router-view class=router-view></router-view>
  </div>
</template>

<script>
import firebase from "./firebase";
import { mapGetters } from "vuex";

const db = firebase.firestore();

export default {
  name: "App",
  data: function () {
    return {
      userId: "",
      username: "",
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  computed: {
    ...mapGetters([ "getUser" ]),

    isAuthenticated() {
      return this.getUser;
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.userId = user.uid;
      const usersRef = db.collection("users").doc(this.userId);
      usersRef.get().then((doc) => {
        this.username = doc.data().username;
        if (user) {
          this.$store.dispatch('updateUser', {
          _id: user.uid,
          email: user.email,
          username: user.displayName || this.username,
          });
        }
      })
    })
    console.log(this.getUser);
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      console.log('logout');
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@1,700&display=swap');
@import '~modern-css-reset';

* {
  text-decoration: none;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  background: #66BAB7;
  height: 3.5em;
  width: 100%;
  padding: 0 2%;
  position: fixed;
  display: flex;
  justify-content: space-between;
}
li {
  list-style-type: none;
}
.nav-left {
  margin: auto 0;
}
.title {
  font-size: 2em;
  color: #c93f47;
  margin: 0 auto;
  font-family: 'PT Sans', sans-serif;
}
.nav-right {
  display: flex;
}
.signin-button {
  font-weight: bold; 
  font-size: 1em;
  margin: auto 30px auto 0;
}
.getstarted-button {
  font-weight: bold;
  font-style: italic;
  font-size: 1.3em; 
  color: #fff;
  text-decoration: underline;
  margin: auto;
}
.signout-button {
  font-weight: bold; 
  font-size: 1.1em;
  margin: auto 0 auto 30px;
  cursor: pointer;
}
.router-view {
  padding-top: 6em;
}
.error-message {
  margin-top: 1em;
  color: red;
}
#prefecture {
  text-align: center;
}
.pref-create {
  display: block;
  margin-bottom: 3em;
  text-decoration: underline;
}
.pref-roomnames {
  box-sizing: border-box;
  color: black;
  width: 90%;
  text-decoration: none;
  text-align: center;
  margin-bottom: 0.8em;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: rgb(235, 235, 235);
  border-radius: 4px;
  line-height: 1.2em;
}
.room-roomnames {
  color: black;
  width: 90%;
  text-decoration: none;
  text-align: center;
  margin-bottom: 0.8em;
  display: inline-block;
  padding: 0.8em;
  background: rgb(235, 235, 235);
  border-radius: 4px;
  line-height: 1.2em;
}
@media (min-width: 600px) {
.room-roomnames {
  width: 500px;
}
.pref-roomnames {
  width: 500px
}
}
@media (min-width: 1025px) {
.room-roomnames {
  width: 500px;
}
.pref-roomnames {
  width: 500px
}
}
</style>