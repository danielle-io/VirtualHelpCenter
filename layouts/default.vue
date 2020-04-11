// Tabs
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
