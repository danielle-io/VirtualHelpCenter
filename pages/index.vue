<template>
  <div>
    <section class="container">
      <h1 class="title">Testing Home Page</h1>
    </section>

    <div class="card-row">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">User Demo</div>
            <div class="md-subhead">Click here to go to the previous home page with a user demo</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/testing/user_demo">User Demo</nuxt-link>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Ticket Demo</div>
            <div class="md-subhead">Click here to go to the ticket demo!</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <nuxt-link to="/ticketUI">Ticket Demo</nuxt-link>
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
import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);

export default {
  async asyncData() {
    let { data } = await axios.get("/api/users");
    return { users: data };
  },
  head() {
    return {
      title: "Users"
    };
  }
};
</script>


<style scoped>
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}
.title {
  margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}

.md-card {
  width: 320px;
  margin: 14px;
  display: inline-block;
  vertical-align: top;
}

.card-row{
  display: inline-block;
}
</style>
