<template>
  <div id="create-room">
    <h2>What about do you want to talk?</h2>
      <div class="newroom">
        <h3>{{ $route.params.value }} pref. page</h3>
        <input v-model="newRoomName" placeholder="ROOMNAME here" class="input-roomname" /><br />
        <button @click="createRoom" class="createroom-button">CREATE NEW ROOM</button>
      </div>
  </div>
</template>

<script>
import firebase from "../firebase";

export default {
  data: function () {
    return {
      roomsRef: null,
      newRoomName: null,
      roomId: null,
    };
  },
  created() {
    this.roomsRef = firebase.firestore().collection("rooms");
    this.roomsRef.onSnapshot((querySnapshot) => {
      const obj = {};
      querySnapshot.forEach((doc) => {
        obj[doc.id] = doc.data();
      });
      this.rooms = obj;
    });
  },
  methods: {
    async createRoom() {
      if (this.newRoomName) {
        await this.roomsRef
          .add({
            prefecture: this.$route.params.value,
            roomname: this.newRoomName,
            created: new Date(),
          })
          .then((docRef) => {
            this.roomId = docRef.id;
          });
        console.log(this.roomId);
        this.$router.push("/chat/" + this.roomId);
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
  box-shadow:15px 15px 0px rgba(0,0,0,.1);
}
a {
  padding: 0 0.3em;
  transition: all 0.1s;
}
a:hover {
  background:rgba(244,167,185,0.2);
  filter: drop-shadow(0 0 10px #F4A7B9);
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
  border: 2px solid #66BAB7;
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
  background: #FBDCCE;
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