<template>
  <div id="prefecture">
    <div class="pref-tokushima">
      <h1>Tokushima</h1>
      <router-link :to="{name: 'CreateRoom', params: { value: 'Tokushima' }}" class="pref-create">Create your chatroom in Tokushima page</router-link>
        <div v-for="(room, id) in rooms" :key="id" class="rooms">
          <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
            <div class="room-roomicon"><img :src="room.roomIcon" /></div>
            {{ room.roomname }}
          </router-link>
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
      this.roomsRef = firebase.firestore().collection("rooms").where("prefecture", "==", "Tokushima");
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