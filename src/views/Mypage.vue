<template>
  <div id="mypage">
    <div class="mypage-pannel">
      <h2>Your Account</h2>
      <div class="profile">
        <span class="profile-photo">
          <input type="file" name="prof-photo" class="prof-photo">
        </span>
        <span v-if="!this.usernameEditing" @click="editUsername" class="prof-name">
          <p>Name</p>
          {{ this.username }}
        </span>
        <span v-else @click="setNameBorderColor('blue', '2px')" :style="{'border-color': nameBorderColor, 'border-width': nameBorderWidth}" class="prof-name-editing">
          <p>Name</p>
          <input type="text" @blur="setNameBorderColor('gray', '1px')" v-model="profUsername" v-focus >
        </span>
      </div>
      
      <div class="bio">
          <div v-if="!this.bioEditing" @click="editBio" class="prof-bio">
            <p>Bio</p>
            {{ this.bio }}
          </div>
          <div v-else @click="setBioBorderColor('blue', '2px')" :style="{'border-color': bioBorderColor, 'border-width': bioBorderWidth}" class="prof-bio-editing">
            <p>Bio</p>
            <textarea @blur="setBioBorderColor('gray', '1px')" v-model="profBio" v-focus ></textarea>
          </div>
      </div>
      <button @click="saveProfile" class="save-profile">Save</button>
    </div>

    <div class="setting-pannel">
      <p>Email</p>
        <div class="email-setting">
          {{ this.getUser.email }}
          <router-link to="/setting/email">
            <p>Change</p>
          </router-link>
        </div>
      <p>Password</p>
        <div class="password-setting">
          <span>••••••••</span>
          <router-link to="/setting/password">
            <p>Change</p>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
import { mapGetters } from "vuex";

const db = firebase.firestore();

export default {
  name: "Mypage",
  data: function () {
    return {
      usersRef: null,
      email: "",
      password: "",
      username: "",
      bio: "",
      profUsername: "",
      profBio: "",
      usernameEditing: false,
      bioEditing: false,
      nameBorderColor: 'blue',
      bioBorderColor: 'blue',
      nameBorderWidth: '2px',
      bioBorderWidth: '2px',
    };
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
  },
  created() {
    this.loadProfile();
  },
  methods: {
    loadProfile () {
      this.usersRef = db.collection("users").doc(this.getUser._id);
      this.usersRef.get().then((doc) => {
        this.username = doc.data().username;
        this.bio = doc.data().bio;
      })
    },
    editUsername() {
      this.usernameEditing = true;
      this.profUsername = this.username;
    },
    editBio() {
      this.bioEditing = true;
      this.profBio = this.bio;
    },
    saveProfile() {
      if (this.profUsername && this.profBio) {
        this.usersRef.update({
          username: this.profUsername,
        });
        this.usersRef.set({
          bio: this.profBio 
          }, { merge: true }
        );
        this.uploadProfile();
        this.usernameEditing = false;
        this.bioEditing = false;
      }
      else if (this.profUsername) {
        this.usersRef.update({
          username: this.profUsername,
        });
        this.uploadProfile();
        this.usernameEditing = false;
      }
      else if (this.profBio) {
        this.usersRef.set({
          bio: this.profBio 
          }, { merge: true }
        );
        this.uploadProfile();
        this.bioEditing = false;
      }
      else {
        return
      }
    },
    uploadProfile() {
      this.usersRef.set({
        updated: new Date()
        }, { merge: true }
      );
      this.$store.dispatch('updateUser', {
        _id: this.getUser._id,
        email: this.getUser.email,
        username: this.profUsername,
      });
      this.loadProfile();
    },
    setNameBorderColor(color, width) {
      this.nameBorderColor = color
      this.nameBorderWidth = width
    },
    setBioBorderColor(color, width) {
      this.bioBorderColor = color
      this.bioBorderWidth = width
    },
  },
}
</script>

<style scoped>
#mypage {
  height: 100vh;
}
/* * :not(h2):not(.error-message):not(li):not(ul) {
  border: 1px solid #eee;
  font-size: 1em;
  border-radius: 5px;
} */
.mypage-pannel {
  width: 90%;
  background-color: #fff;
  border: solid 3px #E9B5B4;
  border-radius: 10px;
  padding: 2em 1.5em;
  margin: 0 auto 3em auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
.setting-pannel {
  width: 90%;
  background-color: #fff;
  border: solid 3px #66BAB7;
  border-radius: 10px;
  padding: 2.5em 1.5em 1em 1.5em;
  margin: 3em auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
.profile {
  display: flex;
  justify-content: space-between;
  margin: 1.5em auto;
}
.email-setting, .password-setting {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 1.5em auto;
}
@media (min-width: 600px) {
.mypage-pannel, .setting-pannel {
  width: 450px;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
@media (min-width: 1025px) {
.mypage-pannel, .setting-pannel {
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
h2 {
  text-align: center;
  margin-bottom: 1.5em;
}
.prof-name {
  width: 280px;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin-left: 2em;
}
.prof-name-editing {
  width: 280px;
  color: black;
  border-style: solid;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin-left: 2em;
}
.prof-name-editing input{
  border: none;
  outline: none;
}
p:not(.profile-photo) {
  font-size: 0.8em;
}
.prof-bio {
  width: 100%;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin: 1.5em auto;
}
.prof-bio-editing {
  width: 100%;
  border-style: solid;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin: 1.5em auto;
}
.prof-bio-editing textarea {
  border: none;
  outline: none;
  width: 100%;
  height: 20%;
}
.save-profile {
  width: 50%;
  display: block;
  padding: 0.8em 0.5em;
  margin: 0 0 0 auto;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  border-radius: 5px;
  border: none;
  background: #E9B5B4;
  cursor: pointer;
  color: #fff;
}
</style>