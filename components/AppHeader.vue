'~/assets/css/stylesheet.css',
<style>
.link-styling {
  margin-left: 10px;
  margin-right: 10px;
  color: #f1f8f8;
  font-family: "Manrope";
  font-size: 18px;
}

.md-theme-default a:not(.md-button) {
  color: #f4f5f5 !important;
  padding: 2px;
  text-shadow: 0.7px 0.7px #c3cbd6af;
}

.material-design-icon.icon-2x {
  height: 2em;
  width: 2em;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}

.right-nav {
  float: right;
  margin-right: 15px;
}

.main-nav {
  z-index: 999 !important;
  font-size: 18px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px;
  margin-left: 8px;
  padding-bottom: 30px;
}

.logo {
  font-family: "coveslight";
  float: left;
  padding-left: 2px;
  margin-left: 5px;
}

.line {
  margin-top: 10px;
  padding-top: 20px;
  font-size: 30px;
}

.v {
  font-size: 32px;
  font-weight: 300;
  color: #7436ad;
}
.virtual {
  font-size: 35px;
  font-weight: 200;
  color: #9963cc;
  text-shadow: 0.7px 0.7px #7099cfaf;
}

.help {
  color: white;
  font-size: 35px;
  font-weight: 300;
}

.tabs {
  position: fixed;
  position: absolute;
  padding-top: 2%;
  padding-left: 2%;
  display: inline-block !important;
  border-width: 2px;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  border-top: 0;
}

html.md-theme-default {
  background-color: #ffffff !important;
  margin-bottom: 20px !important;
  padding-bottom: 30px !important;
}
</style>



<template>
  <div class="main-nav">
    <div class="blue-curved-container">
      <svg viewBox="-420 60 620 180" preserveAspectRatio="xMinYMin meet" class="blue-curved">
        <path d="M1, 50 C70,180 550, 0 900, 1400 L1200,00 L100, 0 Z" />
        <!--  example: <path d=" M0,100 C150,200 350,0 500,100   L500,00 L0,0 Z" style="stroke: none; fill:red;"></path> -->
      </svg>
    </div>

    <div class="green-circle"></div>
    <div class="purple-circle-bottom"></div>

    <div class="tabs" id="tabs">
      <nuxt-link to="/">
        <div id="logo" class="logo">
          <span class="virtual">virtual</span>
          <span class="help">help</span>
        </div>
      </nuxt-link>

      <div class="right-nav">
        <nuxt-link class="link-styling" to="/">home</nuxt-link>

        <nuxt-link class="link-styling" to="../account">
          <account-circle />
        </nuxt-link>
      </div>
      <!-- <div v-if="$auth.loggedIn"> -->
        <!-- <v-btn text @click="$auth.logout()">Logout</v-btn> -->
      <!-- </div> -->
      <!-- App background shapes -->

      <div class="purple-circle"></div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";

Vue.config.productionTip = false;
export default {};
</script>

