<template>
  <div id="signin">
    <div class="signin-pannel">
      <h2>LOGIN TO YOUR ACCOUNT</h2>

      <!-- Google -->
      <button @click="signinWithGoogle" class="google-signin">Google Signin</button>
      <!-- Email&Password -->
      <input v-model="email" placeholder="Email" type="email" />
      <input v-model="password" placeholder="Password" type="password" />
      <div class="forgot-password"><router-link to="/setting/reset_password">Forgot password?</router-link></div>
      <button @click="signinWithEmail" class="signin-button">Sign in</button>
      
      <p class="firebase-error-message" v-if="getError">{{ getError }}</p>
      <p class="error-message" v-if="getMessage">{{ getMessage }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signin",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters([ "isSignIn", "getError", "getUser", "getMessage" ]),
  },
  watch: {
    async isSignIn(value) {
      if (value) {
        await this.$router.push({ name: "Top" });
        console.log(value);
      }
    },
  },
  methods: {
    signinWithEmail() {
      this.$store.dispatch("signinWithEmail", {
        email: this.email,
        password: this.password,
      });
      this.email = "";
      this.password = "";
    },
    signinWithGoogle() {
      this.$store.dispatch("signinWithGoogle");
    },
  },
};
</script>

<style scoped>
#signin {
  background-color: #66bab7;
  height: 100vh;
}
.signin-pannel {
  text-align: center;
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px 20px;
  margin: 50px auto;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
.signin-pannel {
  width: 450px;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
@media (min-width: 1025px) {
.signin-pannel {
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
}
h2 {
  margin-bottom: 1em;
  font-size: 1.3em;
}
.signin-button {
  font-weight: bold;
  width: 100%;
  padding: 0.8em 0.5em;
  margin-top: 0.8em;
  border: none;
  background: #c93f47;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
}
.google-signin {
  width: 100%;
  padding: 0.8em 0.5em;
  margin-bottom: 2em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
input {
  color: black;
  width: 100%;
  border: 1px solid #eee;
  text-decoration: none;
  margin-top: 0.8em;
  padding: 0.8em 0.5em;
  border-radius: 5px;
}
.forgot-password {
  font-size: 0.9em;
  text-decoration: underline;
  border: none;
  text-align: right;
}
</style>