<template>
  <div id="setting-password">
    <div class="password-pannel">
      <h2>Setting Password</h2>
        <div @click="setCurrentPassBorderColor('blue', '2px')" :style="{'border-color': currentPassBorderColor, 'border-width': currentPassBorderWidth}" class="current-password">
          <p>Current Password</p>
          <input type="password" @blur="setCurrentPassBorderColor('gray', '1px')" v-model="currentPass" v-focus >
        </div>
        <div @click="setNewPassBorderColor('blue', '2px')" :style="{'border-color': newPassBorderColor, 'border-width': newPassBorderWidth}" class="new-password">
          <p>New Password</p>
          <input type="password" @blur="setNewPassBorderColor('gray', '1px')" v-model="newPass" v-focus >
        </div>
        <div @click="setConfirmPassBorderColor('blue', '2px')" :style="{'border-color': confirmPassBorderColor, 'border-width': confirmPassBorderWidth}" class="confirm-password">
          <p>Confirm Password</p>
          <input type="password" @blur="setConfirmPassBorderColor('gray', '1px')" v-model="confirmPass" v-focus >
        </div>
      <button @click="changePassword" class="save-password">Save</button>
        <div class="message">
          <span v-if="errors">
            <ul>
              <li v-for="(error, key) in errors" :key="key" class="errors">{{ error }}</li>
            </ul>
          </span>
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
      currentPass: "",
      newPass: "",
      confirmPass: "",
      currentPassBorderColor: 'blue',
      currentPassBorderWidth: '2px',
      newPassBorderColor: 'blue',
      newPassBorderWidth: '2px',
      confirmPassBorderColor: 'blue',
      confirmPassBorderWidth: '2px',
      errors: [],
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
    changePassword() {
      if (this.newPass !== this.confirmPass) {
        this.errors = "New password and confirm password does not match. Please enter again."
      } 
      
      this.errors = [];
      if (!this.currentPass) {
        this.errors.push("Current Password is not entered.")
      } if (!this.newPass) {
        this.errors.push("New password is not entered.")
      } if (!this.confirmPass) {
        this.errors.push("Confirm password is not entered.")
      }
      else { 
        this.$store.dispatch("changePassword", {
          currentPass: this.currentPass,
          newPass: this.newPass,
        });
        this.currentPass = "";
        this.newPass = "";
        this.confirmPass = "";
      }
    },
    setCurrentPassBorderColor(color, width) {
      this.currentPassBorderColor = color
      this.currentPassBorderWidth = width
    },
    setNewPassBorderColor(color, width) {
      this.newPassBorderColor = color
      this.newPassBorderWidth = width
    },
    setConfirmPassBorderColor(color, width) {
      this.confirmPassBorderColor = color
      this.confirmPassBorderWidth = width
    },
  },
}
</script>

<style scoped>
#setting-password {
  height: 100vh;
}
.password-pannel {
  width: 90%;
  background-color: #fff;
  border: solid 3px #66BAB7;
  border-radius: 10px;
  padding: 50px 20px;
  margin: 50px auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
.password-pannel {
  width: 450px;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
@media (min-width: 1025px) {
.password-pannel {
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
h2 {
  text-align: center;
  margin-bottom: 1em;
}
ul {
  padding: 0;
}
.errors {
  color: red;
}
p:not(.error-message, .get-message) {
  font-size: 0.8em;
}
.current-password, .new-password, .confirm-password {
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
.save-password {
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