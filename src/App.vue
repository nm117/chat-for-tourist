<template>
  <div id="app">
    <nav>
      <template v-if="isAuthenticated">
        <div class="nav-left">
          <router-link to="/top" class="title">locals</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/myroom" class="my-roomlist">My Roomlist</router-link>
          <span v-click-outside="hideUserMenu" @click="openUserMenu" class="user-menu">
            <font-awesome-icon :icon="['far', 'user-circle']"/>
          </span>
          <div v-if="isUsermenuOpen" class="user-menu-open">
            <router-link to="/mypage" class="mypage">Mypage</router-link><hr>
            <span @click="signOut" class="signout-button">Signout</span>
          </div>
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
      isUsermenuOpen: false,
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
      console.log(user)
    })
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      console.log('logout');
    },
    openUserMenu() {
      this.isUsermenuOpen = true;
    },
    hideUserMenu() {
      this.isUsermenuOpen = false;
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
  padding: 0 1em;
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
.user-menu {
  position: relative;
  font-size: 2em;
  padding: 0.2em 0.2em 0 0;
}
.user-menu-open {
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100px;
  top: 58px;
  right: 20px;
  border-radius: 10px;
  color: white;
  padding: 0.6em;
  background: rgba(0,0,0,0.75);
  z-index: 10;
}
.user-menu-open hr {
  width: 100%;
}
.user-menu-open:after{
  position: absolute;
  border-bottom: 12px solid rgba(0,0,0,0.75);
  border-left: 10px solid transparent;   
  border-right: 10px solid transparent;  
  top: -12px;
  right: 8px;
  content: "";
}
.mypage, .signout-button {
  font-weight: bold; 
  color: white;
  font-size: 1em;
  cursor: pointer;
}
.my-roomlist {
  font-weight: bold; 
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  margin: auto 30px auto 0;
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