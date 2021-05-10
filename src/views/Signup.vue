<template>
  <div id="signup">
    <div class="signup-pannel">
      <h2>CREATE YOUR ACCOUNT</h2>
      <ul>
        <li><button @click="signupWithGoogle" class="google-signup">Google Signup</button></li>
        <li><input v-model="email" placeholder="Email" type="email" /></li>
        <li><input v-model="displayName" placeholder="Your Name" type="text" /></li>
        <li><input v-model="password" placeholder="Password" type="password" /></li>
        <li><button @click="signupWithEmail" class="signup">Sign up</button></li>
      </ul>
        <p class="error-message" v-if="getError">{{ getError }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signup",
  data: function () {
    return {
      email: "",
      password: "",
      displayName: "",
    };
  },
  computed: {
    ...mapGetters([ "isSignIn", "getError", "getUser" ]),
  },
  watch: {
    async isSignIn(value) {
      if (value === true) {
        await this.$router.push({ name: "Top" });
        console.log(value);
      }
    },
  },
  methods: {
    signupWithEmail() {
      this.$store.dispatch("signupWithEmail", {
        email: this.email,
        password: this.password,
        username: this.displayName,
      });
      this.email = "";
      this.password = "";
      this.displayName = "";
    },
    signupWithGoogle() {
      this.$store.dispatch("signupWithGoogle");
    },
  },
};
</script>

<style scoped>
#signup {
  background-color: #66bab7;
  height: 100vh;
}
* :not(h2):not(.error-message):not(li):not(ul) {
  border: 1px solid #eee;
  font-size: 1em;
  border-radius: 5px;
}
.signup-pannel {
  text-align: center;
  width: 90%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px 20px;
  margin: 50px auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
ul {
  text-align: center;
  padding: 0;
}
@media (min-width: 600px) {
.signup-pannel {
  width: 450px;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
@media (min-width: 1025px) {
.signup-pannel {
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
h2 {
  margin-bottom: 1em;
  font-size: 1.3em;
}
.signup {
  font-weight: bold;
  font-size: 1.1em;
  width: 100%;
  padding: 0.8em 0.5em;
  border: none;
  background: #c93f47;
  cursor: pointer;
  color: #fff;
}
.google-signup {
  width: 100%;
  padding: 0.8em 0.5em;
  margin-bottom: 4em;
  cursor: pointer;
}
input {
  width: 100%;
  text-decoration: none;
  margin-bottom: 0.8em;
  padding: 0.8em 0.5em;
  color: black;

}
</style>
