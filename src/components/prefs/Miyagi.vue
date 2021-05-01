<template>
  <div id="prefecture">
    <div class="pref-miyagi">
      <h1>Miyagi</h1>
      <router-link :to="{name: 'CreateRoom', params: { value: 'Miyagi' }}" class="pref-create">Create your chatroom in Miyagi page</router-link>
      <div v-for="(room, id) in rooms" :key="id" class="rooms">
        <router-link :to="{ name: 'Chat', params: { id: id }}" class="pref-roomnames">{{ room.roomname }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from '@/firebase'

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
      this.roomsRef = firebase.firestore().collection("rooms").where("prefecture", "==", "Miyagi");
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