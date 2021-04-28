<template>
  <div id="room-tohoku">
    <h1>Tohoku Region</h1><br>

    <p><router-link to="/aomori" class="pref-link">▶ Aomori</router-link></p>
    <div v-for="(room, id) in aomoriRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/akita" class="pref-link">▶︎ Akita</router-link></p>
    <div v-for="(room, id) in akitaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/iwate" class="pref-link">▶︎ Iwate</router-link></p>
    <div v-for="(room, id) in iwateRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/yamagata" class="pref-link">▶︎ Yamagata</router-link></p>
    <div v-for="(room, id) in yamagataRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/miyagi" class="pref-link">▶︎ Miyagi</router-link></p>
    <div v-for="(room, id) in miyagiRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/fukushima" class="pref-link">▶︎ Fukushima</router-link></p>
    <div v-for="(room, id) in fukushimaRooms" :key="id" class="rooms">
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
        aomoriRooms: {},
        akitaRooms: {},
        iwateRooms: {},
        yamagataRooms: {},
        miyagiRooms: {},
        fukushimaRooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms").where("prefecture", "==", "Aomori", "Akita", "Iwate", "Yamagata", "Miyagi", "Fukushima");

      this.roomsRef.where("prefecture", "==", "Aomori").onSnapshot((querySnapshot) => {
        const obj1 = {};
        querySnapshot.forEach((doc) => {
          obj1[doc.id] = doc.data();
        });
        this.aomoriRooms = obj1;
      });
      this.roomsRef.where("prefecture", "==", "Akita").onSnapshot((querySnapshot) => {
        const obj2 = {};
        querySnapshot.forEach((doc) => {
          obj2[doc.id] = doc.data();
        });
        this.akitaRooms = obj2;
      });
      this.roomsRef.where("prefecture", "==", "Iwate").onSnapshot((querySnapshot) => {
        const obj3 = {};
        querySnapshot.forEach((doc) => {
          obj3[doc.id] = doc.data();
        });
        this.iwateRooms = obj3;
      });
      this.roomsRef.where("prefecture", "==", "Yamagata").onSnapshot((querySnapshot) => {
        const obj4 = {};
        querySnapshot.forEach((doc) => {
          obj4[doc.id] = doc.data();
        });
        this.yamagataRooms = obj4;
      });
      this.roomsRef.where("prefecture", "==", "Miyagi").onSnapshot((querySnapshot) => {
        const obj5 = {};
        querySnapshot.forEach((doc) => {
          obj5[doc.id] = doc.data();
        });
        this.miyagiRooms = obj5;
      });
      this.roomsRef.where("prefecture", "==", "Fukushima").onSnapshot((querySnapshot) => {
        const obj6 = {};
        querySnapshot.forEach((doc) => {
          obj6[doc.id] = doc.data();
        });
        this.fukushimaRooms = obj6;
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
