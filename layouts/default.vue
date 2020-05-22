<template>
  <div>
    <AppHeader />
    <div>
      <nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Vue from "vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "../components/AppHeader";

import "vue-material-design-icons/styles.css";

import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import PlusCircle from "vue-material-design-icons/PlusCircle.vue";
import RightCircle from "vue-material-design-icons/ArrowRightCircle.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import Close from "vue-material-design-icons/Close.vue";

import BeatLoader from 'vue-spinner/src/BeatLoader.vue';

import CircularCountDownTimer from "vue-circular-count-down-timer";
Vue.use(CircularCountDownTimer);

Vue.component("account-circle", AccountCircle);
Vue.component("plus-circle", PlusCircle);
Vue.component("right-circle", RightCircle);
Vue.component("expand-arrow", ChevronDown);
Vue.component("close", Close);

Vue.component("collapse-arrow", ChevronUp);
Vue.component('beat-loader', BeatLoader);



export default {
  name: "TabContent",
  components: {
    AppHeader,
    AppFooter,
    
  }
};
</script>

<style>
</style>
