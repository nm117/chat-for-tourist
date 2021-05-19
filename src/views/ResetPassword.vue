<template>
  <div id="reset-password">
    <div class="reset-pass-pannel">
      <h2>Reset your password</h2>
      <p>Enter your emaill adress to reset password.</p>
        <div @click="setEmailBorderColor('blue', '2px')" :style="{'border-color': emailBorderColor, 'border-width': emailBorderWidth}" class="current-email">
          <p class="email">Your Email</p>
          <input type="email" @blur="setEmailBorderColor('gray', '1px')" v-model="currentEmail" v-focus >
        </div>
      <button @click="resetPassword" class="send-email">Send</button>
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
  name: "ResetPassword",
  data: function () {
    return {
      currentEmail: "",
      emailBorderColor: 'blue',
      emailBorderWidth: '2px',
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
    resetPassword() {
      this.$store.dispatch("resetPassword", {
        email: this.currentEmail,
      });
      console.log(this.currentEmail);
      this.currentEmail = "";
    },
    setEmailBorderColor(color, width) {
      this.emailBorderColor = color
      this.emailBorderWidth = width
    },
  },
}
</script>

<style scoped>
#reset-password {
  height: 100vh;
}
.reset-pass-pannel {
  width: 90%;
  background-color: #fff;
  border: solid 3px #66BAB7;
  border-radius: 10px;
  padding: 50px 20px;
  margin: 50px auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
.reset-pass-pannel {
  width: 450px;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
@media (min-width: 1025px) {
.reset-pass-pannel {
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
h2 {
  text-align: center;
  margin-bottom: 1em;
}
.email {
  font-size: 0.8em;
}
.current-email {
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
.send-email {
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