<template>
  <div class="room-list-own">
    <p>Your RoomList</p>
    <div
      v-for="(room, id) in rooms"
      :key="id"
      class="rooms"
      :class="{ 'rooms-clicked': activeItem === id }"
      @click="onActive(id)"
    >
      <router-link :to="{ name: 'Chat', params: { id: id } }" class="roomname-link">
        <div class="roomicon"><img :src="room.roomIcon" /></div>
        <span class="roomname">{{ room.roomname }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();

import { mapGetters } from "vuex";

export default {
  name: "RoomList",
  data: function() {
    return {
      rooms: [],
      roomsRef: false,
      activeItem: null,
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  mounted() {
    this.loadRoom();
  },
  methods: {
    loadRoom() {
      this.roomsRef = db.collection("rooms").where("joinIds", "array-contains", this.getUser._id);
      this.roomsRef.orderBy("updated", "desc").onSnapshot((querySnapshot) => {
        let obj = {};
        querySnapshot.docs.map((doc) => {
          obj[doc.id] = doc.data();
        });
        this.rooms = obj;
      });
    },
    onActive(id) {
      if (this.activeItem === id) {
        this.activeItem = null;
      } else {
        this.activeItem = id;
      }
    },
  },
};
</script>

<style scoped>
.room-list-own {
  border-right: solid 1px #e9b5b4;
  width: 100%;
  background: #FEFEFE;
  height: 100%;
}
.room-list-own p {
  padding: 0.6em;
  font-weight: bold;
  text-align: center;
}
.rooms {
  color: black;
  width: 100%;
  text-decoration: none;
}
.rooms-clicked {
  color: black;
  width: 100%;
  text-decoration: none;
  display: flex;
  /* justify-content: space-between; */
  background: rgba(0, 0, 0, 0.2);
}
.rooms-own:hover {
  background: rgba(0, 0, 0, 0.1);
}
.roomname-link {
  display: block;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.roomicon img {
  width: 40px;
  height: 40px;
  margin: 0 0.5em;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
}
e {
  display: block;
  padding: 0.6em;
  width: 90%;
}
</style>
