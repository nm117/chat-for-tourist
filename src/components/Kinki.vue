<template>
  <div id="room-kinki">
    <h1 class="roomlist-title">Kinki Region</h1>

    <p class="pref-list"><router-link to="/osaka" class="pref-link">Osaka</router-link></p>
    <div v-for="(room, id) in osakaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/kyoto" class="pref-link">Kyoto</router-link></p>
    <div v-for="(room, id) in kyotoRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/hyogo" class="pref-link">Hyogo</router-link></p>
    <div v-for="(room, id) in hyogoRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/nara" class="pref-link">Nara</router-link></p>
    <div v-for="(room, id) in naraRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/shiga" class="pref-link">Shiga</router-link></p>
    <div v-for="(room, id) in shigaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/wakayama" class="pref-link">Wakayama</router-link></p>
    <div v-for="(room, id) in wakayamaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/mie" class="pref-link">Mie</router-link></p>
    <div v-for="(room, id) in mieRooms" :key="id" class="rooms">
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
        osakaRooms: {},
        kyotoRooms: {},
        hyogoRooms: {},
        naraRooms: {},
        shigaRooms: {},
        wakayamaRooms: {},
        mieRooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms").where("prefecture", "==", "Osaka", "Hyogo", "Nara", "Kyoto", "Shiga", "Wakayama", "Mie");

      this.roomsRef.where("prefecture", "==", "Osaka").onSnapshot((querySnapshot) => {
        const obj1 = {};
        querySnapshot.forEach((doc) => {
          obj1[doc.id] = doc.data();
        });
        this.osakaRooms = obj1;
      });
      this.roomsRef.where("prefecture", "==", "Kyoto").onSnapshot((querySnapshot) => {
        const obj2 = {};
        querySnapshot.forEach((doc) => {
          obj2[doc.id] = doc.data();
        });
        this.kyotoRooms = obj2;
      });
      this.roomsRef.where("prefecture", "==", "Hyogo").onSnapshot((querySnapshot) => {
        const obj3 = {};
        querySnapshot.forEach((doc) => {
          obj3[doc.id] = doc.data();
        });
        this.hyogoRooms = obj3;
      });
      this.roomsRef.where("prefecture", "==", "Nara").onSnapshot((querySnapshot) => {
        const obj4 = {};
        querySnapshot.forEach((doc) => {
          obj4[doc.id] = doc.data();
        });
        this.naraRooms = obj4;
      });
      this.roomsRef.where("prefecture", "==", "Shiga").onSnapshot((querySnapshot) => {
        const obj5 = {};
        querySnapshot.forEach((doc) => {
          obj5[doc.id] = doc.data();
        });
        this.shigaRooms = obj5;
      });
      this.roomsRef.where("prefecture", "==", "Wakayama").onSnapshot((querySnapshot) => {
        const obj6 = {};
        querySnapshot.forEach((doc) => {
          obj6[doc.id] = doc.data();
        });
        this.wakayamaRooms = obj6;
      });
      this.roomsRef.where("prefecture", "==", "Mie").onSnapshot((querySnapshot) => {
        const obj7 = {};
        querySnapshot.forEach((doc) => {
          obj7[doc.id] = doc.data();
        });
        this.mieRooms = obj7;
      });

    },
  };
</script>