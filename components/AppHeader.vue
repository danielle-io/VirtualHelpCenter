
<template>
  <div class="main-nav">
    <div class="squiggle-container">
      <svg viewBox="-380 60 620 680" preserveAspectRatio="xMinYMin meet" class="squiggle">
        <path d="M1, 50 C10,200 550, 0 900, 1400 L1300,00 L100, 0 Z"/>
  <!--  example: <path d=" M0,100 C150,200 350,0 500,100   L500,00 L0,0 Z" style="stroke: none; fill:red;"></path> -->

      </svg>
    </div>

    <div class="green-circle"></div>

    <div class="tabs">
      <div class="logo">
        <span class="virtual">virtual</span>

        <span class="help">help</span>
      </div>
      <div class="right-nav">
        <nuxt-link class="link-styling" to="../login">home</nuxt-link>

        <nuxt-link class="link-styling" to="../help">help</nuxt-link>

        <nuxt-link class="link-styling" to="/">testing</nuxt-link>

        <nuxt-link class="link-styling" to="../account">
          <account-circle />
        </nuxt-link>
      </div>
      <!-- App background shapes -->

    <md-tab id="tab-request" md-label="Request" to="../request"></md-tab>
    </div>
  </div>
</template>


<script>
import Vue from "vue";

Vue.config.productionTip = false;
export default {};
</script>

    '~/assets/css/stylesheet.css',

<style>
.link-styling {
  margin-left: 10px;
  margin-right: 10px;
  color: #0090ad;

  font-family: "Manrope";
}

.md-theme-default a:not(.md-button) {
  color: #0090ad !important;
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

.button,
.button:visited {
  display: inline-block;
  color: rgb(36, 35, 35);
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover,
.button:focus {
  color: #fff;
  background-color: #000;
}

.main-nav {
  z-index: 999 !important;
  font-size: 15px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px;
  margin-left: 8px;
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
  font-size: 30px;
  font-weight: 200;
  color: #7436ad;
}

.help {
  color: #50bdcb;
  font-size: 30px;
  font-weight: 300;
}
.title {
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

.tabs {
  position: absolute;
  padding-top: 2%;
  padding-left: 2%;

  display: inline-block !important;
  /* align-items: flex-end; */
  /* border-bottom: rgb(161, 160, 153); */
  border-width: 2px;
  /* position: relative; */
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  border-top: 0;
}

html.md-theme-default {
  background-color: #ffffff !important;
  /* border-bottom-style: solid !important; 
  border-bottom-width: 3px !important;
  border-bottom-color: darkgray !important; */
  margin-bottom: 20px !important;
  padding-bottom: 30px !important;
}
</style>


