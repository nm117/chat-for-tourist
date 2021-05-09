<template>
  <div id="mypage">
    <div class="mypage-pannel">
      <h2>Your Account</h2>

      <div class="profile">
        <p>profile photo</p>
        <span v-if="!this.editing" @click="editUsername" class="prof-name">
          {{ this.username }}
        </span>
        <input v-else type="text" class="prof-name-editing" v-model="profName">
      </div>
      
      <div class="bio">
      <p>Bio</p>
      </div>

<!-- v-ifでクラスわけする！！ -->
      <button @click="saveProfile" class="save-profile">Save</button>

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
      profName: "",
      editing: false,
    };
  },
  computed: {
    ...mapGetters([ "getUser" ]),
  },
  created () {
    this.usersRef = db.collection("users").doc(this.getUser._id);
    this.usersRef.get().then((doc) => {
      this.username = doc.data().username
    }).catch((error) => {
    console.log("Error getting document:", error);
    });
  },
  methods: {
    editUsername() {
      this.editing = true;
      this.profName = this.username;
    },
    saveProfile() {
      if (this.profName) {
        this.usersRef.doc(this.getUser._id).update({
          username: this.profName,
        })
        this.usersRef.doc(this.getUser._id).set({
          updated: new Date(),
        })
        this.$store.dispatch('updateUser', {
          _id: this.getUser._id,
          email: this.getUser.email,
          username: this.profName,
        });
      }
      this.usernameEditing = false;
    }
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
  border: solid 3px #66BAB7;
  border-radius: 10px;
  padding: 50px 20px;
  margin: 50px auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
.profile {
  display: flex;
  /* justify-content: space-between; */
  padding: 0.8em 0.5em;
}
@media (min-width: 600px) {
.mypage-pannel {
  width: 450px;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
@media (min-width: 1025px) {
.mypage-pannel {
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
h2 {
  text-align: center;
  margin-bottom: 1em;
}
.prof-name {
  width: 70%;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin-left: 2em;
}
.prof-name-editing {
  width: 70%;
  color: black;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin-left: 2em;
}
.bio {
  width: 100%;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin: 0.8em auto;
}
.save-profile {
  width: 100%;
  padding: 0.8em 0.5em;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  border-radius: 5px;
  border: none;
  background: #66BAB7;
  cursor: pointer;
  color: #fff;
}
</style>