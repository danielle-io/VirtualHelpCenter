<template>
    <div class="header">
        <md-tabs class="center-tabs" md-sync-route>
          <md-tab id="tab-home" md-label="Home" to="/"></md-tab>

          <md-tab id="tab-request" md-label="Request" to="../request"></md-tab>

          <md-tab id="tab-help" md-label="Help" to="../help"></md-tab>
        </md-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
export default {
    
}
</script>

<style>
.button, .button:visited {
  display: inline-block;
  color: black;
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

.title {
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

.center-tabs {
  align-items: center;
  border-bottom: cornsilk;
  border-width: 1px;
}

#tab-request{
  border-bottom-color: #448aff;
}
</style>