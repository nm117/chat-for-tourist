<template>
  <div id="prefecture">
    <div id="room-chiba">
      <h1>Chiba</h1>
      <router-link :to="{name: 'CreateRoom', params: { value: 'Chiba' }}" class="pref-create">Create your chatroom in Chiba page</router-link>
      <div v-for="(room, id) in rooms" :key="id" class="rooms">
        <router-link :to="{ name: 'Chat', params: { id: id }}" class="pref-roomnames">{{ room.roomname }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from '../firebase'

  export default {
    name: "Room",
    data: function () {
      return {
        rooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms").where("prefecture", "==", "Chiba");
      this.roomsRef.onSnapshot((querySnapshot) => {
        const obj = {};
        querySnapshot.forEach((doc) => {
          obj[doc.id] = doc.data();
        });
        this.rooms = obj;
      });
    },
  };
</script>

<style scoped>
* {
  box-sizing: border-box;
  text-align: center;
}
.room-roomnames {
  color: black;
  width: 400px;
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
</style>
