<template>
  <div id="prefecture">
    <div class="pref-aichi">
      <h1>Aichi</h1>

      <router-link
        :to="{ name: 'CreateRoom', params: { value: 'Aichi' } }"
        class="pref-create">
        Create your chatroom in Aichi page
      </router-link>

      <div v-for="(room, id) in rooms" :key="id" class="rooms">
        <router-link
          :to="{ name: 'Chat', params: { id: id } }"
          class="pref-roomnames"
          >{{ room.roomname }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";

export default {
  data: function () {
    return {
      rooms: {},
      roomsRef: null,
      newRoom: null,
    };
  },
  created() {
    this.roomsRef = firebase
      .firestore()
      .collection("rooms")
      .where("prefecture", "==", "Aichi");
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