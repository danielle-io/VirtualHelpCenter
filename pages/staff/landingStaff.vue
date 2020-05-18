<template>
  <div id="requests" style="position: relative;">
    <div class="staff-container">
      <!-- <div class="heading-two-text">Select a Request</div> -->
      <div v-if="!this.connecting">
        <div class="request-tabs">
          <a
            @click="switchToOpenRequestTab"
            v-bind:class="{ 'tab-links-active': openRequestTab, 'tab-links': !openRequestTab }"
          >Open Requests</a>

          <a
            v-bind:class="{ 'tab-links-active': requestHistoryTab, 'tab-links': !requestHistoryTab }"
            @click="switchToRequestHistoryTab"
          >Request History</a>
        </div>

        <div v-if="this.openRequestTab">
          <div class="ticket-container">
            <div
              v-if="!this.selectedCard"
              class="sub-heading-text"
              style="padding-top:2%;"
            >Select a request to continue.</div>

            <div class="row justify-content-center">
              <div class="col">
                <div v-for="(ticket, index) in this.openTickets" :key="index">
                  <a @click="clickCard">
                    <md-card
                      v-bind:class="{ 'selected-card': selectedCard, 'md-card': !selectedCard }"
                    >
                      <div>
                        <md-card-header>
                    <div class="md-title">CS 32</div>
                        </md-card-header>

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
                          I can't reference a class.
                          <!-- {{ticket.oneLineOverview}} -->
                        </div>

                        <div
                          v-bind:class="{ 'chevron': expandChevron, 'hidden': !expandChevron }"
                          @click="changeChevronClass"
                        >
                          <expand-arrow />
                        </div>
                      </div>
                      <div
                        @click="changeChevronClass"
                        v-bind:class="{ 'chevron': collapseChevron, 'hidden': !collapseChevron }"
                      >
                        <collapse-arrow />
                      </div>

                      <div
                        v-bind:class="{ 'show-extra-content': collapseChevron, 'hide-extra-content': expandChevron }"
                      >
                        <div class="md-card-content">
                          <strong>Longer Description:</strong>
                          I am trying to call a function from a class but importing gives an undefined error.
                        </div>
                        <div class="md-card-content">
                          <strong>Attached Files:</strong>
                        </div>

                        <div class="md-card-content">
                          <strong>Student:</strong>
                          Alex Lang
                        </div>
                      </div>
                    </md-card>
                  </a>
                </div>
              </div>
            </div>
            <button
              v-if="this.selectedCard"
              type="submit"
              class="request-staff-buttons"
              @click="startConnecting"
            >
              <right-circle />Begin Session
            </button>
          </div>
        </div>

        <div v-if="this.requestHistoryTab">
          <!-- TO DO: Make this message dynamic -->
          <div
            class="sub-heading-text"
            style="padding-top:2%;"
          >You currently have no request history.</div>

          <div class="ticket-container">
            <div class="row justify-content-center">
              <div class="col">
                <div v-for="(ticket, index) in this.closedTickets" :key="index">
                  <md-card>
                    <div class="md-card-content">
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

      <div v-if="this.connecting">
        <div class="heading-two-text">Connecting</div>
        <div class="loading-dots">
          <beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
        </div>
      </div>
    </div>
  </div>
</template>
      

 
<script>
import Vue from "vue";
import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import Ticket from "../../ui/models/Ticket"
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

export default {
  middleware: 'auth',
  async fetch() {
    const tickets = await Ticket.api().get('/tickets');
    console.log(tickets.entities);
  },
  head() {
    return {
      title: "Tickets"
    };
  },
  data() {
    return {
      el: "#requests",
      connecting: false,
      openRequestTab: true,
      requestHistoryTab: false,
      selectedTicket: false,
      expandChevron: true,
      collapseChevron: false,
      selectedCard: false,
      color: "#7e6694"
    };
  },
  methods: {
    filterOpenTickets(status) {
      //return this.tickets.filter(ticket => ticket.status === status);
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
    changeChevronClass: function() {
      if (this.expandChevron) {
        this.collapseChevron = true;
        this.expandChevron = false;
      } else {
        this.expandChevron = true;
        this.collapseChevron = false;
      }
      this.selectedCard = !this.selectedCard;
    },
    clickCard: function() {
      this.selectedCard = !this.selectedCard;
    },
    startConnecting: function() {
      this.connecting = true;
    },
    expandCard: function() {
      console.log(this.requestHistoryTab);
    }
  },
  beforeMount() {
    this.scrollToTop();
  },
  computed: {
    openTickets() {
        //console.log(this.user._id)
        let tickets = Ticket.query().where('status', 'Open').get()
        console.log(tickets)
        return tickets
      },
    closedTickets() {
        let tickets = Ticket.query().where('status', 'Closed').get()
          console.log(tickets)
          return tickets
    }
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
  font-size: 17px;
  /* margin-left: 15px;
  margin-right: 15px; */
  cursor: pointer;
  opacity: 0.8;
  font-weight: 200;
}
.tab-links-active {
  margin-left: 4%;
  margin-right: 4%;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  font-weight: 400 !important;
  text-decoration: underline;
  color: #0286a0 !important;
}

.loading-dots {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
}

.request-staff-buttons {
  width: 40% !important;
  opacity: 0.9;
}

.request-tabs {
  margin-top: 10px;
  margin-bottom: 6px;
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
  text-align: center;
  justify-content: center;
  height: 300px;
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
}
.md-card {
  width: 250px;
  margin: 14px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}
.selected-card {
  border-width: 1px !important;
  border-style: solid;
  border-color: rgb(151, 223, 233) !important;
  width: 250px;
  margin: 14px;
  display: inline-block;
  cursor: pointer;
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

.chevron {
  opacity: 1;
  float: right;
  align-items: left;
  font-size: 30px;
  cursor: pointer;
  padding-top: 15px !important;
}

.hidden {
  opacity: 0;
  display: none !important;
  float: left !important;
}

.show-extra-content {
  display: show;
}

.hide-extra-content {
  height: 0px;
  display: none;
}
</style>