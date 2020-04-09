// Tabs
<template>
  <div>
    <md-tabs class="center-tabs" md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>

      <md-tab id="tab-request" md-label="Request" to="../request"></md-tab>

      <md-tab id="tab-help" md-label="Help" to="../help"></md-tab>
    </md-tabs>
    <nuxt />

    <my-footer />
  </div>
</template>

<script>
import MyFooter from "~/components/Footer.vue";

export default {
  name: "TabContent",
  components: {
    MyFooter
  }
};
</script>

<style>
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

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
  border-bottom: cornsilk;
  border-width: 1px;
}
</style>
