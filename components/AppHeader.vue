
<template>

  <div class="main-nav">
    <div class="tabs">
      <div class="logo">
        <span class="virtual">virtual</span>
        <!-- <span class="line">|</span> -->
        <span class="help">help</span>
      </div>
      <div class="right-nav">
        <nuxt-link class="link-styling" to="../login">home</nuxt-link>

        <nuxt-link class="link-styling" to="../help">help</nuxt-link>

        <nuxt-link class="link-styling" to="/">testing</nuxt-link>

        <nuxt-link class="link-styling" to="../account">
        <account-circle />

          <!-- <span class="material-icons">account_circle</span> -->
          <!-- <span class="material-icons">account_circle</span> -->
        </nuxt-link>
      </div>

      <!-- <md-tabs md-sync-route>
       
        <md-tab id="tab-logo" class="left-nav" style="float: left; position: relative; flex: 1;" md-label="Virtual Help Center" to="/"></md-tab>

        <md-tab id="tab-home" class="right-nav"  style="float: right;" md-label="Home" to="/"></md-tab>

        <md-tab id="tab-request" style="float: right;"  md-label="Request" :to="'request/'+id"></md-tab>

        <md-tab id="tab-help"  style="float: right;" md-label="Help" to="../help"></md-tab>
      </md-tabs>-->
    </div>
  </div>
</template>


<script>

import Vue from "vue";
// import VueMaterial from "vue-material";
// import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";


Vue.config.productionTip = false;
// Vue.use(VueMaterial);
export default {
  data() {
    return {
      id: "5e99fbef1c9d44000013dcb1"
    };
  }
};
</script>



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

.virtual {
  font-size: 30px;
  font-weight: 200;
  color: #01244c;
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

md-tabs {
  background-color: white;
}

#tab-request {
  border-bottom-color: #448aff;
}
</style>


