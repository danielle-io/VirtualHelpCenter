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
         <div class="row" >
                <div class="col-6">
                    <label>Select your class:</label>
                    <b-form-select v-model="course" :options="staffCourses" size="sm" v-on:change="setClass" ></b-form-select>
                    
                </div>
        </div>

        <div v-if="this.openRequestTab">
          <div class="ticket-container">
            <div
              v-if="!this.selectedCard && !this.zoomLinkForm && this.tickets"
              class="sub-heading-text"
              style="padding-top:2%;"
            >Select a request to continue.</div>

            <div
              v-if="!this.selectedCard && !this.zoomLinkForm && !this.tickets"
              class="sub-heading-text"
              style="padding-top:2%;"
            >There are currently no open tickets</div>

            <!-- Populate tickets -->
            <div v-if="!this.zoomLinkForm" class="row justify-content-center">
              <div class="col">
               
                <div
                  v-for="(ticket, index) in (filterCourseTickets('Open', this.course).slice(this.startingIndex, this.endingIndex))"
                  :key="ticket._id"
                >
                
                  <a @click="clickCard(ticket, index)">
                    <md-card v-bind:class="{ 'selected-card': selectedTicketIndex === index }">
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
                         <div class="md-card-content">
                        <button type="button" v-on:click="acceptTicket(ticket, ticket._id)">Accept</button>
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
                          <!-- I am trying to call a function from a class but importing gives an undefined error. -->
                        {{ticket.longerDescription}}
                        </div>
                        <div class="md-card-content">
                          <strong>Attached Files:</strong>
                        </div>

                        <!-- TODO: add student's name from DB -->
                        <div class="md-card-content">
                          <strong>Student:</strong>
                          <!-- Alex Lang -->
                          {{ticket.owner._id}}
                        </div>
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
                <button type="submit" class="request-staff-buttons" @click="goToCountdownPage">
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
          >You currently have no request history.</div> -->

          <div class="ticket-container">
            <div class="row justify-content-center">
              <div class="col">
              
                <div v-for="(ticket, index) in filterOpenTickets('Closed')" :key="index">
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
      

<script lang="text/javascript" src="https://cdn.ably.io/lib/ably.min-1.js"></script>
<script>
import Vue from "vue";
import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
//import AblyKey from "../../realtimeKey";

import {BFormInput, BFormSelect, BButton, BFormCheckbox, } from 'bootstrap-vue'

import * as Ably from "ably";

export default {
  
  head() {
    return {
      title: "Tickets"
    };
  },
  components: {
        'b-form-input': BFormInput,
        'b-form-select': BFormSelect,
        'b-button' : BButton,
        'b-form-checkbox': BFormCheckbox
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
      course: {},
      selected: "",
      staffClass: "none",
      staff: "5eade62b47da2706382d53e8",
      zoomLink: null,
      selectedTicketIndex: -1,
      startingIndex: 0,
      endingIndex: 3,
      tickets: [],
      staffCourses: [],
    };
  },
  methods: {
    filterOpenTickets(status) {
      if (this.tickets) {
        return this.tickets.filter(ticket => ticket.status === status);
      } else {
        return;
      }
    },
    filterCourseTickets(status, course) {
     
      if (this.tickets){
      return this.tickets.filter(ticket => (ticket.course._id === course) && (ticket.status === status));
      }else{
        return;
      }
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
    clickCard: function(ticket, index) {
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
    goToCountdownPage: function() {
      console.log(this.zoomLink);
      window.location.href = "staffCountdown";
    },
    expandCard: function() {
      console.log(this.requestHistoryTab);
    },

  beforeMount() {
    // ABLY KEY HERE
    var client = new Ably.Realtime(process.env.ABLY_KEY);
    var channel = client.channels.get('staff');
    channel.subscribe('ticketUpdate', function(message) {
      console.log('hello world');
      console.log(message);
      window.location.reload();
    });
    this.scrollToTop();
  },
  async acceptTicket(ticket, id){
      //update ticket within db
      axios.put('/api/updateTicket/'+id, {
        status: 'In Progress'
      })
  },

  getSize: function(array){
      if(array.length === 1 && array[0].value != null){
          return 1;
      }
      if (array.length <=4){
          return array.length;
      }
      return 4;
  },
 
  async loadUser(user) {
     this.staff = user.data._id
    },
   
  async setClass(course){
    // console.log(course)
    let chosenCourse = await axios.get('/api/courses/' + course)
    this.course = chosenCourse.data._id;
    console.log(this.course)
   


  },
   async loadClasses(classSelected) {

      let course = await axios.get('/api/courses/' + classSelected._id)
     
      var text = course.data.dep +" "+ course.data.courseNum;
      this.staffCourses.push({value: classSelected._id, text: text})
    },
  },
  async created(){

    let tickets = await axios.get('/api/tickets');

    this.tickets = tickets.data
    let staff = await axios.get('/api/users/' + this.staff)
    staff.data.classes.forEach(element => {
      this.loadClasses(element);
    })
    console.log("Created")
    let course = staff.data.classes[0];
    let staffcourse = course._id
    this.course = staffcourse;

    this.loadUser(staff);
  }
  
};
</script>