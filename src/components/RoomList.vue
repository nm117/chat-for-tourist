<template>
  <div class="room-list-own">
    <p>Your RoomList</p>
    <div
      v-for="(room, id) in rooms"
      :key="id"
      class="rooms-own"
      :class="{ 'rooms-clicked-own': activeItem === id }"
      @click="onActive(id)"
    >
      <router-link :to="{ name: 'Chat', params: { id: id } }" class="roomname-link-own">
        <!-- photo -->
        <span class="roomname-own">{{ room.roomname }}</span>
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
      this.roomsRef = db.collection("rooms").where("joinUsers", "array-contains", this.getUser._id);
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
.rooms-own {
  color: black;
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}
.rooms-clicked-own {
  color: black;
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.2);
}
.rooms-own:hover {
  background: rgba(0, 0, 0, 0.1);
}
.roomname-link-own {
  display: block;
  width: 85%;
  height: 100%;
}
.roomname-own {
  display: block;
  padding: 0.6em;
  width: 90%;
}
</style>
