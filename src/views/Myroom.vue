<template>
  <div id="my-room">
    <h1>Your RoomList</h1>
    <div
      v-for="(room, id) in rooms"
      :key="id"
      class="rooms"
    >
      <router-link :to="{ name: 'Chat', params: { id: id } }" class="my-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();

import { mapGetters } from "vuex";

export default {
  name: "Myroom",
  data: function() {
    return {
      rooms: [],
      roomsRef: false,
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
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1em;
  text-align: center;
}
</style>
