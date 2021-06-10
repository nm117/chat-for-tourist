<template>
  <div id="room-chubu">
    <h1 class="roomlist-title">Chubu Region</h1>

    <p class="pref-list"><router-link to="/niigata" class="pref-link">Niigata</router-link></p>
    <div v-for="(room, id) in niigataRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/nagano" class="pref-link">Nagano</router-link></p>
    <div v-for="(room, id) in naganoRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/yamanashi" class="pref-link">Yamanashi</router-link></p>
    <div v-for="(room, id) in yamanashiRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/shizuoka" class="pref-link">Shizuoka</router-link></p>
    <div v-for="(room, id) in shizuokaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/toyama" class="pref-link">Toyama</router-link></p>
    <div v-for="(room, id) in toyamaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/ishikawa" class="pref-link">Ishikawa</router-link></p>
    <div v-for="(room, id) in ishikawaRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/fukui" class="pref-link">Fukui</router-link></p>
    <div v-for="(room, id) in fukuiRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/gifu" class="pref-link">Gifu</router-link></p>
    <div v-for="(room, id) in gifuRooms" :key="id" class="rooms">
      <router-link :to="{ name: 'Chat', params: { id: id }}" class="room-roomnames">
        <div class="room-roomicon"><img :src="room.roomIcon" /></div>
        {{ room.roomname }}
      </router-link>
    </div>
    <p class="pref-list"><router-link to="/aichi" class="pref-link">Aichi</router-link></p>
    <div v-for="(room, id) in aichiRooms" :key="id" class="rooms">
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
        niigataRooms: {},
        naganoRooms: {},
        yamanashiRooms: {},
        shizuokaRooms: {},
        toyamaRooms: {},
        ishikawaRooms: {},
        fukuiRooms: {},
        gifuRooms: {},
        aichiRooms: {},
        roomsRef: null,
        newRoom: null,
      };
    },
    created() {
      this.roomsRef = firebase.firestore().collection("rooms");

      this.roomsRef.where("prefecture", "==", "Niigata").onSnapshot((querySnapshot) => {
        const obj1 = {};
        querySnapshot.forEach((doc) => {
          obj1[doc.id] = doc.data();
        });
        this.niigataRooms = obj1;
      });
        this.roomsRef.where("prefecture", "==", "Nagano").onSnapshot((querySnapshot) => {
          const obj5 = {};
          querySnapshot.forEach((doc) => {
            obj5[doc.id] = doc.data();
          });
          this.naganoRooms = obj5;
        });
        this.roomsRef.where("prefecture", "==", "Yamanashi").onSnapshot((querySnapshot) => {
          const obj7 = {};
          querySnapshot.forEach((doc) => {
            obj7[doc.id] = doc.data();
          });
          this.yamanashiRooms = obj7;
        });
        this.roomsRef.where("prefecture", "==", "Shizuoka").onSnapshot((querySnapshot) => {
          const obj8 = {};
          querySnapshot.forEach((doc) => {
            obj8[doc.id] = doc.data();
          });
          this.shizuokaRooms = obj8;
        });
      this.roomsRef.where("prefecture", "==", "Toyama").onSnapshot((querySnapshot) => {
        const obj2 = {};
        querySnapshot.forEach((doc) => {
          obj2[doc.id] = doc.data();
        });
        this.toyamaRooms = obj2;
      });
      this.roomsRef.where("prefecture", "==", "Ishikawa").onSnapshot((querySnapshot) => {
        const obj3 = {};
        querySnapshot.forEach((doc) => {
          obj3[doc.id] = doc.data();
        });
        this.ishikawaRooms = obj3;
      });
      this.roomsRef.where("prefecture", "==", "Fukui").onSnapshot((querySnapshot) => {
        const obj4 = {};
        querySnapshot.forEach((doc) => {
          obj4[doc.id] = doc.data();
        });
        this.fukuiRooms = obj4;
      });
      this.roomsRef.where("prefecture", "==", "Gifu").onSnapshot((querySnapshot) => {
        const obj6 = {};
        querySnapshot.forEach((doc) => {
          obj6[doc.id] = doc.data();
        });
        this.gifuRooms = obj6;
      });
      this.roomsRef.where("prefecture", "==", "Aichi").onSnapshot((querySnapshot) => {
        const obj9 = {};
        querySnapshot.forEach((doc) => {
          obj9[doc.id] = doc.data();
        });
        this.aichiRooms = obj9;
      });

    },
  };
</script>