<style scoped>
.material-design-icon {
  margin-right: 10px !important;
  margin-top: 3px;
}

.tab-links {
  display: inline-block;
  margin-left: 4%;
  margin-right: 4%;
  font-size: 17px;
  cursor: pointer;
  opacity: 0.8;
  font-weight: 200;
}

.ticket-categories {
  color: #41408a;
}

.col-sm-3 {
  flex-wrap: wrap;
  flex: 0 0 20%;
}

.col {
  word-break: keep-all;
}

.requests-heading {
  border-bottom: 1px solid #b8b7c081;
}

/* The drop down styling */
.custom-select {
  border-color: white;
  width: 50%;
  border-bottom: 1px solid #ced4da;
}

.close-button {
  margin-right: 10px;
  font-size: 18px;
  border: none;
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
.card-line {
  display: in-line-block;
  margin-bottom: 10px;
  word-break: keep-all;
  font-size: 16px;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 14px;
}
.request-staff-buttons {
  width: 40% !important;
  opacity: 0.9;
}
.request-tabs {
  margin-top: 26px;
  margin-bottom: 6px;
  width: 100%;
  padding-bottom: 15px;
  display: inline-block;
  text-align: center;
}

.staff-container {
  position: relative;
  z-index: 999;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dadce0;
  border-radius: 8px;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-bottom: 2%;
  font-family: "Poppins";
  max-width: 800px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
}
.ticket-container {
  text-align: center;
  justify-content: center;
  height: 400px;
  overflow-y: scroll;
}
/* .md-card-content {
  word-wrap: break-word;
  flex-wrap: wrap;
  text-align: left;
}
.md-card {
  padding-top: 18px;
  padding-left: 12px;
  margin: 14px;
  display: inline-block;
  vertical-align: top;
} */
.selected-card {
  border-width: 1px !important;
  border-style: solid;
  border-color: rgb(151, 223, 233) !important;
}

.title {
  margin-top: 30px;
}
.chevron {
  z-index: 999;
  margin-bottom: 8px;
  opacity: 1;
  float: right;
  font-size: 30px;
  cursor: pointer;
  /* padding-top: 15px !important; */
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
    <button id="hiddenButton" style="display:none;" @click="triggerAccept"></button>

    <div class="staff-container">
      <div v-if="!this.connecting">
        <div class="requests-heading">
          <div v-if="this.openRequestTab" class="row" style="margin-bottom: 12px;">
            <span
              style="margin: auto;"
              v-if="this.selectedTicketIndex === -1 && !this.zoomLinkForm && this.tickets"
            >
              <!-- TODO: instead of tickets.length, get the filtered tickets length to hide message when no tickets show -->
              <div v-if="this.tickets.length > 0" class="heading-text-alt">Select an open request</div>
            </span>

            <span
              style="margin: auto;"
              v-if="this.selectedTicketIndex != -1 && !this.zoomLinkForm && this.tickets"
            >
              <!-- TODO: instead of tickets.length, get the filtered tickets length to hide message when no tickets show -->
              <div v-if="this.tickets.length > 0" class="heading-text-alt">Request Selected</div>
            </span>
          </div>

          <span v-if="this.selectedTicketIndex === -1 && this.staffCourses && this.openRequestTab">
            <div
              class="row"
              style="font-size: 20px !important; margin-bottom: 14px; margin-left: 15px;"
            >
              <span class="label-format-smaller" style="margin-right:14px;">
                <filter-icon />Filter:
              </span>
              <b-form-select
                style="display: in-line-block; width: 30%; color: #41408a; "
                v-model="course"
                :options="staffCourses"
                v-on:change="setClass"
              ></b-form-select>
            </div>
          </span>
        </div>

        <div v-if="this.openRequestTab">
          <div style="margin-top: 30px;" class="ticket-container">
            <div
              v-if="!this.zoomLinkForm && !this.tickets"
              class="sub-heading-text"
              style="padding-top:2%;"
            >There are currently no open tickets</div>

            <!-- Populate tickets -->
            <div v-if="!this.zoomLinkForm">
              <div
                v-for="(ticket, index) in (getFilterClass('Open', this.course).slice(this.startingIndex, this.endingIndex))"
                :key="ticket._id"
              >
                <!-- Selected index allows only that card to show when selected -->
                <!-- Selected-card class is bound to the card selection  -->
                <md-card
                  style=" margin-bottom: 10px; font-family: 'Manrope'; margin-left: 20px; margin-right: 20px; margin-top: 8px; padding-top:15px; padding-bottom: 34px;"
                  v-bind:class="{ 'selected-card': selectedTicketIndex === index}"
                >
                  <div style="cursor: pointer;" @click="clickCard(ticket, index, ticket._id)">
                    <div class="card-line">
                      <span class="row">
                        <span class="ticket-categories col-sm-3">
                          <student />
                          <strong>Student:</strong>
                        </span>
                        <span class="col">{{ " " + ticket.ownerName }}</span>
                      </span>
                    </div>

                    <div class="card-line">
                      <span class="row">
                        <span class="ticket-categories col-sm-3">
                          <clock />
                          <strong>Time:</strong>
                        </span>
                        <span
                          style="margin-left:0px;"
                          class="col"
                        >{{ " " + (ticket.createdAt.split('T')[1]).substring(0,5)}}</span>
                      </span>
                    </div>

                    <div class="card-line">
                      <span class="row">
                        <span class="ticket-categories col-sm-3">
                          <date />
                          <strong>Date:</strong>
                        </span>
                        <span
                          style="margin-left:0px;"
                          class="col"
                        >{{ (ticket.createdAt.split('T')[0].split('-')[1] + '-' + ticket.createdAt.split('T')[0].split('-')[2] + '-' + ticket.createdAt.split('T')[0].split('-')[0])}}</span>
                      </span>
                    </div>

                    <!-- <div class="card-line">
                      <span class="row">
                        <span class="ticket-categories col-sm-3">
                          <bell class="label-icons-smaller" />
                          <strong>Status:</strong>
                        </span>
                        <span style="margin-left:0px;" class="col-sm-6">{{ " " + ticket.status }}</span>
                      </span>
                    </div>-->

                    <div class="card-line">
                      <span class="row">
                        <span class="ticket-categories col-sm-3">
                          <short-description />
                          <strong>Overview:</strong>
                        </span>
                        <span class="col">{{ " " + ticket.oneLineOverview}}</span>
                      </span>
                    </div>
                  </div>

                  <div
                    v-bind:class="{ 'chevron': expandChevron, 'hidden': !expandChevron }"
                    @click="changeChevronClass"
                  >
                    <expand-arrow />
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
                    <div class="card-line">
                      <span class="row">
                        <span class="ticket-categories col-sm-3">
                          <long-description />
                          <strong>Details:</strong>
                        </span>
                        <span
                          style="margin-left: 16px;"
                          class="col"
                        >{{ " " + ticket.longerDescription}}</span>
                      </span>
                    </div>

                    <div v-if="ticket.attachments.length > 0">
                      <div class="card-line">
                        <span class="row">
                          <span class="ticket-categories col-sm-3">
                            <attachment />
                            <strong>Files:</strong>
                          </span>

                          <span
                            class="col"
                            v-for="(attachment, index) in (ticket.attachments)"
                            :key="index"
                          >
                            <a
                              style="cursor: pointer; color: rgb(45, 58, 130) !important; z-index: 999; 
                              text-shadow: none !important;"
                              @click="openPage(attachment.filePath, attachment.fileName)"
                            >
                              <open-in-new-window />
                              {{attachment.fileName}}
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>

                    <div v-if="ticket.attachments.length === 0">
                      <div class="card-line">
                        <span class="row">
                          <span class="ticket-categories col-sm-3">
                            <attachment />
                            <strong>Files:</strong>
                          </span>

                          <span style="margin-left: 16px;" class="col">None</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </md-card>
              </div>
              <!-- </div> -->
            </div>

            <button
              v-if="this.selectedTicketIndex != -1 && !this.zoomLinkForm"
              type="submit"
              class="request-staff-buttons"
              @click="getZoomLink"
              v-on:click="acceptTicket()"
            >
              <right-circle />Begin Session
            </button>

            <div style="margin-top: 30px;" v-if="this.zoomLinkForm">
              <div style="float: right; margin-right: 10px; ">
                <button class="close-button" v-on:click="cancelZoomLink">
                  <close style="color: red !important;" class="close-icon" />
                </button>
              </div>

              <div style="padding-top: 30px;">
                <input
                  type="text"
                  v-bind:value="zoomLink"
                  v-on:input="zoomLink = $event.target.value"
                  placeholder="Enter your Zoom Session link here"
                />
              </div>
              <div v-if="this.zoomLink">
                <button type="submit" class="request-staff-buttons" @click="sendZoomLink">
                  <right-circle />Send Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="this.requestHistoryTab">
          <!-- TO DO: make this text dynamic based on user tickets -->
          <div
            class="sub-heading-text"
            style="padding-top:2%;"
          >You have {{this.ticketHistory.length}} prior requests.</div>

          <div class="container-body">
            <div v-for="(ticket) in this.ticketHistory" :key="ticket._id">
              <md-card
                style="border: 1px solid #dde0e681; margin-bottom: 10px; padding-bottom: 8px; border-radius: 8px; padding-top:8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);"
              >
                <div class="md-card-content" style="margin-bottom:20px;">
                  <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <clock class="label-icons" />Date :
                      </span>
                      <span
                        class="col-sm-9 text-body"
                      >{{ (ticket.createdAt.split('T')[0].split('-')[1] + '-' + ticket.createdAt.split('T')[0].split('-')[2] + '-' + ticket.createdAt.split('T')[0].split('-')[0])}}</span>
                    </div>
                  </div>

                  <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <date class="label-icons" />Time:
                      </span>
                      <span
                        class="col-sm-9 text-body"
                      >{{ " " + (ticket.createdAt.split('T')[1]).substring(0,5)}}</span>
                    </div>
                  </div>

                  <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <bell class="label-icons" />Status:
                      </span>
                      <span class="col-sm-9 text-body">{{ ticket.status }}</span>
                    </div>
                  </div>

                  <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <short-description class="label-icons" />Overview:
                      </span>
                      <span class="col-sm-9 text-body">{{ ticket.oneLineOverview }}</span>
                    </div>
                  </div>

                  <div
                    v-bind:class="{ 'chevron': expandChevron, 'hidden': !expandChevron }"
                    @click="changeChevronClass"
                  >
                    <expand-arrow />
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
                    <div class="card-line-history">
                      <div class="row">
                        <span class="card-categories col-sm-3">
                          <long-description class="label-icons" />Details:
                        </span>
                        <span class="col-sm-9 text-body">{{ ticket.longerDescription }}</span>
                      </div>
                    </div>

                      <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <student class="label-icons" />Name:
                      </span>
                      <span
                        class="col-sm-9 text-body"
                      >{{ ticket.ownerName }}</span>
                    </div>
                  </div>
                  </div>
                </div>
              </md-card>
            </div>
          </div>
          <!-- TO DO: Make this message dynamic -->
          <!-- <div
            class="sub-heading-text"
            style="padding-top:2%;"
          >You currently have no request history.</div>-->
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

        <!-- <div class="row justify-content-center"> -->
        <div v-if="!this.currentTicket">
          <md-card>
            <md-card-header>
              <!-- TODO: put course title from db here -->
              <div class="md-title"></div>
            </md-card-header>

            <div class="card-line">
              <strong>Status:</strong>
              {{" " + this.currentTicket.status }}
            </div>

            <div class="card-line">
              <strong>Issue:</strong>
              {{" " + this.currentTicket.oneLineOverview}}
            </div>

            <div class="card-line"></div>

            <div
              v-bind:class="{ 'chevron': expandChevron, 'hidden': !expandChevron }"
              @click="changeChevronClass"
            >
              <expand-arrow />
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
              <div class="card-line">
                <strong>Longer Description:</strong>
                {{this.currentTicket.longerDescription}}
              </div>
              <div v-if="this.currentTicket.attachments.length > 0" class="card-line">
                <strong>Files:</strong>

                <span v-for="(attachment, index) in (this.currentTicket.attachments)" :key="index">
                  <a
                    style="cursor: pointer; color: rgb(45, 58, 130) !important; z-index: 999; 
                              text-shadow: none !important;
                              margin-top: 4px;
                              margin-left: 6px;"
                    @click="openPage(attachment.filePath, attachment.fileName)"
                  >
                    <open-in-new-window />
                    {{attachment.fileName}}
                  </a>
                </span>

                <div v-if="ticket.attachments.length === 0" class="card-line">
                  <strong>Files:</strong>

                  <span style="margin-left: 3px;">None</span>
                </div>
              </div>
            </div>
          </md-card>
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

const staffId = "5eade47047da2706382d53e6";

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
      staff: null,
      zoomLinkForm: false,
      openRequestTab: true,
      requestHistoryTab: false,
      selectedTicket: false,
      expandChevron: true,
      collapseChevron: false,
      color: "#7e6694",
      course: {},
      selected: "",
      staffClass: "none",
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
      ticketChannel: client.channels.get("tickets"),
      ticketHistory: []
    };
  },
  methods: {
    filterOpenTickets(status) {
      // if (this.tickets) {
      //   this.filteredTickets = this.tickets.filter(
      //     ticket => ticket.status === status
      //   );
      //   return this.filteredTickets;
      // } else {
      //   this.filteredTickets = [];
      //   return;
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
      this.studentAccepted = true;
      console.log("accepted " + this.studentAccepted);

      axios.put("/api/updateTicket/" + this.currentTicketId, {
        status: "In Progress",
        acceptedBy: {
          _id: staffId
        }
      });

      // Add the staff member to the ticket
    },
    getFilterClass(status, course) {
      // console.log(course);
      if (course === null) {
        // console.log("open tickets");
        return this.filterOpenTickets(status);
      } else {
        return this.filterCourseTickets(status, course);
      }
    },
    openPage: function(attachmentUrl) {
      console.log(this.openTicket);
      console.log(attachmentUrl);
      window.open(attachmentUrl, "_blank");
      // location.href = attachmentUrl;
    },
    filterCourseTickets(status, course) {
      // console.log(this.tickets);
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

    async getStudentName(ticket, ticketOwnerId) {
      var studentName = "";
      if (ticketOwnerId && ticket) {
        let studentResponse = await axios.get(
          "/api/users/" + ticketOwnerId
        );
        if (studentResponse) {
          if (studentResponse.data.name.firstName) {
            studentName =
              studentResponse.data.name.firstName +
              " " +
              studentResponse.data.name.lastName;
            // document.getElementById('studentName').innerHTML = studentName;
            this.$set(ticket, "ownerName", studentName);
          }
        }
      }
      return;
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
    // getAttachments: function(attachments){
    //   for (var i = 0; i < attachments.length; i++){

    //   }
    //   return
    // },
    changeChevronClass: function() {
      console.log("in change chevron");
      if (this.expandChevron) {
        this.collapseChevron = true;
        this.expandChevron = false;
      } else {
        this.expandChevron = true;
        this.collapseChevron = false;
      }
    },
    clickCard: function(ticket, index, id) {
      // selectedTicketIndex = the same as the index passed in means
      // card was selected twice
      if (index === this.selectedTicketIndex) {
        // The card already selected was selected again (unselect)
        console.log("unselect only");
        this.selectedTicketIndex = -1;
        this.startingIndex = 0;
        this.endingIndex = 3;
        this.currentTicket = null;
        this.currentTicketId = null;
      }

      // The card already selected was replaced by another selection,
      // or a card is selected for the first time
      else {
        this.selectedTicketIndex = index;
        this.startingIndex = index;
        this.endingIndex = index + 1;
        this.currentTicket = ticket;
        this.currentTicketId = id;
        console.log("selected ticket " + this.currentTicket);
        console.log(JSON.stringify(this.currentTicket));
      }
    },
    getZoomLink: function() {
      this.zoomLinkForm = true;
    },
    cancelZoomLink: function() {
      this.zoomLinkForm = false;
      axios.put("/api/updateTicket/" + this.currentTicketId, {
        status: "Open"
      });
    },

    // This is where the link is stored
    sendZoomLink() {
      console.log("ticket id is " + this.currentTicketId);
      let ticketTime = new Date();

      console.log("ticket is " + JSON.stringify(this.currentTicket));

      // Get the students user id from the ticket
      this.studentChannel = client.channels.get(this.currentTicket.owner._id);
      this.studentChannel.publish("staffAcceptedTicket", {
        zoomLink: this.zoomLink,
        date: ticketTime
      });

      //remove the ticket from open tickets
      this.ticketChannel.publish("ticketClosed", this.currentTicket);

      // Show connection screen once student receives countdown
      this.connecting = true;
      
      //If the student does not accept the session in time return to beginning
      let x = setTimeout(() => {
        // Right here we let it know the student did not accept
        console.log("student did not accept in time");
        axios.put("/api/updateTicket/" + this.currentTicketId, {
          status: "Unresolved"
        });
        this.connecting = false;
        this.zoomLinkForm = false;
        this.selectedTicketIndex = -1;
        this.startingIndex = 0;
        this.endingIndex = 3;
        this.currentTicket = null;
        this.currentTicketId = null;
      }, 5000);

      // Subscribe to an event on studentChannel to see if they accepted ticket
      this.studentChannel.subscribe("studentAcceptedSession", function(message) {
        document.getElementById("hiddenButton").click();
        this.studentAccepted = true;
        console.log("student accepted");
        clearTimeout(x);
      });

    },
    countdownTime(ticketTime) {
      //read updated time

      let currentTime = new Date();
      ticketTime.setMinutes(ticketTime.getMinutes() + 1);
      console.log(
        ticketTime.getMinutes() * 60 +
          ticketTime.getSeconds() -
          (currentTime.getMinutes() * 60 + currentTime.getSeconds())
      );

      return (
        (ticketTime.getMinutes() * 60 +
          ticketTime.getSeconds() -
          (currentTime.getMinutes() * 60 + currentTime.getSeconds())) *
        1000
      );
    },
    removeTicket(id){
      this.tickets = this.tickets.filter(ticket => ticket.status === "Open" && ticket._id != id);
    },
    expandCard: function() {},
    async acceptTicket() {
      this.getZoomLink();
      axios.put("/api/updateTicket/" + this.currentTicketId, {
        status: "Pending"
      });
    },
    // async loadUser(user) {
    //   if (user) {
    //     this.staff = user.data._id;
    //     console.log("user loaded");
    //   }
    // },
    // Sets the class to filter by based on dropdown
    async setClass(course) {
      if (course) {
        let chosenCourse = await axios.get("/api/courses/" + course);
        this.course = chosenCourse.data._id;
        // console.log(this.course);
      }
    },
    async loadClasses(classSelected) {
      if (classSelected) {
        let course = await axios.get("/api/courses/" + classSelected._id);
        var text = course.data.dep + " " + course.data.courseNum;
        this.staffCourses.push({ value: classSelected._id, text: text });
      }
    }
  },
  async created() {
    let tickets = await axios.get("/api/tickets");
    if (this.tickets) {
      this.tickets = tickets.data;
      // console.log(this.tickets);
      for (var i = 0; i < this.tickets.length; i++) {
        // Add the name to the open tickets
        if (this.tickets[i].status === "Open") {
          await this.getStudentName(this.tickets[i], this.tickets[i].owner._id);
        }
        if (this.tickets[i].status === "Closed") {
          await this.getStudentName(this.tickets[i], this.tickets[i].owner._id);
          this.ticketHistory.push(this.tickets[i]);
        }
      }
    }
    let staff = await axios.get("/api/users/" + staffId);

    if (staff) {
      staff.data.classes.forEach(element => {
        this.loadClasses(element);
      });
      let course = this.staffCourses[0];
      this.course = course.value
    }
  },
  beforeMount() {
    this.staffCourses.push({ value: null, text: "Show All Courses" });
    
    // This gets ANY ticket submitted by ANY student
    this.ticketChannel.subscribe("ticketUpdate", message => {
      console.log("ticket was added");

      //add new ticket to existing tickets
      this.getStudentName(message.data, message.data.owner._id)
      this.tickets.push(message.data);
    });

    this.ticketChannel.subscribe("ticketClosed", message => {
      console.log("ticket was deleted");

      //ticket will be deleted from being displayed
      this.removeTicket(message.data._id);
    });

    this.scrollToTop();

  }
  // computed: {
  //   studentAccepted() {
  //     return this.studentAccepted;
  //   }
  // }
};
</script>