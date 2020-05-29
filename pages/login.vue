<style>
  .login-container {
    margin-left: 20%;
    margin-right: 20%;
    position: relative;
  }


  input[type="password"] {
    border-radius: 0 !important;
    background: none !important;
    padding-top: 15px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 12px;
    margin-bottom: 20px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85% !important;
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

  input[type="text"] {
    border-radius: 0 !important;
    background: none !important;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 8px;
    padding-right: 12px;
    margin-bottom: 20px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85% !important;
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

  input[type="text"]:focus {
    background-color: #fff;
    /* border-bottom: 1px solid #5fbae9; */
  }

  input[type="text"]:placeholder {
    color: #241e1e;
  }

  input[type="password"]:focus {
    background-color: #fff;
    border-bottom: 1px solid #5fbae9;
  }

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
    <div class="heading-text">Welcome.</div>
    <div class="sub-heading-text">Please log in to continue.</div>

    <div class="login-container">
      <div>
        <form class="login-form">
          <input type="text" id="login-tab" name="email" placeholder="email" />
          <input type="password" id="password" name="password" placeholder="password" />
          <nuxt-link to="students/landingStudent" value="Continue">
            <button type="submit" style="margin-bottom: 20%;" class="fadeIn" value="Continue">
              <right-circle />Continue
            </button>
          </nuxt-link>
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
    }
  },
  beforeMount() {
    this.scrollToTop();
  },
  mounted() {}
};
</script>



