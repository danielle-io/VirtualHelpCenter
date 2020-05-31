<template  >
  <div>
    <AppHeader />
    <div>
      <nuxt />
    </div>
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
import OpenNewWindow from "vue-material-design-icons/OpenInNew.vue";
import StarOutline from "vue-material-design-icons/StarOutline.vue";
import StarFilled from "vue-material-design-icons/Star.vue";
import StarHalf from "vue-material-design-icons/StarHalfFull.vue";
import AccountType from "vue-material-design-icons/AccountSupervisor.vue";
import ReSubmit from "vue-material-design-icons/Update.vue";
import Edit from "vue-material-design-icons/FileEdit.vue";
import Attachment from "vue-material-design-icons/Attachment.vue";
import LongDescription from "vue-material-design-icons/Text.vue";
import ShortDescription from "vue-material-design-icons/TextShort.vue";
import Check from "vue-material-design-icons/Check.vue";
import Code from "vue-material-design-icons/CodeJson.vue";
import Student from "vue-material-design-icons/Account.vue";
import Clock from "vue-material-design-icons/ClockOutline.vue";
import Label from "vue-material-design-icons/Label.vue";
import Restore from "vue-material-design-icons/Restore.vue";
import Bell from "vue-material-design-icons/BellRingOutline.vue";
import Filter from "vue-material-design-icons/FilterVariant.vue";
import Calendar from "vue-material-design-icons/Calendar.vue";

import BeatLoader from 'vue-spinner/src/BeatLoader.vue';

import CircularCountDownTimer from "vue-circular-count-down-timer";
Vue.use(CircularCountDownTimer);

Vue.component("account-circle", AccountCircle);
Vue.component("plus-circle", PlusCircle);
Vue.component("right-circle", RightCircle);
Vue.component("close", Close);
Vue.component("open-in-new-window", OpenNewWindow);
Vue.component("star-outline", StarOutline);
Vue.component("star-filled", StarFilled);
Vue.component("star-half-filled", StarHalf);
Vue.component("account-type", AccountType);
Vue.component("collapse-arrow", ChevronUp);
Vue.component("expand-arrow", ChevronDown);
Vue.component("re-submit", ReSubmit);
Vue.component("edit", Edit);
Vue.component("attachment", Attachment);
Vue.component("long-description", LongDescription);
Vue.component("short-description", ShortDescription);
Vue.component("check", Check);
Vue.component("code-symbol", Code);
Vue.component("student", Student);
Vue.component("clock", Clock);
Vue.component("label-icon", Label);
Vue.component("restore", Restore);
Vue.component("bell", Bell);
Vue.component("filter-icon", Filter);
Vue.component("date", Calendar);



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
