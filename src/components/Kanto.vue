<template>
  <div id="room-kanto">
    <h1>Kanto Region</h1>

    <p><router-link to="/tokyo" class="pref-link">▶︎ Tokyo</router-link></p>
    <div v-for="(room, id) in tokyoRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/kanagawa" class="pref-link">▶︎ Kanagawa</router-link></p>
    <div v-for="(room, id) in kanagawaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/chiba" class="pref-link">▶︎ Chiba</router-link></p>
    <div v-for="(room, id) in chibaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/saitama" class="pref-link">▶︎ Saitama</router-link></p>
    <div v-for="(room, id) in saitamaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/ibaraki" class="pref-link">▶︎ Ibaraki</router-link></p>
    <div v-for="(room, id) in ibarakiRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/gunma" class="pref-link">▶︎ Gunma</router-link></p>
    <div v-for="(room, id) in gunmaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">{{ room.roomname }}</router-link>
    </div>
    <p><router-link to="/tochigi" class="pref-link">▶︎ Tochigi</router-link></p>
    <div v-for="(room, id) in tochigiRooms" :key="id" class="rooms">
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
        tokyoRooms: {},
        kanagawaRooms: {},
        chibaRooms: {},
        saitamaRooms: {},
        ibarakiRooms: {},
        gunmaRooms: {},
        tochigiRooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms");

      this.roomsRef.where("prefecture", "==", "Tokyo").onSnapshot((querySnapshot) => {
        const obj1 = {};
        querySnapshot.forEach((doc) => {
          obj1[doc.id] = doc.data();
        });
        this.tokyoRooms = obj1;
      });
      this.roomsRef.where("prefecture", "==", "Kanagawa").onSnapshot((querySnapshot) => {
        const obj2 = {};
        querySnapshot.forEach((doc) => {
          obj2[doc.id] = doc.data();
        });
        this.kanagawaRooms = obj2;
      });
      this.roomsRef.where("prefecture", "==", "Chiba").onSnapshot((querySnapshot) => {
        const obj3 = {};
        querySnapshot.forEach((doc) => {
          obj3[doc.id] = doc.data();
        });
        this.chibaRooms = obj3;
      });
      this.roomsRef.where("prefecture", "==", "Saitama").onSnapshot((querySnapshot) => {
        const obj4 = {};
        querySnapshot.forEach((doc) => {
          obj4[doc.id] = doc.data();
        });
        this.saitamaRooms = obj4;
      });
      this.roomsRef.where("prefecture", "==", "Ibaraki").onSnapshot((querySnapshot) => {
        const obj5 = {};
        querySnapshot.forEach((doc) => {
          obj5[doc.id] = doc.data();
        });
        this.ibarakiRooms = obj5;
      });
      this.roomsRef.where("prefecture", "==", "Gunma").onSnapshot((querySnapshot) => {
        const obj6 = {};
        querySnapshot.forEach((doc) => {
          obj6[doc.id] = doc.data();
        });
        this.gunmaRooms = obj6;
      });
      this.roomsRef.where("prefecture", "==", "Tochigi").onSnapshot((querySnapshot) => {
        const obj7 = {};
        querySnapshot.forEach((doc) => {
          obj7[doc.id] = doc.data();
        });
        this.tochigiRooms = obj7;
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