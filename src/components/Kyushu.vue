<template>
  <div id="room-kyushu">
    <h1>Kyushu Region</h1>

    <p><router-link to="/fukuoka" class="pref-link">▶︎ Fukuoka</router-link></p>
    <div v-for="(room, id) in fukuokaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/kumamoto" class="pref-link">▶︎ Kumamoto</router-link></p>
    <div v-for="(room, id) in kumamotoRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/oita" class="pref-link">▶︎ Oita</router-link></p>
    <div v-for="(room, id) in oitaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/saga" class="pref-link">▶︎ Saga</router-link></p>
    <div v-for="(room, id) in sagaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/nagasaki" class="pref-link">▶︎ Nagasaki</router-link></p>
    <div v-for="(room, id) in nagasakiRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/miyazaki" class="pref-link">▶︎ Miyazaki</router-link></p>
    <div v-for="(room, id) in miyazakiRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/kagoshima" class="pref-link">▶︎ Kagoshima</router-link></p>
    <div v-for="(room, id) in kagoshimaRooms" :key="id" class="rooms">
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
        fukuokaRooms: {},
        kumamotoRooms: {},
        oitaRooms: {},
        sagaRooms: {},
        nagasakiRooms: {},
        miyazakiRooms: {},
        kagoshimaRooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms");

      this.roomsRef.where("prefecture", "==", "Fukuoka").onSnapshot((querySnapshot) => {
        const obj1 = {};
        querySnapshot.forEach((doc) => {
          obj1[doc.id] = doc.data();
        });
        this.fukuokaRooms = obj1;
      });
      this.roomsRef.where("prefecture", "==", "Kumamoto").onSnapshot((querySnapshot) => {
        const obj2 = {};
        querySnapshot.forEach((doc) => {
          obj2[doc.id] = doc.data();
        });
        this.kumamotoRooms = obj2;
      });
      this.roomsRef.where("prefecture", "==", "Oita").onSnapshot((querySnapshot) => {
        const obj3 = {};
        querySnapshot.forEach((doc) => {
          obj3[doc.id] = doc.data();
        });
        this.oitaRooms = obj3;
      });
      this.roomsRef.where("prefecture", "==", "Saga").onSnapshot((querySnapshot) => {
        const obj4 = {};
        querySnapshot.forEach((doc) => {
          obj4[doc.id] = doc.data();
        });
        this.sagaRooms = obj4;
      });
      this.roomsRef.where("prefecture", "==", "Nagasaki").onSnapshot((querySnapshot) => {
        const obj5 = {};
        querySnapshot.forEach((doc) => {
          obj5[doc.id] = doc.data();
        });
        this.nagasakiRooms = obj5;
      });
      this.roomsRef.where("prefecture", "==", "Miyazaki").onSnapshot((querySnapshot) => {
        const obj6 = {};
        querySnapshot.forEach((doc) => {
          obj6[doc.id] = doc.data();
        });
        this.miyazakiRooms = obj6;
      });
      this.roomsRef.where("prefecture", "==", "Kagoshima").onSnapshot((querySnapshot) => {
        const obj7 = {};
        querySnapshot.forEach((doc) => {
          obj7[doc.id] = doc.data();
        });
        this.kagoshimaRooms = obj7;
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