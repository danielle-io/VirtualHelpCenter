<template>

  <md-tabs class="center-tabs" md-sync-route>
    <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
    <!-- <md-tab id="tab-request" md-label="Request" to="../request"></md-tab> -->

    <md-tab id="tab-request" md-label="Request" :to="'request/'+id"></md-tab>


    <md-tab id="tab-help" md-label="Help" to="../help"></md-tab>
  </md-tabs>
</template>


<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
export default {
  data (){
    return {
      id: "5e9bae3f29d3735cb4a44d3e"
      //5e9acbc4d629c26348bcc992
    }
  }
};
</script>



<style>
.button,
.button:visited {
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
  /* border-bottom: rgb(161, 160, 153); */
  border-width: 2px;
  position: relative;
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


