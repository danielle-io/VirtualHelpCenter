<template>
  <div>
    <div class="login-container">
      <div>
        <tabs :options="{ defaultTabHash: 'login-tab'}">
          <tab name="Login">
            <form class="login-form">
              <input
                type="text"
                id="login-tab"
                class="fadeIn second"
                name="login"
                placeholder="email"
              />
              <input
                type="text"
                id="password"
                class="fadeIn third"
                name="login"
                placeholder="password"
              />
              <input type="submit" class="fadeIn fourth" value="Continue" />
            </form>
          </tab>
          <tab name="Register">registration</tab>
        </tabs>
      </div>
      <!-- <div class="welcome">Welcome</div> -->
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
.login-form {
  text-align: center;
}

.login-container {
  margin-top: 30px;
  /* text-align: center;
  justify-content: center; */
  margin-left: 20%;
  margin-right: 20%;
  /* padding-left: 22%;
  padding-right: 22%; */
  font-family: "Manrope";
  border: 1px;
  border-color: grey;
}

/* a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
} */

/* STRUCTURE */
/* 
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
} */

.welcome {
  font-size: 30px;
  text-align: left;
  font-family: "Poppins";
  color: #624b77;
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

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/
input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #a081f1;
  /* border: none; */
  color: white;
  /* padding: 15px 80px; */
  width: 85%;
  height: 50px;
  text-align: center !important;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(137, 118, 241, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #39ace7;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
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
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  font-weight: 300 !important;

  background-color: #56baed;
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
  border: solid 1px #ddd;
  border-radius: 6px 6px 0px 0px;
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

.tabs-component-tab.is-active {
  color: #000;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    /* margin-right: 0.5em; */
    width: 100%;
    font-weight: 100;

    transform: translateY(2px);
    transition: transform 0.3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
    font-weight: 300 !important;
  }
}

.tabs-component-tab-a {
  align-items: center;
  /* color: inherit; */
  display: flex;
  padding: 0.65em 1em;
  text-decoration: none;
  font-weight: 300 !important;
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    padding: 4em 2em;
  }
}
</style>
