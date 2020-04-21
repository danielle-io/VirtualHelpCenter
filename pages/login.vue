<template>
  <div>
    <div class="heading-text">Welcome.</div>
    <div class="sub-heading-text">Please log in or register to continue.</div>

    <div class="login-container">
      <div>
        <tabs :options="{ defaultTabHash: 'login-tab'}">
          <tab name="Login">
            <form class="login-form">
              <input type="text" id="login-tab" name="email" placeholder="email" />
              <input type="text" id="password" name="password" placeholder="password" />
              <nuxt-link to="/landingStudent" value="Continue">
                <button type="submit" class="fadeIn" value="Continue">
                  <right-circle />Continue
                </button>
              </nuxt-link>
            </form>
          </tab>
          <tab name="Register">
            <form class="login-form">
              <input
                type="text"
                id="login-tab"
                class
                name="email"
                placeholder="please enter your email"
              />
              <input
                type="text"
                id="password"
                class
                name="password"
                placeholder="create a password"
              />
              <input
                type="text"
                id="password"
                class
                name="password"
                placeholder="please re-enter your password"
              />

              <nuxt-link to="/createUser" href="/createUser" value="Continue">
                <input type="submit" to="/createUser" tag="button" value="Continue" />
              </nuxt-link>
            </form>
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>



<script>
import Vue from "vue";
export default {};
import { Tabs, Tab } from "vue-tabs-component";

Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
</script>


<style>
.arrow-right-circle-icon {
  margin-right: 10px;
}

.login-form {
  text-align: center;
}

.login-container {
  /* text-align: center;
  justify-content: center; */
  margin-left: 20%;
  margin-right: 20%;
  /* padding-left: 22%;
  padding-right: 22%; */
  font-family: "Manrope";
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  /* width: 90%; */
  max-width: px;
  /* position: relative; */
  /* padding: 0px; */
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  /* color: #0d0d0d; */
  /* border-bottom: 1px solid #5fbae9; */
}

/* FORM TYPOGRAPHY*/
button[type="button"],
button[type="submit"]
/* input[type="reset"]  */
 {
  background: linear-gradient(
    333deg,
    rgba(167, 115, 215, 0.72) 21%,
    rgba(169, 235, 244, 1) 75%
  );
  /* background-color: #806897; */
  border: none;
  color: white;
  letter-spacing: 0.5px;
  font-weight: bolder;
  font-size: 14px;
  /* padding: 15px 80px; */
  width: 85%;
  height: 50px;
  text-align: center !important;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(137, 118, 241, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 7px 7px 7px 7px;
  margin: 30px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button[type="button"]:hover,
button[type="submit"]:hover,
button[type="reset"]:hover {
  background-color: #987cb3;
}

button[type="button"]:active,
button[type="submit"]:active,
button[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"] {
  /* border-bottom-color: #f6f6f6; */
  /* border: none; */
  /* color: #0d0d0d; */
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
  border-left: none !important;
  border-right: none !important;
  border-top: none !important;
  border-bottom-color: #eee5e5 !important;
  /* border-bottom-color: #0d0d0d; */

  /* border: 2px solid #f6f6f6; */
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  /* border-radius: 5px 5px 5px 5px; */
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 1px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #241e1e;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
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

@keyframes fadeInDown {
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

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.7;
  -moz-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  animation-delay: 0.51s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  font-weight: 300 !important;
  /* background-color: #56baed; */
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
}

.underlineHover:hover:after {
  width: 100%;
  font-weight: 300 !important;
}

/* OTHERS */

/* *:focus {
  outline: none;
} */

#icon {
  width: 60%;
}

* {
  box-sizing: border-box;
}

/* TABS */

.tabs-component {
  margin: 4em 0;
}

.tabs-component-tabs {
  border: solid 1px #ececec;
  border-radius: 6px 6px 6px 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0px;
    padding-left: 0px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 15px;
  font-weight: 600;
  /* margin-right: 0 !important; */
  list-style: none;
}

.ul {
  margin-left: 0px;
}

.tabs-component-tab:not(:last-child) {
  /* border-bottom: dotted 1px #ddd; */
}

.tabs-component-tab:hover {
  color: #666;
}

/* .tabs-component-tab.is-active {
  color: green !important;
} */

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 7px 7px 0 0;
    /* margin-right: 0.5em; */
    width: 100%;
    font-weight: 100;

    transform: translateY(2px);
    transition: transform 0.3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 2px #fff;
    z-index: 2;
    /* transform: translateY(0); */
    font-weight: 300 !important;
    /* color: green !important; */
  }
}

.tabs-component-tab-a {
  /* color: inherit; */
  display: flex;
  padding: 0.65em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 0px 6px 6px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
    padding: 2em 2em;
  }
}
</style>
