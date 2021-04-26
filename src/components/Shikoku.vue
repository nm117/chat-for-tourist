<template>
  <div id="room-shikoku">
    <h1>Shikoku Region</h1><br>

    <p><router-link to="/kagawa" class="pref-link">▶︎ Kagawa</router-link></p>
    <div v-for="(room, id) in kagawaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/ehime" class="pref-link">▶︎ Ehime</router-link></p>
    <div v-for="(room, id) in ehimeRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/tokushima" class="pref-link">▶︎ Tokushima</router-link></p>
    <div v-for="(room, id) in tokushimaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/kochi" class="pref-link">▶︎ Kochi</router-link></p>
    <div v-for="(room, id) in kochiRooms" :key="id" class="rooms">
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
        kagawaRooms: {},
        ehimeRooms: {},
        tokushimaRooms: {},
        kochiRooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms");

      this.roomsRef.where("prefecture", "==", "Kagawa").onSnapshot((querySnapshot) => {
        const obj1 = {};
        querySnapshot.forEach((doc) => {
          obj1[doc.id] = doc.data();
        });
        this.kagawaRooms = obj1;
      });
      this.roomsRef.where("prefecture", "==", "Ehime").onSnapshot((querySnapshot) => {
        const obj2 = {};
        querySnapshot.forEach((doc) => {
          obj2[doc.id] = doc.data();
        });
        this.ehimeRooms = obj2;
      });
      this.roomsRef.where("prefecture", "==", "Tokushima").onSnapshot((querySnapshot) => {
        const obj3 = {};
        querySnapshot.forEach((doc) => {
          obj3[doc.id] = doc.data();
        });
        this.tokushimaRooms = obj3;
      });
      this.roomsRef.where("prefecture", "==", "Kochi").onSnapshot((querySnapshot) => {
        const obj4 = {};
        querySnapshot.forEach((doc) => {
          obj4[doc.id] = doc.data();
        });
        this.kochiRooms = obj4;
      });
    },
  };
</script>

<style scoped>
* :not(p) {
  box-sizing: border-box;
  text-align: center;
}
p {
  font-size: 1.2em;
  margin: 1% auto 1% 10%;
}
</style>