<template>
  <div>
    <AppHeader/>
    <div>
      <nuxt/>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import Vue from "vue";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import MyFooter from "~/components/Footer.vue";
import AppHeader from '../components/AppHeader';
import 'vue-material-design-icons/styles.css';

import AccountCircle from 'vue-material-design-icons/AccountCircle.vue';
 
 
Vue.component('account-circle', AccountCircle);

export default {
  name: "TabContent",
  components: {
    MyFooter,
    AppHeader,
    
  }
};
</script>

<style>
</style>
