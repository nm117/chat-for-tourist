<template>
  <div id="chat">
    <div class="room-list">
      <room-list></room-list>
    </div>
  <div class="chat-room">
    <textarea
      class="chat-form"
      type="text"
      @keypress.prevent.enter.exact="createChat"
      v-model="newChat"
      v-focus
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
        <template v-if="chat.userId === userId">
          <div class="chat-own">
            <button @click="deleteChat(id)" class="chat-delete">x</button>
            <span v-if="chat.isRead === true" class="is-read">
              <p>既読 {{ chat.isReadUsers.length }}</p>
            </span>
            <span class="chat-message-own">{{ chat.item }}</span>
          </div>
        </template>

        <template v-else>
          <span class="username">{{ chat.username }}</span>
          <span class="chat-message">{{ chat.item }}</span>
          <button @click="pushLike(id)">
            <font-awesome-icon class="chat-nolike" :icon="['far', 'heart']"/>
          </button>
          <span class="like-counter">{{ chat.count }}</span>
          <span class="created-time">{{ getTime(chat) }}</span>
        </template>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();
import { mapGetters } from "vuex";
import RoomList from '../components/RoomList.vue'

export default {
  name: "Chat",
  props: ["id"],
  data: function () {
    return {
      chats: [],
      chatsRef: null,
      likesRef: null,
      newChat: "",
      userId: "",
    };
  },
  components: {
    'room-list': RoomList,
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  computed: {
    ...mapGetters([ "getUser" ]),

    getTime() {
      return (chat) => {
        return chat.created.toDate().getHours() + ":" + ("0" + chat.created.toDate().getMinutes()).slice(-2)
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
      } else {
        this.$router.push("/signup");
      }
    });
  },
  mounted() {
    this.loadChat();
  },
  watch: {
    id(newId, oldId) {
      console.log(newId, oldId);
      this.loadChat();
    },
  },
  methods: {
    createChat() {
      if (this.newChat) {
        this.chatsRef.add({
          userId: this.userId,
          username: this.getUser.username,
          item: this.newChat,
          created: firebase.firestore.FieldValue.serverTimestamp(),
          isRead: false,
        });
      } else {
        return;
      }
      this.newChat = "";
      this.scrollBottom();
    },
    scrollBottom() {
      // this.$nextTick(() => {
      //   window.scrollTo(0, (document.body.clientHeight - "6em"));
      // });
      // this.$nextTick(() => {
      //   const chatLog = this.$refs.a
      //   if (!chatLog) return
      //   chatLog.scrollTop = chatLog.scrollHeight
      // })
    },
    loadChat() {
      this.chatsRef = db.collection("rooms").doc(this.id).collection("chats");
      this.chatsRef.orderBy("created", "asc").onSnapshot((querySnapshot) => {
        let obj = {}
        querySnapshot.docs.map((doc) => {
          obj[doc.id] = doc.data();
        });
        this.chats = obj;
        console.log(this.chats)
        this.openChat();
      });
    },
    deleteChat(id) {
      this.chatsRef.doc(id).delete()
    },
    async openChat() {
      let batch = db.batch();
      const chats = await db.collection("rooms").doc(this.id).collection("chats").where("userId", "!=", this.userId).get();
      chats.docs.forEach((doc, index) => {
        if ((index + 1) % 500 === 0) {
        batch.commit(); 
        batch = db.batch(); 
        }
        batch.update(doc.ref, {
          "isRead": true,
          "isReadUsers": firebase.firestore.FieldValue.arrayUnion(this.userId),
        });
      });
      await batch.commit();
      this.joinChat();
    },
    joinChat() {
      db.collection("rooms").doc(this.id).update({
        joinUsers: firebase.firestore.FieldValue.arrayUnion(this.userId),
        updated: firebase.firestore.FieldValue.serverTimestamp(),
      })
    },
    pushLike(id) {
      this.chatsRef.doc(id).collection("likedUsers").doc(this.userId).set({
        username: this.getUser.username,
        count: firebase.firestore.FieldValue.increment(1),
      });
      this.chatsRef.doc(id).update({
        count: firebase.firestore.FieldValue.increment(1)
      });
    },
    // deleteLike(id) {
    //   this.chatsRef.doc(id).collection("likedUsers").doc(this.userId).delete();

    //   this.chatsRef.doc(id).add({
    //     count: firebase.firestore.FieldValue.increment(-1)
    //   });
    //   this.loadChat();
    // },
    
  }
}
</script>

<style scoped>
#chat {
  height: calc(100vh - 6em);
}
.chat-room {
  padding-top: 6em;
  /* width: calc(100vh - 250px); */
  margin: 0 0 0 200px;
}
.chats {
  margin: 0 3%;
  height: calc(100vh - 200px);
  overflow-y: auto;
  /* width: 80%; */
}
.room-list {
  float: left;
  width: 250px;
  padding-top: 3.5em;
  height: calc(100vh - 250px);
}
button {
  background-color: rgba(0,0,255,0);
  border: none;
}
.chat-form {
  position: fixed;
  bottom: 0;
  padding: 10px 15px;
  height: 120px;
  width: 100%;
  background: #FFF;
  font-size: 1em;
  border: solid 1px #E9B5B4;
}
.chat-item {
  text-align: left;
  margin: 0 0 0.7em 2em;
}
.chat-item-own {
  text-align: right;
  margin: 0 2em 0.7em 0;
}
.chat-message,
.chat-message-own {
  position: relative;
  display: inline-block;
  padding: 0.6em;
  border-radius: 20px;
  line-height: 1.1em;
  background: #EFEFEF;
  max-width: 75%;
}
.chat-message-own {
  background: #deefe8;
}
.chat-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -12px;
  bottom: 12px;
  border: 3px solid transparent;
  border-right: 12px solid #EFEFEF;
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
.chat-own {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.chat-delete {
  margin-left: 1.5em;
  padding: 0 0.2em;
  border: none;
  cursor: pointer;
}
.username {
  font-size: 0.7em;
}
.like-counter, .is-read p, .created-time{
  font-size: 0.7em;
  color: #5F6062;
}
.username {
  display: block;
}
.is-read {
  margin: 0.3em;
  color: #5F6062;
}
.created-time{
  margin-left: 0.5em;
}
</style>