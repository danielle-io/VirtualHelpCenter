<style scoped>
.material-design-icon {
  margin-right: 10px !important;
  margin-top: 3px;
}
.md-dialog-container.md-theme-default {
  width: 50% !important;
}
.md-button .md-ripple {
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white !important;
  box-shadow: 0 10px 30px 0 white !important;
}
.md-button.md-theme-default {
  color: rgba(0, 0, 0, 0.87);
  color: rgba(0, 0, 0, 0.87);
  color: var(
    --md-theme-default-text-primary-on-background,
    rgba(0, 0, 0, 0.87)
  );
  border: none !important;
  background: none !important;
  box-shadow: 0 10px 30px 0 white !important;
}
.md-ripple {
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none !important;
  box-shadow: 0 10px 30px 0 white !important;
}
.md-dialog-container.md-theme-default {
  width: 50% !important;
}
.md-button.md-theme-default.md-primary {
  color: #448aff !important;
  background: none !important;
  box-shadow: none !important;
  color: var(--md-theme-default-primary-on-background, #448aff);
}
.md-dialog {
  position: fixed;
  z-index: 9999 !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  display: flex;
  transition-duration: 0.2s;
}
.md-dialog-alert {
  z-index: 9999;
}
.disabled-button {
  width: 40% !important;
  cursor: default !important;
  background-color: #d3d3d3 !important;
  opacity: 0.2;
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
.extra-padding {
  font-size: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
}
.dialog-showing {
  opacity: 0.9;
}
.dialog-hidden {
  opacity: 1;
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
.card-categories {
  color: #53a59e;
  font-weight: 500;
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
  z-index: 900;
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
input[type="text"] {
  color: #0d0d0d;
  text-align: left;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 100%;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
input[type="text"]:focus {
  border-bottom: 2px solid #5fbae9;
}
input[type="text"]:placeholder {
  color: #cccccc;
}
.form-buttons-disabled {
  width: 40% !important;
  cursor: dafualt !important;
  background-color: #d3d3d3 !important;
}
button[type="submit"] {
  background-color: #fff !important;
}
</style>


<template>
  <div>
    <client-only>
      <md-dialog-confirm
        style="z-index: 9999; padding-left: 50px; padding-right:50px"
        :md-active.sync="showCloseSessionDialog"
        md-title="Mark Session Complete"
        md-content="Are you ready to close the session?"
        md-confirm-text="Yes, mark complete"
        md-cancel-text="No"
        clickOutsideToClose="true"
        @md-cancel="showCloseSessionDialog = false;"
        @md-confirm="confirmCloseSession()"
      />
    </client-only>

    <client-only>
      <md-dialog
        style="margin-left: 200px; margin-right: 200px;"
        :md-active.sync="showCanceledRequestDialog"
        md-title="Request Canceled"
        md-content="Due to missing the acceptance window, the student's request has been removed from the queue. You may select a new request to complete, if one is available."
        md-confirm-text="Okay"
        clickOutsideToClose="true"
        class="accept-button"
        @md-confirm="showCanceledRequestDialog = false;"
      />
    </client-only>

    <div id="requests" style="position: relative;">
      <button id="hiddenButton" style="display:none;" @click="triggerAccept"></button>

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

      <div
        class="staff-container"
        v-bind:class="{ 'dialog-showing': showCanceledRequestDialog || showCloseSessionDialog, 'dialog-hidden': !showCanceledRequestDialog && !showCloseSessionDialog}"
      >
        <div v-if="!this.connecting">
          <!-- <div class="requests-heading"> -->
          <div v-if="this.openRequestTab" class="row" style="margin-bottom: 12px;">
            <span style="margin: auto;" v-if="this.selectedTicketIndex === -1 && this.tickets">
              <!-- TODO: instead of tickets.length, get the filtered tickets length to hide message when no tickets show -->
              <div v-if="this.tickets.length > 0" class="heading-text-alt">Select an open request</div>
            </span>

            <span style="margin: auto;" v-if="this.selectedTicketIndex != -1 && this.tickets">
              <!-- TODO: instead of tickets.length, get the filtered tickets length to hide message when no tickets show -->
              <div v-if="this.tickets.length > 0" class="heading-text-alt">Request Selected</div>
            </span>
          </div>

          <span v-if="this.selectedTicketIndex === -1 && this.staffCourses && this.openRequestTab">
            <div
              class="row"
              style="font-size: 5px !important; margin-bottom: 14px; margin-left: 15px;"
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

          <div v-if="this.openRequestTab">
            <div style="margin-top: 10px;" class="ticket-container">
              <div
                v-if="!this.tickets"
                class="sub-heading-text"
                style="padding-top: 10px;"
              >There are currently no open requests</div>

              <div v-if="this.tickets && this.allOpenTicketsAmount" class="sub-heading-text">
                There {{this.getSingleOrPlural()}} currently
                <span
                  style="font-weight: 600"
                >{{this.allOpenTicketsAmount}}</span>
                open {{this.getRequestOrRequests()}}.
              </div>
              <div>
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
                          >{{ " " + formatTime((ticket.createdAt.split('T')[1]).substring(0,5))}}</span>
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
                      v-bind:class="{ 'chevron': ticket.expandChevron, 'hidden': !ticket.expandChevron }"
                      @click="changeChevronClass(ticket)"
                    >
                      <expand-arrow />
                    </div>

                    <div
                      @click="changeChevronClass(ticket)"
                      v-bind:class="{ 'chevron': ticket.collapseChevron, 'hidden': !ticket.collapseChevron }"
                    >
                      <collapse-arrow />
                    </div>

                    <div
                      v-bind:class="{ 'show-extra-content': ticket.collapseChevron, 'hide-extra-content': !ticket.collapseChevron }"
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
              </div>

              <button
                v-if="this.selectedTicketIndex != -1"
                type="submit"
                class="request-staff-buttons"
                @click="sendZoomLink"
                v-on:click="acceptTicket()"
              >
                <right-circle />Begin Session
              </button>
            </div>
          </div>
        </div>

        <div v-if="this.requestHistoryTab">
          <div
            class="sub-heading-text"
            style="padding-top:2%;"
            v-bind:class="{ 'extra-padding': this.ticketHistory.length === 0 }"
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
                        <date class="label-icons" />Date :
                      </span>
                      <span class="col-sm-9 text-body">
                        {{ (ticket.createdAt.split('T')[0].split('-')[1] + '-' + ticket.createdAt.split('T')[0].split('-')[2] + '-' +
                        ticket.createdAt.split('T')[0].split('-')[0])}}
                      </span>
                    </div>
                  </div>

                  <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <clock class="label-icons" />Time:
                      </span>
                      <span
                        class="col-sm-9 text-body"
                      >{{ " " + formatTime((ticket.createdAt.split('T')[1]).substring(0,5))}}</span>
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
                    v-bind:class="{ 'chevron': ticket.expandChevron, 'hidden': !ticket.expandChevron }"
                    @click="changeChevronClass(ticket)"
                  >
                    <expand-arrow />
                  </div>

                  <div
                    @click="changeChevronClass(ticket)"
                    v-bind:class="{ 'chevron': ticket.collapseChevron, 'hidden': !ticket.collapseChevron }"
                  >
                    <collapse-arrow />
                  </div>

                  <div
                    v-bind:class="{ 'show-extra-content': ticket.collapseChevron, 'hide-extra-content': ticket.expandChevron }"
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
                        <span class="col-sm-9 text-body">{{ ticket.ownerName }}</span>
                      </div>
                    </div>

                    <div v-if="ticket.attachments.length > 0">
                      <div class="card-line">
                        <span class="row">
                          <span class="card-categories col-sm-3">
                            <attachment class="label-icons" />Files:
                          </span>

                          <span
                            class="col"
                            v-for="(attachment, index) in (ticket.attachments)"
                            :key="index"
                          >
                            <a
                              class="text-body"
                              style="cursor: pointer; color: rgb(45, 58, 130) !important; z-index: 999; 
                              text-shadow: none !important; font-size: 14px;@@"
                              @click="openPage(attachment.filePath, attachment.fileName)"
                            >
                              <open-in-new-window />
                              {{attachment.fileName}}
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </md-card>
            </div>
          </div>
        </div>

        <div v-if="this.connecting">
          <div v-if="!this.studentAccepted">
            <div class="heading-two-text">Awaiting Student Acceptance</div>

            <div class="loading-dots">
              <beat-loader :color="connectingColor"></beat-loader>
            </div>

            <div
              class="sub-heading-two-text"
            >Please prepare to begin the session. The student has 60 seconds to accept the request before it's canceled.</div>
          </div>

          <div v-if="this.studentAccepted">
            <div class="heading-two-text">Student Accepted</div>

            <div class="sub-heading-two-text">Please go to Zoom to begin your session.</div>
          </div>

          <div v-if="this.currentTicket">
            <md-card
              style="border: 1px solid #dde0e681; margin-bottom: 10px; padding-bottom: 8px; border-radius: 8px; padding-top:8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);"
            >
              <div class="md-card-content" style="margin-bottom:20px;">
                <div class="card-line-history">
                  <div class="row">
                    <span class="card-categories col-sm-3">
                      <date class="label-icons" />Date :
                    </span>
                    <span
                      class="col-sm-9 text-body"
                    >{{ (this.currentTicket.createdAt.split('T')[0].split('-')[1] + '-' + this.currentTicket.createdAt.split('T')[0].split('-')[2] + '-' + this.currentTicket.createdAt.split('T')[0].split('-')[0])}}</span>
                  </div>
                </div>

                <div class="card-line-history">
                  <div class="row">
                    <span class="card-categories col-sm-3">
                      <clock class="label-icons" />Time:
                    </span>
                    <span
                      class="col-sm-9 text-body"
                    >{{ " " + formatTime((this.currentTicket.createdAt.split('T')[1]).substring(0,5))}}</span>
                  </div>
                </div>

                <div class="card-line-history">
                  <div class="row">
                    <span class="card-categories col-sm-3">
                      <short-description class="label-icons" />Overview:
                    </span>
                    <span class="col-sm-9 text-body">{{ this.currentTicket.oneLineOverview }}</span>
                  </div>
                </div>

                <div
                  v-bind:class="{ 'chevron': this.currentTicket.expandChevron, 'hidden': !this.currentTicket.expandChevron }"
                  @click="changeChevronClass"
                >
                  <expand-arrow />
                </div>

                <div
                  @click="changeChevronClass"
                  v-bind:class="{ 'chevron': this.currentTicket.collapseChevron, 'hidden': !this.currentTicket.collapseChevron }"
                >
                  <collapse-arrow />
                </div>

                <div
                  v-bind:class="{ 'show-extra-content': this.currentTicket.collapseChevron, 'hide-extra-content': this.currentTicket.expandChevron }"
                >
                  <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <long-description class="label-icons" />Details:
                      </span>
                      <span class="col-sm-9 text-body">{{ this.currentTicket.longerDescription }}</span>
                    </div>
                  </div>

                  <div class="card-line-history">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <student class="label-icons" />Name:
                      </span>
                      <span class="col-sm-9 text-body">{{ this.currentTicket.ownerName }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </md-card>
          </div>

          <div v-if="this.studentAccepted">
            <md-card>
              <div
                style="padding-top:12px; padding-bottom: 18px; justify-content: center; text-align: center; align-items: center;"
              >
                <span
                  style="font-size: 28px; color: #53a59e;  justify-content: center;
  align-items: center; cursor:pointer;"
                >
                  <check-circle
                    @click="showCloseSessionDialog = true"
                    style="height: 1.4em !important;"
                  />
                </span>

                <span
                  style="margin-bottom: 10px; cursor:pointer;"
                  @click="showCloseSessionDialog = true"
                  class="sub-heading-text"
                >Mark session complete</span>
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
import { BFormInput, BFormSelect, BFormTextarea, BButton } from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import Ticket from "../ui/models/Ticket";

Vue.use(VueMaterial);
import * as Ably from "ably";
const client = new Ably.Realtime(process.env.ABLY_KEY);
export default {
  // async fetch() {
  //   //const tickets = await Ticket.api().get('/tickets');
  // },
  head() {
    return {
      title: "Staff"
    };
  },
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-button": BButton,
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect
    // codemirror
  },
  data() {
    return {
      el: "#requests",
      connecting: false,
      connectingColor: "#7e6694",
      staff: null,
      openRequestTab: true,
      requestHistoryTab: false,
      selectedTicket: false,
      course: {},
      selected: "",
      zoomLink: null,
      selectedTicketIndex: -1,
      startingIndex: 0,
      endingIndex: 3,
      tickets: [],
      filteredTickets: [],
      staffCourses: [],
      currentTicket: null,
      currentTicketId: null,
      studentAccepted: false,
      ticketHistory: [],
      showCanceledRequestDialog: false,
      showCloseSessionDialog: false,
      staffId: null,
      allOpenTicketsAmount: null
    };
  },
  methods: {
    filterOpenTickets(status) {
      if (this.tickets) {
        console.log("filtering open tickets");
        return this.tickets.filter(ticket => ticket.status === status);
      } else {
        this.filteredTickets = [];
        return;
      }
    },
    filterAllTickets(status) {
      this.filteredTickets = [];
      this.staffCourses.forEach(element => {
        return this.tickets.filter(ticket => ticket.course._id === status);
      });
      return this.filteredTickets;
    },
    triggerAccept: function() {
      this.studentAccepted = true;
      console.log("accepted " + this.studentAccepted);
      axios.put("/api/updateTicket/" + this.currentTicketId, {
        status: "In Progress",
        acceptedBy: {
          _id: this.staffId
        }
      });
    },

    async getOpenTicketCount() {
      console.log("getting open tickets");
      let allOpenTickets = await axios.get("/api/tickets/getOpenTickets");
      if (allOpenTickets) {
        console.log(allOpenTickets);
        console.log(allOpenTickets.data.length);
        this.allOpenTicketsAmount = allOpenTickets.data.length;
      }
    },
    formatTime(time) {
      var timeStr = " AM";
      var splitTime = time.split(":");
      if (splitTime[0] > 12) {
        timeStr = " PM";
      }
      var hours = ((splitTime[0] + 11) % 12) + 1;
      return hours + ":" + splitTime[1] + timeStr;
    },
    getFilterClass(status, course) {
      var tickets = [];
      if (course === null) {
        tickets = this.filterOpenTickets(status);
      } else {
        return this.filterCourseTickets(status, course);
      }
      return tickets;
    },
    openPage: function(attachmentUrl) {
      console.log(this.openTicket);
      console.log(attachmentUrl);
      window.open(attachmentUrl, "_blank");
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
        let studentResponse = await axios.get("/api/users/" + ticketOwnerId);
        if (studentResponse) {
          if (studentResponse.data.name.firstName) {
            studentName =
              studentResponse.data.name.firstName +
              " " +
              studentResponse.data.name.lastName;
            this.$set(ticket, "ownerName", studentName);
            this.$set(ticket, "expandChevron", true);
            this.$set(ticket, "collapseChevron", false);
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

    getRequestOrRequests: function() {
      if (this.allOpenTicketsAmount === 1) {
        return "request";
      }
      if (this.allOpenTicketsAmount === 0) {
        return "no";
      }
      return "requests";
    },
    getSingleOrPlural: function() {
      if (this.allOpenTicketsAmount === 1) {
        return "is";
      }
      return "are";
    },
    changeChevronClass: function(ticket) {
      if (ticket.expandChevron) {
        ticket.expandChevron = false;
        ticket.collapseChevron = true;
      } else {
        ticket.expandChevron = true;
        ticket.collapseChevron = false;
      }
    },
    chevronToggle: function(ticketId) {
      return;
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
    // This is where the link is stored
    sendZoomLink() {
      let ticketTime = new Date();

      // Get the students user id from the ticket
      var studentChannel = client.channels.get(this.currentTicket.owner._id);
      studentChannel.publish("staffAcceptedTicket", {
        zoomLink: this.zoomLink,
        date: ticketTime
      });

      // Remove the ticket from open tickets
      var ticketChannel = client.channels.get("tickets");
      ticketChannel.publish("ticketInProgress", this.currentTicket);

      // Show connection screen once student receives countdown
      this.connecting = true;
      console.log(this.connecting);
      //If the student does not accept the session in time return to beginning

      let x = setTimeout(() => {
        console.log("student did not accept in time");
        this.showCanceledRequestDialog = true;
        axios.put("/api/updateTicket/" + this.currentTicketId, {
          status: "Unresolved"
        });
        this.resetBackToOpenTicketsDisplay();
      }, this.countdownTime(ticketTime));
    },
    resetBackToOpenTicketsDisplay() {
      if (this.currentTicket) {
        console.log(
          "current ticket exists: removing current ticket " +
            JSON.stringify(this.currentTicket)
        );
        var id = this.currentTicket._id;
        this.removeTicketFromTicketUI(id);
      }
      this.studentAccepted = true;
      this.connecting = false;
      this.selectedTicketIndex = -1;
      this.startingIndex = 0;
      this.endingIndex = 3;
      this.currentTicket = null;
      this.currentTicketId = null;
      this.selectedTicket = false;
    },
    countdownTime(ticketTime) {
      var studentChannel = client.channels.get(this.currentTicket.owner._id);

      studentChannel.subscribe("studentAcceptedSession", function(message) {
        console.log("accepted session");
        document.getElementById("hiddenButton").click();
        this.triggerAccept();
        clearTimeout(x);
      });
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
    removeTicketFromTicketUI(id) {
      this.tickets = this.tickets.filter(
        ticket => ticket.status === "Open" && ticket._id != id
      );
    },
    compareTicketsRev(ticketA, ticketB) {
      if (ticketA.updatedAt > ticketB.updatedAt) {
        return 1;
      } else if (ticketA.updatedAt < ticketB.updatedAt) {
        return -1;
      }
      return 0;
    },
    confirmCloseSession() {
      this.showCloseSessionDialog = false;
      var studentChannel = client.channels.get(this.currentTicket.owner._id);
      studentChannel.publish("ticketMarkedClosed", {});
      this.resetBackToOpenTicketsDisplay();
      // Update the ticket status to closed in the db
      if (this.currentTicket) {
        console.log(
          "current ticket exists: removing current ticket " +
            JSON.stringify(this.currentTicket)
        );
        var id = this.currentTicket._id;
        this.removeTicketFromTicketUI(id);
        axios.put("/api/updateTicket/" + id, {
          status: "Closed"
        });
      }
    },
    async acceptTicket() {
      //remove the ticket from open tickets
      console.log("removing ticket");
      var ticketChannel = client.channels.get("tickets");

      ticketChannel.publish("ticketClosed", this.currentTicket);
      axios.put("/api/updateTicket/" + this.currentTicketId, {
        status: "Pending"
      });
    },

    // Sets the class to filter by based on dropdown
    async setClass(course) {
      if (course) {
        let chosenCourse = await axios.get("/api/courses/" + course);
        this.course = chosenCourse.data._id;
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
    Ticket.insert(tickets);
    //let staff = await axios.get("/api/users/" + this.staffId);
    let staff = await axios.get("/api/users/" + "5eade47047da2706382d53e6");
    this.zoomLink = staff.data.zoomLink;
    this.tickets = tickets.data;
    this.tickets.sort(this.compareTickets);
    for (var i = 0; i < this.tickets.length; i++) {
      await this.getStudentName(this.tickets[i], this.tickets[i].owner._id);
      // Add closed ticket to history
      if (
        this.tickets[i].status === "Closed" &&
        this.tickets[i].acceptedBy._id === this.staffId
      ) {
        this.ticketHistory.push(this.tickets[i]);
      }
    }
    this.ticketHistory.reverse();
    if (staff) {
      staff.data.classes.forEach(element => {
        this.loadClasses(element);
      });
      //let course = this.staffCourses[0];
      let course = staff.data.classes[0];
      this.course = course.value;
    }
  },
  beforeMount() {
    this.getOpenTicketCount();

    const queryString = window.location.search;
    this.staffId = queryString.split("=")[1];
    console.log(this.staffId);
    if (this.staffId) {
      this.staffCourses.push({ value: null, text: "Show All Courses" });
      // This gets ANY ticket submitted by ANY student
      var ticketChannel = client.channels.get("tickets");

      ticketChannel.subscribe("ticketUpdate", message => {
        console.log("ticket was added");
        this.getOpenTicketCount();

        // Add new ticket to existing tickets
        this.getStudentName(message.data, message.data.owner._id);
        this.tickets.push(message.data);
      });

      ticketChannel.subscribe("ticketInProgress", message => {
        console.log("ticket was closed");

        // ticket will be remove from being displayed
        this.removeTicketFromTicketUI(message.data._id);
      });

      ticketChannel.subscribe("reopenTicket", message => {
        console.log("ticket was reopened");
        this.tickets.push(message.data);
      });
    }
    this.scrollToTop();
  },
  computed: {
    chevron(id) {
      let tickets = Ticket.query()
        .where("_id", id)
        .get();
      console.log(tickets);
    }
  }
};
</script>