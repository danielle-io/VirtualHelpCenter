<template>
  <div style="position: relative;">
    <section class="header-title-container">
      <h1 style="color:white;" class="title">Testing Home Page</h1>
    </section>

    <div class="Row card-row">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Add Admin User</div>
            <div class="md-subhead">Add an Admin User</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link
            style="cursor: pointer; color: #56a2b1  !important; z-index: 999; 
                              text-shadow: none !important;"
            to="/internalAddAdmin"
          >Add an Admin User</nuxt-link>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Student Landing</div>
            <div
              class="md-subhead"
            >Student landing as if logged in as user id #5ec5f90d81b13d23065ead3e</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link
            style="cursor: pointer; color: #56a2b1  !important; z-index: 999; 
                              text-shadow: none !important;"
            to="/landingStudent/?userId=5ec5f90d81b13d23065ead3e"
          >Student Landing</nuxt-link>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Student Registration</div>
            <div class="md-subhead">If a student tries to login and has not yet made an account</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link
            style="cursor: pointer; color: #56a2b1  !important; z-index: 999; 
                              text-shadow: none !important;"
            to="/registerStudent"
          >Student Registration</nuxt-link>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Staff Landing</div>
            <div
              class="md-subhead"
            >The staff landing as if you are logged in as user id # 5eade47047da2706382d53e6</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link
            style="cursor: pointer; color: #56a2b1  !important; z-index: 999; 
                              text-shadow: none !important;"
            to="/landingStaff/?userId=5eade47047da2706382d53e6"
          >Staff Landing</nuxt-link>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Login</div>
            <div class="md-subhead">One login page for all users</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link
            style="cursor: pointer; color: #56a2b1  !important; z-index: 999; 
                              text-shadow: none !important;"
            to="/"
          >Login</nuxt-link>
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
          <nuxt-link
            style="cursor: pointer; color: #56a2b1 !important; z-index: 999; 
                              text-shadow: none !important;"
            to="/landingAdmin"
          >Admin Landing</nuxt-link>
        </md-card-actions>
      </md-card>
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
import User from "../ui/models/User";

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
  },
  mounted() {}
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
