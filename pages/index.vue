<template>
  <div style="position: relative;">
    <section class="header-title-container">
      <h1 class="title">Testing Home Page</h1>
    </section>

    <div class="Row card-row">

      <!-- <md-card> -->
        <!-- <md-card-header>
          <md-card-header-text>
            <div class="md-title">Ticket Display</div>
            <div class="md-subhead">Click here to See a display of the tickets</div>
          </md-card-header-text>
        </md-card-header> -->

        <!-- <md-card-actions>
          <nuxt-link to="/testPages/listTickets">Ticket Display</nuxt-link>
        </md-card-actions>
      </md-card> -->

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Create User</div>
            <div
              class="md-subhead"
            >Note: This page seems to fail sometimes rn but shows up if you refresh</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/testPages/createUser">Create User</nuxt-link>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Student Landing</div>
            <div
              class="md-subhead"
            >Later student & staff landing will be one page, changed based on user's account</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/landingStudent">Student Landing</nuxt-link>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Staff Landing</div>
            <div
              class="md-subhead"
            >Later student & staff landing will be one page, changed based on user's account</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/landingStaff">Staff Landing</nuxt-link>
        </md-card-actions>
      </md-card>


        <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Staff Login</div>
            <div class="md-subhead">Temp page</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/testPages/loginStaff">Staff Login</nuxt-link>
        </md-card-actions>
      </md-card>

              <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Student Login</div>
            <div class="md-subhead">Temp page</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/testPages/loginStudent">Student Login</nuxt-link>
        </md-card-actions>
      </md-card>




      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Admin Landing</div>
            <div class="md-subhead">Admin users can specify TAs</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/landingAdmin">Admin Landing</nuxt-link>
        </md-card-actions>
      </md-card>

      <!-- <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Insert Ticket Request</div>
            <div class="md-subhead">Click here to go to the ticket request form</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link :to="'/request/'+id">Ticket Request</nuxt-link>
        </md-card-actions>
      </md-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Media"
};
</script>


<script>
import Vue from "vue";
//import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import User from "../store/models/User";

Vue.config.productionTip = false;
Vue.use(VueMaterial);

export default {
  data() {
    return {
      id: "5e9bc14dba244923803929d6"
    };
  },
  async fetch() {
    let { data } = await this.$axios.get("/users");

    User.insert({ data: data });
  },
  head() {
    return {
      title: "Users"
    };
  }
};
</script>


<style scoped>
.header-title-container {
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  width: 100%;
  padding: 50px 0;
}

/* .md-card:hover{
  opacity: .2;
} */

.md-card {
  min-width: 300px;
  max-width: 300px;
  margin-top: 2%;
  justify-content: space-between;
  display: inline-block;
  word-wrap: break-word;
  vertical-align: top;
}
.card-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
