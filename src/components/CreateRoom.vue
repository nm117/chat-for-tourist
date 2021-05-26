<template>
  <div id="create-room">
    <h2>What about do you want to talk?</h2>
    <div class="newroom">
      <h3>{{ $route.params.value }} pref. page</h3>
      <input
        v-model="newRoomName"
        placeholder="ROOMNAME here"
        class="input-roomname"
      />

      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      <button @click="createRoom" class="createroom-button">CREATE NEW ROOM</button>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      newRoomName: null,
      roomId: null,
      errorMessage: "",
    };
  },
  computed: {
    ...mapGetters([ "isSignIn", "getError", "getUser", "getMessage" ]),
  },
  methods: {
    async createRoom() {
      if (this.newRoomName) {
        await db.collection("rooms")
          .add({
            prefecture: this.$route.params.value,
            roomname: this.newRoomName,
            created: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then((docRef) => {
            this.roomId = docRef.id;
            db.collection("rooms").doc(this.roomId).update({
              joinUsers: firebase.firestore.FieldValue.arrayUnion(this.getUser._id),
              updated: firebase.firestore.FieldValue.serverTimestamp(),
          })
            this.$router.push("/chat/" + this.roomId);
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.log(error.code);
            console.log(error.message);
          });
        console.log(this.roomId);
        this.newRoom = "";
      }
    },
  },
};
</script>

<style scoped>
#create-room {
  height: auto;
  text-align: center;
}
.newroom {
  width: 90%;
  margin: 5% auto;
  border: solid 1.5px;
  border-radius: 10px;
  padding: 50px 20px;
  margin: 50px auto;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
a {
  padding: 0 0.3em;
  transition: all 0.1s;
}
a:hover {
  background: rgba(244, 167, 185, 0.2);
  filter: drop-shadow(0 0 10px #f4a7b9);
}
h2 {
  font-size: 1.3em;
}
h3 {
  text-align: left;
  margin-left: 1em;
}
.input-roomname {
  width: 85%;
  margin-bottom: 0.8em;
  padding: 0.8em 0.5em;
  border: 2px solid #66bab7;
  border-radius: 5px;
  font-size: 1em;
}
.createroom-button {
  font-weight: bold;
  font-size: 1em;
  width: 85%;
  padding: 0.8em 0.5em;
  margin-top: 2em;
  border-radius: 5px;
  border: none;
  background: #fbdcce;
  cursor: pointer;
}
@media (min-width: 600px) {
  .newroom {
    width: 450px;
  }
  h2 {
    font-size: 1.5em;
  }
}
@media (min-width: 1025px) {
  .newroom {
    width: 450px;
  }
  #create-room {
    height: 100vh;
    text-align: center;
  }
  h2 {
    font-size: 1.5em;
  }
}
</style>