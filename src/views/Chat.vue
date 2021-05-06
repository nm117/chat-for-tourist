<template>
  <div id="chat">
    <textarea
      class="chat-form"
      type="text"
      @keypress.prevent.enter.exact="createChat"
      v-model="newChat"
    ></textarea>

    <div class="chats">
      <div
        v-for="(chat, id) in chats"
        :key="chat.id"  
        :class="{
          'chat-item-own': chat.userId === userId,
          'chat-item': chat.userId !== userId,
        }"
      >
      <span
      :class="{
        'chat-message-own': chat.userId === userId,
        'chat-message': chat.userId !== userId,
      }"
      >
      {{ chat.item }}
      </span>
      <template v-if="chat.userId === userId">
        <button @click="deleteChat(id)" class="chat-delete">x</button>
      </template>
      <template v-else>

        <span v-if="newLike" class="chat-like">
          <button @click="deleteLike(id)">
            <font-awesome-icon :icon="['fas', 'heart']"/>
          </button>
        </span>
        <span v-else class="chat-nolike">
          <button @click="pushLike(id)">
            <font-awesome-icon :icon="['far', 'heart']"/>
          </button>
        </span>
        
      </template>
      {{ chat.username }}
      </div>
    </div>
    
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();

export default {
  name: "Chat",
  props: ["id"],
  data: function () {
    return {
      chats: {},
      chatsRef: null,
      newChat: "",
      username: "",
      userId: "",
      newLike: false,
      likesRef: null,
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
        const usersRef = db.collection("users").doc(this.userId);
        usersRef.get().then((doc) => {
          this.username = doc.data().username;
        });
      } else {
        this.$router.push("/signup");
      }
    });
  },
  mounted() {
    this.loadChat();
  },
  watch: {
    "$route.params.id"(newId, oldId) {
      console.log(newId, oldId);
      this.loadChat();
    },
  },
  methods: {
    createChat() {
      if (this.newChat) {
        this.chatsRef.add({
          userId: this.userId,
          username: this.username,
          item: this.newChat,
          created: new Date(),
        });
      }
      this.newChat = "";
      this.scrollBottom();
    },
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight);
      });
    },
    loadChat() {
      this.chatsRef = db.collection("rooms").doc(this.$route.params.id).collection("chats");
      this.chatsRef.orderBy("created", "asc").onSnapshot((querySnapshot) => {
        const obj = {};
        querySnapshot.forEach((doc) => {
          obj[doc.id] = doc.data();
        });
        this.chats = obj;
        console.log(this.chats);
      });
    },
    deleteChat(id) {
      this.chatsRef.doc(id).delete();
    },
    pushLike(id) {
      this.chatsRef.doc(id).collection("likedUsers").doc(this.userId).set({
        userId: this.userId,
        username: this.username,
        created: new Date(),
      });
      this.newLike = true;
    },
    deleteLike(id) {
      this.chatsRef.doc(id).collection("likedUsers").doc(this.userId).delete();
      this.newLike = false;
    },
  },
};
</script>

<style scoped>
.chats {
  margin: 0 5%;
}
button {
  background-color: rgba(0,0,255,0);
  border: none;
}
.chat-form {
  position: fixed;
  bottom: 0;
  padding: 10px 15px;
  height: 15%;
  width: 100%;
  background: #f5f5f5;
  font-size: 1em;
}
.chat-item {
  text-align: left;
  margin-bottom: 0.8em;
}
.chat-item-own {
  text-align: right;
  margin-bottom: 0.8em;
}
.chat-message,
.chat-message-own {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 30px;
  line-height: 1.2em;
}
.chat-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -12px;
  bottom: 12px;
  border: 3px solid transparent;
  border-right: 12px solid #deefe8;
}
.chat-message-own::after {
  position: absolute;
  content: " ";
  display: block;
  right: -12px;
  bottom: 20px;
  border: 3px solid transparent;
  border-left: 12px solid #deefe8;
}
.chat-delete {
  margin-left: 1.5em;
  padding: 0 0.2em;
  border: none;
  cursor: pointer;
}
</style>