<template>
  <div id="my-room-list">
    <div class="my-rooms-list">
    <p>Your RoomList</p>
      <div v-for="(room, id) in rooms" :key="id" class="my-rooms">
        <div class="room">
          <router-link :to="{ name: 'Chat', params: { id: id }}" class="my-roomnames">
            <!-- photo -->
            <span class="my-roomname">{{ room.roomname }}</span>
            <button @click="deleteRoom(id)" class="room-delete">x</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();

import { mapGetters } from "vuex";

export default {
  name: "RoomList",
  data: function () {
    return {
      rooms: [],
      roomsRef: false,
    };
  },
  computed: {
    ...mapGetters([ "getUser" ]),
  },
  mounted() {
    this.loadRoom();
  },
  methods: {
    loadRoom() {
      this.roomsRef = db.collection("rooms").where("joinUsers", "array-contains", this.getUser._id);
      this.roomsRef.orderBy("created", "asc").onSnapshot((querySnapshot) => {
        let obj = {}
        querySnapshot.docs.map((doc) => {
          obj[doc.id] = doc.data();
        });
        this.rooms = obj;
        console.log(this.rooms)
      });
    },
    // deleteRoom(id) {
    //   this.chatsRef.doc(id).delete()
    // },
  }
}
</script>

<style scoped>
.my-rooms-list {
  border: solid 1px #E9B5B4;
  width: 100%;
  height: 100vh;
  background: #FFF;
}
.my-rooms-list p {
  padding: 0.6em;
  background: #E9B5B4;
}
.my-rooms {
  color: black;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  padding: 0.6em;
  /* border: solid 1px #E9B5B4; */
}
/* フレックスから */
.room {
  display: flex;
  justify-content: space-between;
}
.room-delete {
  margin: 0 auto;
}


</style>