<template>
  <div id="roominfo">
    <div class="roominfo-pannel">
      <h2>Room info</h2>
      <div class="room-icon">
        <input
          type="file"
          ref="input-roomicon"
          name="input-roomicon"
          id="input-roomicon"
          accept="image/*"
          @change="setRoomIcon"
          style="display: none"
        />
        <label for="input-roomicon">
          Change<br />
          Photo<br />
        </label>
        <div class="roomicon">
          <img v-if="this.roomIcon" :src="this.roomIcon" />
        </div>
      </div>

      <div class="roominfo-pref">
        Room in <p class="red-color">{{ this.pref }}</p> Prefecture
      </div>
      <div class="join-users">
        <p class="red-color">{{ this.joinIds }} users Joined</p>
      </div>

      <div class="room-name">
        <div
          v-if="!this.roomnameEditing"
          @click="editRoomname"
          class="roominfo-roomname"
        >
          <p>Room name</p>
          {{ this.roomname }}
        </div>
        <div
          v-else
          @click="setRoomnameBorderColor('blue', '2px')"
          :style="{
            'border-color': roomnameBorderColor,
            'border-width': roomnameBorderWidth,
          }"
          class="roominfo-roomname-editing"
        >
          <p>Room name</p>
          <textarea
            @blur="setRoomnameBorderColor('gray', '1px')"
            v-model="infoRoomname"
            v-focus
          ></textarea>
        </div>
      </div>
      <button @click="saveRoomname" class="save-roomname">Save</button>

      <p class="firebase-error-message" v-if="getError">{{ getError }}</p>
      <p class="error-message" v-if="getMessage">{{ getMessage }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
import { mapGetters } from "vuex";

const db = firebase.firestore();

export default {
  name: "Roominfo",
  props: ["id"],
  data: function() {
    return {
      roomIcon: null,
      roomname: null,
      pref: null,
      joinIds: null,
      roomnameEditing: false,
      infoRoomname: null,
      roomnameBorderColor: "blue",
      roomnameBorderWidth: "2px",
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      },
    },
  },
  computed: {
    ...mapGetters(["getUser", "getError", "getMessage"]),
  },
  created() {
    this.loadRoomInfo();
    console.log(this.getUser);
  },
  watch: {
    id() {
      
    },
  },
  methods: {
    loadRoomInfo() {
      this.roomsRef = db.collection("rooms").doc(this.id);
      this.roomsRef.onSnapshot((doc) => {
        this.roomIcon = doc.data().roomIcon;
        this.roomname = doc.data().roomname;
        this.pref = doc.data().prefecture;
        this.joinIds = doc.data().joinIds.length;
      });
    },
    async setRoomIcon(e) {
      const fileImg = e.target.files[0];
      const iconRef = firebase.storage().ref().child('room-image/' + fileImg.name);

      iconRef.put(fileImg).then(() => {
        iconRef.getDownloadURL().then((url) => {
          this.roomsRef.update({
            roomIcon: url,
          });
          console.log("Room icon updated");
        })
        .catch(error => {
          console.log(error.code);
          console.log(error.message);
        });
      });
    },
    editRoomname() {
      this.roomnameEditing = true;
      this.infoRoomname = this.roomname;
    },
    saveRoomname() {
      this.roomsRef.update({
        roomname: this.editRoomname,
      });
      this.roomnameEditing = false;
    },
    setRoomnameBorderColor(color, width) {
      this.roomnameBorderColor = color;
      this.roomnameBorderWidth = width;
    },
  }
}
</script>

<style scoped>
#roominfo {
  height: 100vh;
}
.roominfo-pannel {
  width: 90%;
  background-color: #fff;
  border: solid 3px #e9b5b4;
  border-radius: 10px;
  padding: 2em 1.5em;
  margin: 0 auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
.room-icon {
  display: flex;
  justify-content: center;
  margin: 1.5em auto 2em auto;
}
h2 {
  text-align: center;
  margin-bottom: 1.5em;
}
.roominfo-roomname {
  width: 100%;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin-bottom: 2em;
}
.roominfo-roomname-editing {
  width: 100%;
  color: black;
  border-style: solid;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin-bottom: 2em;
}
.roominfo-roomname-editing textarea {
  width: 100%;
  border: none;
  outline: none;
}
.roominfo-pref, .join-users {
  text-align: center;
  font-weight: bold;
  padding: 1em;
  margin-bottom: 1em;
  background: rgb(235, 235, 235, 0.2);
  border-radius: 20px;
}
.red-color {
  color: #c93f47;
  display: inline;
}
p:not(.red-color) {
  font-size: 0.8em;
}
.save-roomname {
  width: 50%;
  display: block;
  padding: 0.8em 0.5em;
  margin: 0 0 0 auto;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  border-radius: 5px;
  border: none;
  background: #e9b5b4;
  cursor: pointer;
  color: #fff;
}
.roomicon img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
}
label {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgb(235, 235, 235, 0.2);
  z-index: 2;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
}
@media (min-width: 600px) {
  .roominfo-pannel {
    width: 450px;
    box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
  }
}
@media (min-width: 1025px) {
  .roominfo-pannel {
    box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>
