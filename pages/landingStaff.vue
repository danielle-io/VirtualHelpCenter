<template>
  <div>
    <div class="heading-text">Requests</div>

    <!-- <div class="sub-heading-text"></div> -->

    <div class="request-container">
      <div class="heading-two-text">Select a Request</div>

      <section class="ticket-container">
          <div class="row justify-content-center">
            <div class="col">
              <div v-for="(ticket, index) in filterOpenTickets('Open')" :key="index">
                <md-card>
                  <md-card-header>
                    <div class="md-title">Ticket</div>
                  </md-card-header>

                  <div class="md-card-content">
                    <strong>Student:</strong>
                    {{ ticket.owner }}
                  </div>

                  <div class="md-card-content">
                    <strong>Status:</strong>
                    {{ ticket.status }}
                  </div>
                  <div class="md-card-content">
                    <strong>Issue:</strong>
                    {{ticket.oneLineOverview}}
                  </div>


                </md-card>
              </div>
            </div>
          
          </div>
      </section>
    </div>
  </div>
</template>
      

 
<script>
import Vue from "vue";
import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

export default {
  async asyncData() {
    let { data } = await axios.get("/api/tickets");
    return { tickets: data };
  },
  head() {
    return {
      title: "Tickets"
    };
  },
  methods: {
    filterOpenTickets(status) {
      return this.tickets.filter(ticket => ticket.status === status);
    }
  }
};
</script>

<style scoped>
.ticket-container {
  margin: 0;
  width: 100%;
  text-align: center;
  justify-content: center;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
.md-subhead {
  justify-content: left;
}

.md-card-content {
  text-align: left;
  line-height: 2px;
}
.md-card {
  width: 250px;
  margin: 14px;
  display: inline-block;
  vertical-align: top;
}

.card-row {
  display: inline-block;
}
.title {
  margin-top: 30px;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button {
  margin-top: 30px;
}
</style>