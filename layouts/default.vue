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

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import MyFooter from "~/components/Footer.vue";
import AppHeader from '../components/AppHeader'


export default {
  name: "TabContent",
  components: {
    MyFooter,
    AppHeader
  }
};
</script>

<style>
</style>
