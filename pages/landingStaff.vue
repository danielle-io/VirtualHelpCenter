<template>
  <div id="requests" style="position: relative;">
    <div class="staff-container">
      <!-- <div class="heading-two-text">Select a Request</div> -->
      <div class="request-tabs">
          <!-- TO DO: make the class returned by a function so theres only 1 of each -->
          <a
            v-if="this.requestHistoryTab"
            class="tab-links"
            @click="switchToOpenRequestTab"
          >Open Requests</a>

          <a
            v-if="this.openRequestTab"
            class="tab-links-active"
            @click="switchToOpenRequestTab"
          >Open Requests</a>

          <a
            v-if="this.openRequestTab"
            class="tab-links"
            @click="switchToRequestHistoryTab"
          >Request History</a>

          <a
            v-if="this.requestHistoryTab"
            class="tab-links-active"
            @click="switchToRequestHistoryTab"
          >Request History</a>
        </div>

      <div v-if="this.openRequestTab">
        <div class="ticket-container">
          <div class="row justify-content-center">
            <div class="col">
              <div v-for="(ticket, index) in filterOpenTickets('Open')" :key="index">
                <md-card>
                  <!-- <md-card-header>
                    <div class="md-title">Open Request</div>
                  </md-card-header>-->

                  <!-- <div class="md-card-content">
                    <strong>Student:</strong>
                    <div class="card-text">{{ ticket.owner }}</div>
                  </div>-->

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
        </div>
      </div>

      <div v-if="this.requestHistoryTab">
        <!-- TO DO: Make this message dynamic -->
        <div class="sub-heading-text" style="padding-top:2%;">You currently have no request history.</div>

        <div class="ticket-container">
          <div class="row justify-content-center">
            <div class="col">
              <div v-for="(ticket, index) in filterOpenTickets('Closed')" :key="index">
                <md-card>
                  <div class="md-card-content">
                    <!-- <span class="add-button" @click="expandCard">
                    <plus-circle />
                    </span>-->

                    <!-- <div class="md-card-content">
                    <strong>Student:</strong>
                    {{ ticket.owner }}
                    </div>-->

                    <strong>Status:</strong>
                    {{ ticket.status }}
                    <strong>Issue:</strong>
                    {{ticket.oneLineOverview}}
                  </div>
                </md-card>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  data() {
    return {
      el: "#requests",
      openRequestTab: true,
      requestHistoryTab: false,
      selectedTicket: false
    };
  },
  methods: {
    filterOpenTickets(status) {
      return this.tickets.filter(ticket => ticket.status === status);
    },
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    switchToOpenRequestTab: function() {
      this.openRequestTab = true;
      this.requestHistoryTab = false;
      this.scrollToTop();
      return this.openRequestTab;
    },
    switchToRequestHistoryTab: function() {
      this.openRequestTab = false;
      this.requestHistoryTab = true;
      this.scrollToTop();
      return this.requestHistoryTab;
    },
    expandCard: function() {
      console.log(this.requestHistoryTab);
    }
  },
  beforeMount() {
    this.scrollToTop();
  }
};
</script>

<style scoped>
.card-text {
  word-wrap: break-word;
  word-break: break-all;
}
.tab-links {
  display: inline-block;
  margin-left: 4%;
  margin-right: 4%;
  font-size: 16px;
  /* margin-left: 15px;
  margin-right: 15px; */
  cursor: pointer;
  opacity: 0.8;
}
.tab-links-active {
  margin-left: 4%;
  margin-right: 4%;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  font-weight: 400 !important;
  text-decoration: underline;
}

.request-tabs {
  width: 100%;
  display: inline-block;
  text-align: center;
}
.staff-container {
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 6%;
  margin-bottom: 2%;
  font-family: "Poppins";
  min-width: 200px;
  border: solid 1px #ddd;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
}
.ticket-container {
  cursor: pointer;
  text-align: center;
  justify-content: center;
  height: 400px;
  overflow-y: scroll;
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
  word-wrap: break-word;
  flex-wrap: wrap;
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
</style>