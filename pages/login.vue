<style>
.login-fields {
  width: 100% !important;
  border-radius: 0 !important;
  background: none !important;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom-color: #eee5e5;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
}

.login-form {
  margin-top: 10px;
  padding-bottom: 15px;
  padding-left: 40px !important;
  padding-right: 40px !important;
}

input[type="text"]:focus,
input[type="password"] {
  background-color: #fff;
}

input[type="text"]:placeholder,
input[type="password"]:placeholder {
  color: #241e1e;
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 0.1s;
  animation-duration: 0.1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.login-container {
  position: relative;
  z-index: 999;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dadce0;
  border-radius: 8px;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-family: "Poppins";
  max-width: 800px;
  padding-top: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}
</style>

<template>
  <div style="margin-top: 5%;">
    <div style="font-size: 34px;" class="fadeIn heading-text">Welcome.</div>
    <div class="sub-heading-text" style="margin-top: 18px; font-size: 15px; color:white;">Please log in to continue.</div>

    <div class="login-container">
      <div>
        <form class="login-form">
          <input class="login-fields" type="text" id="login-tab" name="email" placeholder="email" />
          <input
            type="password"
            class="login-fields"
            id="password"
            name="password"
            placeholder="password"
          />

          <div style= "text-align: center; margin: auto;">
            <!-- <nuxt-link value="Continue">
              <button type="submit" value="Continue" @click="submit">
                <right-circle />Continue
              </button>
            </nuxt-link> -->
            <v-btn value="Continue" @click="$auth.loginWith('social')">
                <right-circle />Continue
              </v-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "~/plugins/axios";

export default {
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    submit() {
      console.log('cliked')
      // this.$auth.loginWith('social');
    }
  },
  beforeMount() {
    this.scrollToTop();
    //console.log(this.$auth)
  },
  mounted() {
    console.log(this.$auth)
  }
};
</script>



