<style scoped>
.card-text {
  word-wrap: break-word;
  word-break: break-all;
}
.material-design-icon {
  margin-right: 10px !important;
  margin-top: 3px;
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
  height: 400px;
  overflow-y: scroll;
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

.title {
  margin-top: 30px;
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


<template>
  <div id="requests" style="position: relative;">
    <button id="hiddenButton" style="display:none;" @click="triggerAccept"></button>

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

        <div class="row" style="justify-content: center; margin-top: 5px; align-content: center;">
          <div class="col-6">
            <div v-if="!this.selectedCard && this.staffCourses">
              <b-form-select v-model="course" :options="staffCourses" v-on:change="setClass"></b-form-select>
            </div>
          </div>
        </div>

        <div v-if="this.openRequestTab">
          <div class="ticket-container">
            <div v-if="!this.selectedCard && !this.zoomLinkForm && this.tickets">
              <!-- TODO: instead of tickets.length, get the filtered tickets length to hide message when no tickets show -->
              <div
                v-if="this.tickets.length > 0"
                class="sub-heading-text"
                style="padding-top:2%;"
              >Select a request to continue.</div>
            </div>

            <div
              v-if="!this.selectedCard && !this.zoomLinkForm && !this.tickets"
              class="sub-heading-text"
              style="padding-top:2%;"
            >There are currently no open tickets</div>

            <!-- Populate tickets -->
            <div v-if="!this.zoomLinkForm" class="row justify-content-center">
              <div class="col">
                <div
                  v-for="(ticket, index) in (getFilterClass('Open', this.course).slice(this.startingIndex, this.endingIndex))"
                  :key="ticket._id"
                >
                  <a @click="clickCard(ticket, index, ticket._id)">
                    <md-card v-bind:class="{ 'selected-card': selectedTicketIndex === index}">
                      <div>
                        <md-card-header>
                          <!-- TODO: put course title from db here -->
                          <div class="md-title"></div>
                        </md-card-header>

                        <!-- TODO: add student's name -->
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
                          <!-- I can't reference a class. -->
                          {{ticket.oneLineOverview}}
                        </div>
                        <div class="md-card-content"></div>
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
                          <!-- I am trying to call a function from a class but importing gives an undefined error. -->
                          {{ticket.longerDescription}}
                        </div>
                        <div class="md-card-content">
                          <strong>Attached Files:</strong>


                        </div>

                        <!-- TODO: add student's name from DB -->
                        <!-- <div class="md-card-content">
                          <strong>Student:</strong>
                          {{ticket.owner._id}}
                        </div>-->
                      </div>
                    </md-card>
                  </a>
                </div>
              </div>
            </div>

            <button
              v-if="this.selectedCard && !this.zoomLinkForm"
              type="submit"
              class="request-staff-buttons"
              @click="getZoomLink"
              v-on:click="acceptTicket()"
            >
              <right-circle />Begin Session
            </button>

            <div style="margin-top: 30px;" v-if="this.zoomLinkForm">
              <input
                width="90%"
                type="text"
                v-bind:value="zoomLink"
                v-on:input="zoomLink = $event.target.value"
                placeholder="Enter your Zoom Session link here"
              />

              <div v-if="this.zoomLink">
                <button type="submit" class="request-staff-buttons" @click="sendZoomLink">
                  <right-circle />Send Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="this.requestHistoryTab">
          <!-- TO DO: Make this message dynamic -->

          <!-- <div
            class="sub-heading-text"
            style="padding-top:2%;"
          >You currently have no request history.</div>-->

          <div class="ticket-container">
            <div class="row justify-content-center">
              <div class="col">
                <div v-for="(ticket, index) in filterOpenTickets('Closed')" :key="index">
                  <md-card>
                    <div class="md-card-content">
                      <!-- <div class="md-card-content"> -->
                      <!-- <strong>Student:</strong>
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
        <div v-if="!this.studentAccepted">
          <div class="heading-two-text">Awaiting Student Acceptance</div>
       
          <div v-if="!this.studentAccepted" class="loading-dots">
            <beat-loader :color="color"></beat-loader>
          </div>

          <div
            class="sub-heading-two-text"
          >Please prepare to begin the session. The student has 60 seconds to accept the request before it's canceled.</div>
        </div>

        <div v-if="this.studentAccepted">
          <div class="heading-two-text">Student Accepted</div>
         
          <div class="sub-heading-two-text">Please go to Zoom to begin your session.</div>
        </div>
        <div class="row justify-content-center">
          <div
            class="col"
            style="justify-content: center; text-align: center; align-items: center;"
          >
            <md-card>
              <div>
                <md-card-header>
                  <!-- TODO: put course title from db here -->
                  <div class="md-title"></div>
                </md-card-header>

                <!-- TODO: add student's name -->
                <!-- <div class="md-card-content">
                        <strong>Student:</strong>
                        <div class="card-text">{{ ticket.owner }}</div>
                </div>-->

                <div class="md-card-content">
                  <strong>Status:</strong>
                  {{ this.currentTicket.status }}
                </div>

                <div class="md-card-content">
                  <strong>Issue:</strong>
                  {{this.currentTicket.oneLineOverview}}
                </div>
                <div class="md-card-content">
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
                  {{this.currentTicket.longerDescription}}
                </div>
                <div class="md-card-content">
                  <strong>Attached Files:</strong>
                </div>

                <!-- TODO: add student's name from DB -->
                <div class="md-card-content">
                  <strong>Student:</strong>
                  <!-- {{this.currentTicket.owner._id}} -->
                </div>
              </div>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      

<script lang="text/javascript" src="https://cdn.ably.io/lib/ably.min-1.js"></script>
<script>
import Vue from "vue";
import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import { BFormInput, BFormSelect, BButton, BFormCheckbox } from "bootstrap-vue";
Vue.use(VueMaterial);

import * as Ably from "ably";

const client = new Ably.Realtime(process.env.ABLY_KEY);

export default {
  head() {
    return {
      title: "Tickets"
    };
  },
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-button": BButton,
    "b-form-checkbox": BFormCheckbox
  },
  data() {
    return {
      el: "#requests",
      connecting: false,
      zoomLinkForm: false,
      redirectToCountdown: false,
      openRequestTab: true,
      requestHistoryTab: false,
      selectedTicket: false,
      expandChevron: true,
      collapseChevron: false,
      selectedCard: false,
      color: "#7e6694",
      // course: {},
      course: {},
      selected: "",
      staffClass: "none",
      staff: "5eade62b47da2706382d53e8",
      zoomLink: null,
      selectedTicketIndex: -1,
      startingIndex: 0,
      endingIndex: 3,
      tickets: [],
      filteredTickets: [],
      staffCourses: [],
      studentChannel: null,
      currentTicket: null,
      currentTicketId: null,
      studentAccepted: false,
      ticketChannel: client.channels.get("tickets")
    };
  },
  methods: {
    filterOpenTickets(status) {
      // if (this.tickets) {
      //   this.filteredTickets = this.tickets.filter(
      //     ticket => ticket.status === status
      //   );
      //   console.log("filtering open tickets")
      //   return this.filteredTickets;
      // } 
      if (this.tickets) {
        console.log("filtering open tickets")
        return this.tickets.filter(ticket => ticket.status === status);
      }
  
      else {
        this.filteredTickets = [];
        return;
      }
    },
    triggerAccept: function() {
      console.log("in triggerAccept");
      console.log("accepted " + this.studentAccepted);
      this.studentAccepted = true;
      console.log("accepted " + this.studentAccepted);
    },
    getFilterClass(status, course) {
      console.log("filtering course")
      console.log(course);
      if (course === null) {
        console.log("open tickets");
        return this.filterOpenTickets(status);
      } else {
        console.log("filtering here")
        return this.filterCourseTickets(status, course);
      }
    },

    filterCourseTickets(status, course) {
      console.log(this.tickets);

      if (this.tickets) {
        // Prevents code from breaking when no course is in the ticket
        if (typeof course !== "undefined") {
          return this.tickets.filter(
            ticket => ticket.status === status && ticket.course._id === course
          );
        } else {
          return this.tickets.filter(ticket => ticket.status === status);
        }
      } else {
        this.filteredTickets = [];
        return;
      }
    },
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
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
    clickCard: function(ticket, index, id) {
      this.currentTicket = ticket;
      console.log("selected card below");
      console.log(this.currentTicket);

      this.currentTicketId = id;

      this.selectedCard = !this.selectedCard;
      if (this.selectedTicketIndex === index) {
        this.selectedTicketIndex = -1;
        this.startingIndex = 0;
        this.endingIndex = 3;
      } else {
        this.selectedTicketIndex = index;
        this.startingIndex = index;
        this.endingIndex = index + 1;
      }
    },
    getZoomLink: function() {
      this.zoomLinkForm = true;
    },
    

    startConnecting: function() {
      this.connecting = true;
    },

    // This is where the link is stored
    sendZoomLink: function() {
      axios.put("/api/updateTicket/" + this.currentTicketId, {
        status: "In Progress",
        accepted: this.staff
      });

      // Get the students user id from the ticket
      this.studentChannel = client.channels.get(this.currentTicket.owner._id);
      this.studentChannel.publish("staffAcceptedTicket", this.zoomLink);

      // Show connection screen once student receives countdown
      this.startConnecting();
      // this.studentChannel = client.channels.get(ticket.owner._id);

      setTimeout(function() {
        // Right here we let it know the student did not accept
      }, 120000);
      console.log("waiting on acceptance");

      // Subscribe to an event on studentChannel to see if they accepted ticket
      this.studentChannel.subscribe("studentAcceptedSession", function(
        message
      ) {
        document.getElementById("hiddenButton").click();
        this.studentAccepted = true;
        console.log("student accepted");
      });
    },
    expandCard: function() {},

    async acceptTicket() {
      console.log(" in accept ticket");
      this.getZoomLink();
    },

    async loadUser(user) {
      if (user) {
        this.staff = user.data._id;
        console.log("user loaded");
      }
    },

    // Sets the class to filter by based on dropdown
    async setClass(course) {
      console.log("setting class")
      if (course) {
        let chosenCourse = await axios.get("/api/courses/" + course);
        this.course = chosenCourse.data._id;
        
        console.log(this.course);
      }
      console.log(this.course);
    },

    async loadClasses(classSelected) {
      if (classSelected) {
        let course = await axios.get("/api/courses/" + classSelected._id);

        var text = course.data.dep + " " + course.data.courseNum;
        // console.log("adding " + course.data.dep + " id " + classSelected._id);
        this.staffCourses.push({ value: classSelected._id, text: text });
        console.log(this.staffCourses);
      }
    }
  },

  async created() {
    console.log("in created");
    let tickets = await axios.get("/api/tickets");

    if (this.tickets) {
      this.tickets = tickets.data;
    }
    let staff = await axios.get("/api/users/" + this.staff);

    if (staff) {
      staff.data.classes.forEach(element => {
        console.log(element);
        this.loadClasses(element);
      });
      console.log("Classes Loaded");
      
  
      let course = this.staffCourses[0];
      this.course = course.value
   

      console.log("this.course")
      console.log(this.course)


    this.loadUser(staff);
    }
  },

  beforeMount() {
    // var course = {_id = null};
    console.log("push all")
    this.staffCourses.push({ value: null, text: "Show All Courses" });

    // This gets ANY ticket submitted by ANY student
    this.ticketChannel.subscribe("ticketUpdate", function(message) {
      console.log(message.data);
      window.location.reload();
    });

    this.scrollToTop();
  }
};
</script>