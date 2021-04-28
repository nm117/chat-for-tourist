<template>
  <div id="signin">
    <div class="signin-pannel">
      <h2>LOGIN TO YOUR ACCOUNT</h2>

      <!-- Google -->
      <button @click="signinWithGoogle" class="google-signin">Google Signin</button>
      <!-- Email&Password -->
      <input v-model="email" placeholder="Email" type="email" />
      <input v-model="password" placeholder="Password" type="password" />
      <button @click="signinWithEmail" class="signin">Sign in</button>
      <p class="error-message" v-if="getError">{{ getError }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isSignIn() {
      return this.$store.getters.isSignIn;
    },
    getError() {
      return this.$store.getters.getError;
    },
    getUsers() {
      return this.$store.getters.getUsers;
    },
  },
  watch: {
    async isSignIn(value) {
      if (value === true) {
        this.$store.commit('setSignIn', true)
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
* :not(h2):not(.error-message):not(li):not(ul) {
  text-align: center;
  border: 1px solid #eee;
  font-size: 1em;
  border-radius: 5px;
}
.signin-pannel {
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 2em 1.5em;
  margin: 50px auto;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
.signin-pannel {
  width: 450px;
}
}
h2 {
  margin-bottom: 1em;
}
.signin {
  font-weight: bold;
  font-size: 1.1em;
  width: 85%;
  padding: 0.8em 0.5em;
  border-radius: 5px;
  border: none;
  background: #c93f47;
  cursor: pointer;
}
.google-signin {
  width: 85%;
  padding: 0.8em 0.5em;
  margin-bottom: 4em;
  cursor: pointer;
}
input {
  color: black;
  width: 80%;
  text-decoration: none;
  margin-bottom: 0.8em;
  padding: 0.8em 0.5em;
}
</style>