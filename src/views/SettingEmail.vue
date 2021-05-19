<template>
  <div id="setting-email">
    <div class="email-pannel">
      <h2>Setting Email</h2>
        <div class="current-email">
          <p>Current Email</p>
          {{ getUser.email }}
        </div>
        <div @click="setEmailBorderColor('blue', '2px')" :style="{'border-color': emailBorderColor, 'border-width': emailBorderWidth}" class="new-email">
          <p>New Email</p>
          <input type="email" @blur="setEmailBorderColor('gray', '1px')" v-model="newEmail" v-focus >
        </div>
        <div @click="setPasswordBorderColor('blue', '2px')" :style="{'border-color': passwordBorderColor, 'border-width': passwordBorderWidth}" class="password">
          <p>Please enter your password to verify</p>
          <input type="password" @blur="setPasswordBorderColor('gray', '1px')" v-model="profPassword" v-focus >
        </div>
      <button @click="changeEmail" class="save-email">Save</button>
        <div class="message">
          <p class="error-message" v-if="getError">{{ getError }}</p>
          <p class="get-message" v-if="getMessage">{{ getMessage }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SettingEmail",
  data: function () {
    return {
      newEmail: "",
      profPassword: "",
      emailBorderColor: 'blue',
      emailBorderWidth: '2px',
      passwordBorderColor: 'blue',
      passwordBorderWidth: '2px',
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  computed: {
    ...mapGetters([ "getUser", "getError", "getMessage", ]),
  },
  methods: {
    changeEmail() {
      this.$store.dispatch("changeEmail", {
        password: this.profPassword,
        email: this.newEmail,
        username: this.getUser.username,
      });
      console.log(this.newEmail);
      this.newEmail = "";
    },
    setEmailBorderColor(color, width) {
      this.emailBorderColor = color
      this.emailBorderWidth = width
    },
    setPasswordBorderColor(color, width) {
      this.passwordBorderColor = color
      this.passwordBorderWidth = width
    },
  },
}
</script>

<style scoped>
#setting-email {
  height: 100vh;
}
.email-pannel {
  width: 90%;
  background-color: #fff;
  border: solid 3px #66BAB7;
  border-radius: 10px;
  padding: 50px 20px;
  margin: 50px auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
.email-pannel {
  width: 450px;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
@media (min-width: 1025px) {
.email-pannel {
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
h2 {
  text-align: center;
  margin-bottom: 1em;
}
p {
  font-size: 0.8em;
}
.current-email {
  width: 100%;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin: 1em auto;
}
.new-email, .password {
  width: 100%;
  border-style: solid;
  border-radius: 5px;
  padding: 0.8em 0.5em;
  margin: 1em auto;
}
input{
  border: none;
  outline: none;
}
.save-email {
  width: 50%;
  display: block;
  padding: 0.8em 0.5em;
  margin: 0 0 0 auto;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  border-radius: 5px;
  border: none;
  background: #66BAB7;
  cursor: pointer;
  color: #fff;
}
</style>