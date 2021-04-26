<template>
  <div id="room">
    <div v-for="(room, id) in rooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
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
      this.roomsRef = firebase.firestore().collection("rooms");
      this.roomsRef.onSnapshot((querySnapshot) => {
        const obj = {};
        querySnapshot.forEach((doc) => {
          obj[doc.id] = doc.data();
        });
        this.rooms = obj;
        console.log(this.rooms);
      });
    },
  };
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.rooms {
  text-align: center;
}
.room-roomnames {
  color: black;
  width: 80%;
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
  width: 400px;
}
}
@media (min-width: 1025px) {
.room-roomnames {
  width: 400px;
}
}
</style>
