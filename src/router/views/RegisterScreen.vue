<template>
  <base-line class="background login-bg">
    <v-card class="container">
      <div class="formContainer">
        <h1 class="titleSignin">Sign up</h1>
        <v-form @submit="login()">
          <v-text-field
            v-model="user.email"
            label="Email address or phone number"
            placeholder="user@remind-clone.com"
            outlined
            required
          >
          </v-text-field>
          <v-text-field v-model="user.name" label="Name" outlined required placeholder="your name"> </v-text-field>
          <v-text-field
            v-model="user.password"
            label="Password"
            outlined
            required
            placeholder="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>
          <v-text-field
            v-model="re_password"
            label="Confirm Password"
            outlined
            required
            placeholder="Confirm password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>

          <v-btn block elevation="4" color="primary" @click="register()"> Sign up </v-btn>
        </v-form>
      </div>
    </v-card>
  </base-line>
</template>

<script>
import BaseLine from "../layouts/Baseline.vue";

export default {
  name: "Register",
  components: {
    BaseLine,
  },
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: "",
      },
      re_password: "",
      keepsignin: false,
      showPassword: false,
    };
  },
  methods: {
    register() {
      console.log("register");
    },
  },
};
</script>

<style scoped>
.background {
  height: 100%;
}
.container {
  width: 800px;
  height: 550px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  padding-top: 10px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-image: url("/assets/register.jpg");
  background-size: cover;
}
.formContainer {
  width: 70%;
  margin: auto;
}
.orDivider {
  margin: 20px;
  text-align: center;
  font-size: 13px;
}
.titleSignin {
  text-align: center;
  margin: 20px;
  color: rgb(27, 79, 253);
  font-size: 40px;
}
</style>
