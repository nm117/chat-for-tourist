<template>
  <div id="prefecture">
    <div class="pref-yamaguchi">
      <h1>Yamaguchi</h1>
      <router-link :to="{name: 'CreateRoom', params: { value: 'Yamaguchi' }}" class="pref-create">Create your chatroom in Yamaguchi page</router-link>
      
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
      this.roomsRef = firebase.firestore().collection("rooms").where("prefecture", "==", "Yamaguchi");
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