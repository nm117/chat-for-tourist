<template>
  <div id="chat">
    <div class="room-list">
      <RoomList ref="roomList"></RoomList>
    </div>

    <div class="chat-room">
      <div class="room-title">
        <router-link :to="{ name: 'Roominfo', params: { id: id } }" class="roomname">
          {{ roomname }} {{ '(' + joinIds + ')' }}
        </router-link>
        <span
          v-click-outside="hideRoomMenu"
          @click="openRoomMenu"
          class="humberger"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </span>
        <span v-if="isRoommenuOpen" class="humberger-open" @click="leaveRoom(id)">
          Leave the room
        </span>
      </div>

      <UnreadModal v-if="modal">
        <p>{{ this.unreadMessage }}of Unread</p>
      </UnreadModal>

      <textarea
        class="chat-form"
        type="text"
        @keypress.prevent.enter.exact="createChat"
        v-model="newChat"
        v-focus
      />
      <div class="chats" ref="scrollArea">
        <div
          v-for="(chat, id) in chats"
          :key="chat.id"
          :class="{
            'chat-item-own': chat.userId === userId,
            'chat-item': chat.userId !== userId,
          }"
        >
          <template v-if="chat.userId === userId">
            <button @click="deleteChat(id)" class="chat-delete">x</button>
            <span v-if="chat.isRead === true" class="is-read">
              <p>Read {{ chat.isReadUsers.length }}</p>
            </span>
            <span class="chat-message-own">{{ chat.item }}</span>
            <div class="chat-avatar-own">
              <img 
                @click="appearUserInfo(id)"
                v-click-outside="disappearUserInfo" 
                :src="chat.avatar"
              />
            </div>
          </template>

          <template v-else>
            <div class="column">
              <span class="username">{{ chat.username }}</span>
              <div class="chat-avatar">
                <img 
                @click="appearUserInfo(id)"
                v-click-outside="disappearUserInfo" 
                :src="chat.avatar"
              />
              </div>
            </div>
            <span class="chat-message">{{ chat.item }}</span>
            <button @click="pushLike(id)" class="like">
              <font-awesome-icon :icon="['far', 'heart']" />
            </button>
            <span class="like-counter">{{ chat.likeCount }}</span>
            <span class="created-time">{{ getTime(chat) }}</span>
          </template>
        </div>
      </div>

      <UserInfo v-show="userInfo" ref="userInfo" :roomId="roomId" :chatId="chatId"/>

    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();
import { mapGetters } from "vuex";

import RoomList from "../components/RoomList.vue";
import UserInfo from "../components/UserInfo.vue";
import UnreadModal from "../components/UnreadModal.vue";

export default {
  name: "Chat",
  props: ["id"],
  data: function() {
    return {
      chats: [],
      chatsRef: null,
      likesRef: null,
      newChat: "",
      roomId: "",
      userId: "",
      userAvatar: null,
      userInfo: false,
      roomname: "",
      joinIds: null,
      isRoommenuOpen: false,
      isChatmenuOpen: false,
      avatar: null,
      unreadMessage: null,
      modal: false,
      chatId: null,
    };
  },
  components: {
    RoomList: RoomList,
    UnreadModal: UnreadModal,
    UserInfo: UserInfo,
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      },
    },
  },
  computed: {
    ...mapGetters(["getUser"]),

    getTime() {
      return (chat) => {
        return (
          chat.created.toDate().getHours() + ":" + ("0" + chat.created.toDate().getMinutes()).slice(-2)
        );
      };
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
        this.userAvatar = user.photoURL;
        this.setJoinUsers();
        console.log(this.getUser)
      } else {
        this.$router.push("/signup");
      }
    });
  },
  mounted() {
    this.loadChat();
    console.log(this.userInfo)
  },
  updated() {
    this.scrollBottom();
  },
  watch: {
    id() {
      this.loadChat();
      this.setJoinUsers();
    },
  },
  methods: {
    async createChat() {
      if (this.newChat) {
        await this.chatsRef.add({
          userId: this.userId,
          username: this.getUser.username,
          item: this.newChat,
          created: firebase.firestore.FieldValue.serverTimestamp(),
          isRead: false,
          avatar: this.userAvatar,
        });
        db.collection("rooms").doc(this.id).update({
          updated: firebase.firestore.FieldValue.serverTimestamp(),
        });
        this.$refs.roomList.onActive(this.id);
      } else {
        return;
      }
      this.newChat = "";
      this.scrollBottom();
      this.updateUnread();
    },
    async updateUnread() {
      let batch = db.batch();
      const joinUsers = await db.collection("rooms").doc(this.id).collection("joinUsers")
        .where(firebase.firestore.FieldPath.documentId(), "!=", this.getUser._id).get();
      joinUsers.docs.forEach((doc, index) => {
        if ((index + 1) % 500 === 0) {
          batch.commit();
          batch = db.batch();
        }
        batch.update(doc.ref, {
          unreadMessage: firebase.firestore.FieldValue.increment(1),
        });
      });
      batch.commit();
    },
    scrollBottom() {
      this.$nextTick(() => {
        const chatLog = this.$refs.scrollArea;
        if (!chatLog) return;
        chatLog.scrollTop = chatLog.scrollHeight;
      });
    },
    loadChat() {
      this.chatsRef = db.collection("rooms").doc(this.id).collection("chats");
      this.chatsRef.orderBy("created", "asc").onSnapshot((querySnapshot) => {
        let obj = {};
        querySnapshot.docs.map((doc) => {
          obj[doc.id] = doc.data();
        });
        this.chats = obj;
      });
      db.collection("rooms").doc(this.id).get().then((doc) => {
        this.roomname = doc.data().roomname;
        this.joinIds = doc.data().joinIds.length;
      });
      this.updateRead();
    },
    async updateRead() {
      let batch = db.batch();
      const chats = await db.collection("rooms").doc(this.id).collection("chats")
      .where("userId", "!=", this.getUser._id).get();
      chats.docs.forEach((doc, index) => {
        if ((index + 1) % 500 === 0) {
          batch.commit();
          batch = db.batch();
        }
        batch.update(doc.ref, {
          isRead: true,
          isReadUsers: firebase.firestore.FieldValue.arrayUnion(this.getUser._id),
        });
      });
      batch.commit();
    },

    setJoinUsers() {
      db.collection("rooms").doc(this.id).update({
        joinIds: firebase.firestore.FieldValue.arrayUnion(this.getUser._id),
      });
      db.collection("rooms").doc(this.id).collection("joinUsers").doc(this.getUser._id).set({
        userId: this.getUser._id,
        username: this.getUser.username,
      },{ merge: true }
      );
      this.getUnread();
    },
    getUnread() {
      db.collection("rooms").doc(this.id).collection("joinUsers").doc(this.getUser._id)
      .get().then((doc) => {
        this.unreadMessage = doc.data().unreadMessage;
        if (this.unreadMessage > 0) {
          this.modal = true;
          setTimeout(this.resetUnread, 2000);
        }
      });
    },
    resetUnread() {
      db.collection("rooms").doc(this.id).collection("joinUsers").doc(this.getUser._id).update({
        unreadMessage: 0,
      });
      this.modal = false;
    },

    pushLike(id) {
      this.chatsRef.doc(id).collection("likedUsers").doc(this.userId).set({
        username: this.getUser.username,
      });
      this.chatsRef.doc(id).update({
        likeCount: firebase.firestore.FieldValue.increment(1),
      });
    },

    async leaveRoom() {
      await db.collection("rooms").doc(this.id).update({
        joinIds: firebase.firestore.FieldValue.arrayRemove(this.getUser._id),
      });
      db.collection("rooms").doc(this.id).collection("joinUsers").doc(this.getUser._id).delete();
      this.chats = null;
      this.roomname = null;
      this.joinIds = null;
    },

    deleteChat(id) {
      this.chatsRef.doc(id).delete();
    },

    onEnterKey(e) {
      console.log("ClickedEnter", e);
    },

    openRoomMenu() {
      this.isRoommenuOpen = true;
    },
    hideRoomMenu() {
      this.isRoommenuOpen = false;
    },
    openChatMenu() {
      this.isChatmenuOpen = true;
    },
    hideChatMenu() {
      this.isChatmenuOpen = false;
    },
    appearUserInfo(id) {
      this.roomId = this.id;
      this.chatId = id;
      // this.$refs.userInfo.loadUserInfo();
    },
    disappearUserInfo() {
      this.userInfo = false;
    },
  },
};
</script>

<style scoped>
#chat {
  width: 100%;
  height: 100vh;
  background: #fff;
}
.chat-room {
  padding-top: 3.5em;
}
.room-list {
  display: none;
}
.room-title {
  width: 100%;
  height: 3em;
  padding: 0.5em;
  margin-bottom: 1em;
  background: #f3f4f6;
  display: flex;
  justify-content: space-between;
  position: fixed;
}
.roomname {
  width: 300px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.humberger {
  font-size: 1.3em;
  padding: 0 1em;
}
.humberger-open {
  position: absolute;
  height: 45px;
  top: 50px;
  right: 22px;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  display: block;
  padding: 0.6em;
  background: rgba(0, 0, 0, 0.75);
  z-index: 5;
}
.humberger-open:after {
  position: absolute;
  border-bottom: 12px solid rgba(0, 0, 0, 0.75);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  top: -12px;
  right: 8px;
  font-weight: bold;
  content: "";
}
.chats {
  height: calc(100vh - 178px);
  overflow-y: auto;
}
button {
  background-color: rgba(0, 0, 255, 0);
  border: none;
}
.chat-form {
  position: fixed;
  bottom: 0;
  padding: 10px 15px;
  height: 120px;
  width: 100%;
  background: #fff;
  font-size: 1em;
  border: solid 1px #e9b5b4;
}
.chat-item {
  display: flex;
  align-items: center;
  margin: 0 0 0.7em 0.5em;
}
.chat-item-own {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0.5em 0.7em 0;
}
.chat-message,
.chat-message-own {
  display: inline-block;
  padding: 0.6em;
  border-radius: 20px;
  line-height: 1.5em;
  background: #efefef;
  max-width: 60%;
  white-space: pre-wrap;
  word-wrap : break-word;
  overflow-wrap : break-word;
}
.chat-message-own {
  background: #deefe8;
}
.chat-delete {
  margin-left: 1.5em;
  padding: 0 0.2em;
  border: none;
  cursor: pointer;
}
.username {
  font-size: 0.7em;
  margin-right: 1.2em;
}
.like-counter,
.is-read p,
.created-time {
  font-size: 0.7em;
  color: #5f6062;
}
.username {
  display: block;
}
.is-read {
  margin: 0.3em;
  color: #5f6062;
}
.like {
  cursor: pointer;
}
.created-time {
  margin-left: 0.5em;
}
.chat-avatar-own {
  margin-left: 1em;
}
.chat-avatar {
  margin-right: 0.6em;
}
.chat-avatar-own img,
.chat-avatar img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}
.column {
  display: flex;
  flex-direction: column;
}
@media (min-width: 600px) {
.room-list {
  display: block;
  float: left;
  width: 280px;
  height: 100%;
  padding-top: 3.5em;
}
.chat-room {
  padding-top: 3.5em;
  width: 100% - 280px;
  margin: 0 0 0 280px;
}
.room-title {
  height: 3em;
  padding: 0.5em 0.5em 0.6em 0;
  width: 100%;
  margin-bottom: 1em;
  justify-content: flex-end;
  position: static;
}
.chat-item {
  margin: 0 0 0.7em 2em;
}
.chat-item-own {
  margin: 0 2em 0.7em 0;
}
.chats {
  height: calc(100vh - 242px);
}
.chat-avatar-own img,
.chat-avatar img {
  width: 35px;
  height: 35px;
}
.humberger-open {
  top: 100px;
  right: 22px;
}
.humberger-open:after {
  top: -12px;
  right: 8px;
}
}
@media (min-width: 1025px) {
.room-list {
  display: block;
  float: left;
  width: 280px;
  height: 100%;
  padding-top: 3.5em;
}
.chat-room {
  padding-top: 3.5em;
  width: 100% - 280px;
  margin: 0 0 0 280px;
}
.room-title {
  height: 3em;
  padding: 0.5em 0.5em 0.6em 0;
  width: 100%;
  margin-bottom: 1em;
  justify-content: flex-end;
  position: static;
}
.roomname {
  width: 600px;
  text-align: right;
}
.chat-item {
  margin: 0 0 0.7em 2em;
}
.chat-item-own {
  margin: 0 2em 0.7em 0;
}
.chats {
  height: calc(100vh - 242px);
}
.chat-avatar-own img,
.chat-avatar img {
  width: 35px;
  height: 35px;
}
.humberger-open {
  top: 100px;
  right: 22px;
}
.humberger-open:after {
  top: -12px;
  right: 8px;
}
}
</style>
