<template>
  <transition name="modal" appear>
    <div class="modal-overlay">

      <div class="user-info">
        <div class="avatar">
          <img v-if="this.avatar" :src="this.avatar" />
        </div>
        <div class="prof-name">
          {{ this.username }}
        </div>
        <div class="bio">
          <p>Bio</p>
          {{ this.bio }}
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();

export default {
  name: "UserInfo",
  props: {
    roomId: {
      type: String,
    },
    chatId: {
      type: String,
    },
  },
  data: function() {
    return {
      avatar: null,
      username: null,
      bio: null,
    };
  },
  watch: {
    chatId() {
      this.loadUserInfo()
    },
  },
  methods: {
    async loadUserInfo() {
      console.log(this.chatId);
      await db.collection("rooms").doc(this.roomId).collection("chats").doc(this.chatId).get().then((doc) => {
        const userId = doc.data().userId;
          db.collection("users").doc(userId).get().then((doc) => {
            (this.avatar = doc.data().avatar),
            (this.username = doc.data().username),
            (this.bio = doc.data().bio);
          });
        });
      this.$parent.userInfo = true;
    },
  },
};
</script>

<style scoped>
* {
  color: #fff;
}
.modal-overlay {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  width: 100%;
  height: 100%;
  margin-top: 6.5em;
  background: rgba(0, 0, 0, 0.05);
}
.user-info {
  width: 300px;
  background: rgba(0, 0, 0, 0.7);
  border: solid 3px #4ab9b6;
  border-radius: 10px;
  padding: 2em;
  margin: 3em auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
  font-size: 0.9em;
  font-weight: bold;
  text-align: center;
}
.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
}
.avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
}
.bio {
  width: 100%;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin-top: 1em;
}
.bio p {
  text-align: left;
  margin-left: 0.5em;
}
.modal-enter-active {
  transition: opacity 0.2s;
}
.modal-enter-active .modal-window {
  transition: opacity 0.2s, transform 0.2s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-window,
.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

@media (min-width: 600px) {
.user-info {
  margin: 3em 15em 0 0;
}
}
@media (min-width: 1025px) {
.user-info {
  margin: 3em 15em 0 0;
}
}
</style>
