<template>
  <div class="nav">
    <section class="container">
      <h1 class="title">Testing Home Page</h1>
    </section>
    <div class="card-container">
      <div class="Row card-row">
        <!-- Felt it was time to take out the user demo page -->
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Ticket Insert Demo</div>
              <div class="md-subhead">Click here to go to the ticket insert demo!</div>
            </md-card-header-text>
          </md-card-header>

          <md-card-actions>
            <nuxt-link to="/ticketUI">Ticket Demo</nuxt-link>
          </md-card-actions>
        </md-card>
      </div>

      <div class="Row card-row">
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Ticket Display</div>
              <div class="md-subhead">Click here to See a display of the tickets</div>
            </md-card-header-text>
          </md-card-header>

          <md-card-actions>
            <nuxt-link to="/listTickets">Ticket Display</nuxt-link>
          </md-card-actions>
        </md-card>

        <div class="Row card-row">
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Database Ticket Content</div>
                <div class="md-subhead">This isn't working yet nvm</div>
              </md-card-header-text>
            </md-card-header>

            <md-card-actions>
              <nuxt-link to="/api/tickets/">DB Tickets</nuxt-link>
            </md-card-actions>
          </md-card>
        </div>
      </div>
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
  /* width: 100%; */
  text-align: center;
  padding-top: 20px;
  margin-top: 80px !important;
  /* margin-top: 80px; */
}
.nav {
  background-color: white;
  border-bottom-color: #646060;
}
.title {
  /* margin: 30px 0; */
  margin-top: 2px;
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
  min-width: 300px;
  max-width: 300px;
  /* margin: 14px; */
  justify-content: space-between;
  display: inline-block;
  vertical-align: top;
}
.card-container {
  margin-left: 10%;
  margin-right: 10%;
}

.card-row {
  display: flex !important;
  justify-content: space-evenly !important;
  flex-direction: row !important;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  width: 100%;
}
</style>
