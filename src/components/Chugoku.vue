<template>
  <div id="room-chugoku">
    <h1 class="roomlist-title">Chugoku Region</h1>

    <p class="pref-list"><router-link to="/okayama" class="pref-link">Okayama</router-link></p>
    <div v-for="(room, id) in okayamaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/hiroshima" class="pref-link">Kanagawa</router-link></p>
    <div v-for="(room, id) in hiroshimaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/shimane" class="pref-link">Chiba</router-link></p>
    <div v-for="(room, id) in shimaneRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/tottori" class="pref-link">Saitama</router-link></p>
    <div v-for="(room, id) in tottoriRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/yamaguchi" class="pref-link">Ibaraki</router-link></p>
    <div v-for="(room, id) in yamaguchiRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>

  </div>
</template>

<script>
  import firebase from '../firebase'

  export default {
    name: "Room",
    data: function () {
      return {
        okayamaRooms: {},
        hiroshimaRooms: {},
        shimaneRooms: {},
        tottoriRooms: {},
        yamaguchiRooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms");

      this.roomsRef.where("prefecture", "==", "Okayama").onSnapshot((querySnapshot) => {
        const obj1 = {};
        querySnapshot.forEach((doc) => {
          obj1[doc.id] = doc.data();
        });
        this.okayamaRooms = obj1;
      });
      this.roomsRef.where("prefecture", "==", "Hiroshima").onSnapshot((querySnapshot) => {
        const obj2 = {};
        querySnapshot.forEach((doc) => {
          obj2[doc.id] = doc.data();
        });
        this.hiroshimaRooms = obj2;
      });
      this.roomsRef.where("prefecture", "==", "Shimane").onSnapshot((querySnapshot) => {
        const obj3 = {};
        querySnapshot.forEach((doc) => {
          obj3[doc.id] = doc.data();
        });
        this.shimaneRooms = obj3;
      });
      this.roomsRef.where("prefecture", "==", "Tottori").onSnapshot((querySnapshot) => {
        const obj4 = {};
        querySnapshot.forEach((doc) => {
          obj4[doc.id] = doc.data();
        });
        this.tottoriRooms = obj4;
      });
      this.roomsRef.where("prefecture", "==", "Yamaguchi").onSnapshot((querySnapshot) => {
        const obj5 = {};
        querySnapshot.forEach((doc) => {
          obj5[doc.id] = doc.data();
        });
        this.yamaguchiRooms = obj5;
      });

    },
  };
</script>