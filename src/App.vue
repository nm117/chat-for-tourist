<template>
  <div id="app">
    <nav>
      <template v-if="isAuthenticated">
        <div class="nav-left">
          <router-link to="/top" class="title">locals</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/myroom" class="my-roomlist">My Roomlist</router-link>
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
    })
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
.title {
  font-size: 2em;
  color: #c93f47;
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
.my-roomlist {
  font-weight: bold; 
  font-size: 1.2em;
  color: white;
  /* margin: 60px; */
  cursor: pointer;
  margin: auto 30px auto 0;
}
.signout-button {
  font-weight: bold; 
  font-size: 1.1em;
  margin: auto 0 auto 30px;
  cursor: pointer;
}
.router-view:not(#chat) {
  padding-top: 6em;
}
.error-message, .firebase-error-message {
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
.pref-roomnames, .room-roomnames, .my-roomnames {
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
.user-icon {
  /* background-image:;  表示する画像 */
  width:  180px;       /* ※縦横を同値に */
  height: 180px;       /* ※縦横を同値に */
  border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
  background-position: left top;  /* 横長画像の左上を基準に表示 */
  display: inline-block;          /* 複数の画像を横に並べたい場合 */
  background-position: center center;
}
@media (min-width: 600px) {
.pref-roomnames, .room-roomnames, .my-roomnames {
  width: 500px;
}
}
@media (min-width: 1025px) {
.pref-roomnames, .room-roomnames, .my-roomnames {
  width: 500px;
}
}
</style>