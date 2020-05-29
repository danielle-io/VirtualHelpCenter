<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.card-line {
  display: in-line-block;
  margin-bottom: 20px;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 16px;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 14px;
}

.card-line-history {
  margin-bottom: 4px;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 15px;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 10px;
  display: inline-block;
}

.container-body {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  overflow-y: scroll;
  max-height: 670px;
}

.CodeMirror-focused .cm-matchhighlight {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
  background-position: bottom;
  background-repeat: repeat-x;
}
.cm-matchhighlight {
  background-color: lightgreen;
}
.CodeMirror-selection-highlight-scrollbar {
  background-color: green;
}
.CodeMirror-scroll {
  width: 700px;
  height: 300px;
  overflow-y: hidden;
  overflow-x: auto;
}
.CodeMirror {
  border: 1px solid #eee !important;
  height: auto;
}

.card-categories {
  color: #53a59e;
  font-weight: 500;
}

.close-button {
  margin-right: 10px;
  font-size: 18px;
  border: none;
  color: "red" !important;
}

/* Styling for adding rows */
.add-button {
  font-size: 22px;
  color: rgb(55, 115, 226);
  cursor: pointer;
}

.row {
  margin-top: 5px;
  margin-bottom: 5px;
}

.remove-column {
  align-content: flex-end;
}

.form-buttons {
  width: 40% !important;
}

.form-buttons-disabled {
  width: 40% !important;
  cursor: dafualt !important;
  background-color: #d3d3d3 !important;
}

.form-buttons-disabled:hover {
}

table th,
.table td {
  border-top: none;
}

.request-table {
  z-index: 1 !important;
}

.file-container [type="file"] {
  cursor: inherit;
  display: block;
  filter: alpha(opacity=0);
  min-height: 18px;
  min-width: 85%;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
  cursor: pointer;
  background-color: #abd5ff;
  margin: 0;
}

.file-container {
  border-width: 1px;
  border-color: rgb(154, 224, 231);
  background-color: rgb(223, 219, 219);
  margin: 0;
  float: left;
  padding: 0.4em;
  position: relative;
  border-radius: 10px 10px 10px 10px;
}

.tab-links-active {
  cursor: pointer;
  text-decoration: none !important;
  margin-left: 4%;
  margin-right: 4%;
  display: inline-block;
  font-size: 20px;
  font-weight: 400 !important;
  border-bottom: 1px solid #e6e4f1;
  padding-bottom: 1px;
  color: #d6cece !important;
}

.tab-links {
  display: inline-block;
  margin-left: 4%;
  margin-right: 4%;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
  font-weight: 200;
  color: #faf4f4 !important;
}

.arrow-right-circle-icon {
  margin-right: 8px;
  padding-top: 1px !important;
}

.request-tabs {
  margin-top: 26px;
  margin-bottom: 6px;
  width: 100%;
  padding-bottom: 15px;
  display: inline-block;
  text-align: center;
}

.file-container:hover {
  opacity: 0.8;
}

.side-border-line {
  background-color: rgb(202, 228, 241);
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: -webkit-calc(100% + 2px);
  height: calc(100% + 2px);
  left: -1px;
  padding-right: 14px;
  margin-right: 16px;
  position: absolute;
  bottom: -1px;
  width: 6px;
}

.top-border-line {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 14px;
  background-color: rgba(123, 196, 236, 0.322);
  /* background-color: rgb(202, 228, 241); */
  left: -1px;
  position: absolute;
  top: -1px;
  width: calc(100% + 2px);
}

.request-container {
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

.form-container {
  position: relative;
  padding-top: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 2px;
  font-family: "Poppins";
}

/* #formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
} */

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

/* ANIMATIONS */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 0.1s;
  animation-duration: 0.1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}
</style>


<template>
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <div id="requests">
      <!-- The transition effects for the containers changing -->

      <div class="request-tabs">
        <a
          @click="switchToCurrentRequestsTab"
          v-bind:class="{ 'tab-links-active': currentRequestsTab, 'tab-links': !currentRequestsTab }"
        >Current Requests</a>

        <!-- (this.$route.query.tab   == 'requestHistory')-->
        <a
          v-bind:class="{ 'tab-links-active': requestHistoryTab, 'tab-links': !requestHistoryTab }"
          @click="switchToRequestHistoryTab"
        >Request History</a>
      </div>

      <transition name="fade" mode="in-out">
        <!-- <div style="text-align: center;"> -->

        <div v-bind:key="requestLandingPage" class="request-container">
          <div v-if="!this.requestLandingPage && !this.submitRequest" class="side-border-line" />

          <div class="container-body">
            <div v-if="this.currentRequestsTab">
              <div v-if="this.studentAcceptedSession">
                <div class="request-container-two">
                  <div class="heading-text">Begin your session</div>

                  <div class="sub-heading-text">Click the link to open your Zoom session</div>
                  <div class="sub-heading-text-larger" style="margin-top: 15px;">
                    <a
                      style="cursor: pointer; color: rgb(45, 58, 130) !important; z-index: 999; 
                              text-shadow: none !important;
                              margin-top: 4px;
                              margin-left: 6px;"
                      target="_blank"
                      href="zoom.us"
                    >{{this.zoomLink}}</a>
                  </div>
                </div>
              </div>

              <div v-if="this.requestLandingPage === true && !this.showCountdown">
                <div class="top-border-line" />

                <!-- This moves the MY Requests page down if there's no requests so that it's more centered -->
                <div v-if="this.getNumberOfPendingTickets() === 'no'" style="margin-top:70px;"></div>

                <div class="heading-text">My Requests</div>

                <div
                  class="sub-heading-text"
                  style="padding-top:2%;"
                >You currently have {{getNumberOfPendingTickets()}} pending {{getRequestOrRequestsText()}}.</div>
              </div>

              <div v-if="this.unresolvedTicket">
                <div class="heading-text">My Requests</div>

                <div class="sub-heading-text" style="padding-top:2%;">
                  Due to missing the acceptance window, your request has been removed from the queue. You may resubmit your request for assistance by accessing it in the
                  <strong>Request History</strong> tab.
                </div>
              </div>

              <div v-if="this.showCountdown && !this.studentAcceptedSession">
                <div class="request-container">
                  <div class="heading-text">Accept your session</div>

                  <div class="sub-heading-text-left" style="padding-top:2%;">
                    A TA is available.
                    <strong>Please accept the session before the timer runs out to continue.</strong>
                  </div>
                  <div
                    class="sub-heading-text-left-italic"
                  >If you do not accept in time, your request will be removed, and placed in your request history for resubmission.</div>

                  <div style="text-align: center;">
                    <circular-count-down-timer
                      :initial-value="countdownTime()"
                      :steps="countdownTime()"
                      :seconds-stroke-color="'#7fe3d4'"
                      :second-label="''"
                      @finish="finished(studentChannel)"
                    ></circular-count-down-timer>

                    <button
                      v-bind:key="acceptSession"
                      @click="acceptSession"
                      type="submit"
                      style="margin-bottom: 20%;"
                      class="fadeIn form-buttons"
                    >
                      <right-circle />Accept the Session
                    </button>
                  </div>
                </div>
              </div>

              <div v-if="this.requestLandingPage && !this.openTicket  && !this.showCountdown">
                <div style="text-align: center;">
                  <button
                    v-bind:key="requestLandingPage"
                    @click="changeRequestState"
                    type="submit"
                    style="margin-bottom: 8px; width: 40% !important;"
                    class="fadeIn form-buttons"
                  >
                    <right-circle />Request a Session
                  </button>

                  <div v-if="this.getNumberOfPendingTickets() === 'no'" style="margin-bottom:70px;"></div>
                </div>
              </div>

              <div
                v-if="this.openTicket"
                style="text-align: center; margin-top: 12px;"
                :hidden="!this.openTicket"
              >
                <!-- TODO: show a modal on clicking close asking if they are sure -->
                <md-card>
                  <div
                    style="float: right; margin-top: 6px; margin-left: 0px; margin-right: 10px; "
                  >
                    <button
                      class="close-button"
                      style="margin-top: 5px;"
                      v-on:click="closeTicket()"
                    >
                      <close
                        style="color: red !important; margin-bottom: 0px; padding-bottom: 0px;"
                        class="close-icon"
                      />
                    </button>
                  </div>

                  <md-card-header style="display: in-line-block;">
                    <div
                      style="justify-content: center; font-size: 18px; text-align: center; margin-top: 20px;"
                      class="md-title"
                    ></div>
                  </md-card-header>

                  <div class="md-card-content">
                    <div class="row">
                      <div class="card-line">
                        <span class="card-categories col-sm">Status:</span>
                        <span
                          style="padding-left:22px !important;"
                          class="col-sm"
                        >{{ this.openTicket.status }}</span>
                      </div>
                    </div>

                    <div class="row">
                      <div class="card-line">
                        <span class="card-categories col-sm">Overview:</span>
                        <span
                          style="padding-left: 0px !important;"
                          class="col-sm"
                        >{{ this.openTicket.oneLineOverview }}</span>
                      </div>
                    </div>

                    <div class="row">
                      <div class="card-line">
                        <span class="card-categories col-sm">Details:</span>
                        <span
                          style="padding-left: 20px !important;"
                          class="col"
                        >{{ this.openTicket.longerDescription }}</span>
                      </div>
                    </div>

                    <div v-if="this.openTicket.attachments.length === 0">
                      <div class="row">
                        <div class="card-line">
                          <span class="card-categories col-sm">Files:</span>
                          <span style="padding-left: 40px !important;" class="col">None</span>
                        </div>
                      </div>
                    </div>

                    <div v-if="this.openTicket.attachments.length > 0">
                      <div class="row">
                        <div class="card-line">
                          <span class="card-categories col-sm">Files:</span>
                          <span
                            style="margin-left:20px !important;"
                            v-for="(attachment, index) in (this.openTicket.attachments)"
                            :key="index"
                          >
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
                        </div>
                      </div>
                    </div>
                  </div>
                </md-card>
              </div>

              <!-- Container for filling out the request form -->
              <div v-if="!this.requestLandingPage && !this.submitRequest">
                <div class="heading-text">Request a Session</div>

                <div style="margin-left: 8px;" class="form-container">
                  <div class="row" style="width: 70%;">
                    <label class="label-format">
                      <check class="label-icons" />Course Selection
                    </label>
                    <span v-if="!this.selectedCourse" class="asterisk">*</span>
                  </div>

                  <div class="row">
                    <b-form-radio-group
                      v-model="selectedCourse"
                      :options="enrolledCourses"
                      required
                      v-on:change="getSelectedCourse"
                    ></b-form-radio-group>
                  </div>

                  <div class="row">
                    <label class="label-format">
                      <short-description class="label-icons" />Question Overview
                    </label>
                    <span v-if="!this.oneLineOverview" class="asterisk">*</span>

                    <b-form-input
                      placeholder="Please enter a  one sentence summary of the issue"
                      v-model="oneLineOverview"
                      required
                    ></b-form-input>
                  </div>

                  <div class="row">
                    <label class="label-format">
                      <long-description class="label-icons" />Detailed Problem Description
                    </label>
                    <span v-if="!this.probDes" class="asterisk">*</span>
                    <b-form-text-area
                      id="textarea"
                      v-model="probDes"
                      placeholder="Explain your issue in detail."
                      rows="2"
                      required
                      max-rows="10"
                    ></b-form-text-area>
                  </div>

                  <div class="row">
                    <label class="label-format">
                      <code-symbol class="label-icons" />Code
                    </label>

                    <b-form-text-area
                      id="textarea"
                      v-model="code"
                      rows="1"
                      placeholder="Paste code here, if needed."
                      max-rows="6"
                    ></b-form-text-area>
                  </div>

                  <div class="row">
                    <label style="margin-bottom: 0px;" class="label-format">
                      <attachment class="label-icons" />Attachments
                    </label>
                  </div>

                  <table class="table request-table">
                    <tbody>
                      <div class="top-row" v-for="(row, index) in rows" v-bind:key="index">
                        <tr>
                          <td>
                            <button class="file-container file-button">
                              {{row.file.name}}
                              <input
                                type="file"
                                @change="setFilename($event, row)"
                                :id="index"
                              />
                            </button>
                          </td>

                          <td class="remove-column">
                            <a
                              v-on:click="removeElement(index);"
                              style="cursor: pointer; color: rgb(45, 58, 130) !important; z-index: 999; 
                              text-shadow: none !important;
                              margin-top: 4px;
                              margin-left: 6px;"
                            >Remove</a>
                          </td>
                        </tr>
                      </div>
                    </tbody>
                  </table>

                  <div class="row">
                    <div style="margin-bottom: 0px;" class="add-button">
                      <plus-circle @click="addRow" class="label-icons" />
                    </div>
                  </div>

                  <!-- <span class="add-button" @click="addRow">
                    <plus-circle />
                  </span>-->

                  <div v-if="this.selectedCourse && this.oneLineOverview  && this.probDes">
                    <div style="text-align: center;">
                      <button
                        v-on:click="uploadFile"
                        v-bind:key="submitRequest"
                        type="submit"
                        style="margin-bottom: 10px; margin margin-top: 10px;"
                        class="fadeIn form-buttons"
                        @click="changeRequestState"
                      >
                        <right-circle style="margin-right:4px" />Submit Request
                      </button>
                    </div>
                  </div>

                  <div v-if="!this.selectedCourse || !this.oneLineOverview  || !this.probDes">
                    <div style="text-align: center;">
                      <button
                        type="disabled"
                        disabled="true"
                        style="margin-bottom: 10px; margin margin-top: 10px;
                      background-color: #d3d3d3 !important;"
                        class="form-buttons-disabled"
                      >
                        <right-circle style="margin-right:4px" />Submit Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!this.currentRequestsTab">
            <div class="container-body">
              <div class="heading-text">My Requests</div>

              <!-- TO DO: make this text dynamic based on user tickets -->
              <div
                class="sub-heading-text"
                style="padding-top:2%;"
              >You have {{this.ticketHistory.length}} prior requests.</div>

              <div
                v-for="(ticket) in this.ticketHistory"
                style="text-align: center;"
                :key="ticket._id"
              >
                <md-card
                  style="border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05); margin-bottom:12px;"
                >
                  <div class="md-card-content">
                    <div class="row">
                      <div class="card-line-history">
                        <span class="card-categories col-sm">Status:</span>
                        <span
                          style="padding-left:22px !important;"
                          class="col-sm"
                        >{{ ticket.status }}</span>
                      </div>
                    </div>

                    <div class="row">
                      <div class="card-line-history">
                        <span class="card-categories col-sm">Overview:</span>
                        <span
                          style="padding-left: 0px !important;"
                          class="col-sm"
                        >{{ ticket.oneLineOverview }}</span>
                      </div>
                    </div>

                    <div class="row">
                      <div class="card-line-history">
                        <span class="card-categories col-sm">Details:</span>
                        <span
                          style="padding-left: 18px !important;"
                          class="col"
                        >{{ ticket.longerDescription }}</span>
                      </div>
                    </div>
                  </div>
                </md-card>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <button id="hiddenButton" style="display:none;" @click="triggerAccept"></button>
  </div>
</template>
  
<script src="https://cdn.ably.io/lib/ably.min-1.js"></script>
<script>
var firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const userId = "5ec0858d7971d22628fd7e0d";
const userId = "5ecafbcd5219c55528efe03e";

const client = new Ably.Realtime(process.env.ABLY_KEY);
// const userId = "5eb86452ed2ee55868633193";

// base style
// import "codemirror/lib/codemirror.css";
// import "codemirror/theme/base16-dark.css";

// language
// import "codemirror/mode/vue/vue.js";

// active-line.js
// import "codemirror/addon/selection/active-line.js";

// styleSelectedText
// import "codemirror/addon/selection/mark-selection.js";
// import "codemirror/addon/search/searchcursor.js";

// highlightSelectionMatches
// import "codemirror/addon/scroll/annotatescrollbar.js";
// import "codemirror/addon/search/matchesonscrollbar.js";
// import "codemirror/addon/search/searchcursor.js";
// import "codemirror/addon/search/match-highlighter.js";

// keyMap
// import "codemirror/mode/clike/clike.js";
// import "codemirror/addon/edit/matchbrackets.js";
// import "codemirror/addon/comment/comment.js";
// import "codemirror/addon/dialog/dialog.js";
// import "codemirror/addon/dialog/dialog.css";
// import "codemirror/addon/search/searchcursor.js";
// import "codemirror/addon/search/search.js";
// import "codemirror/keymap/sublime.js";

// foldGutter
// import "codemirror/addon/fold/foldgutter.css";
// import "codemirror/addon/fold/brace-fold.js";
// import "codemirror/addon/fold/comment-fold.js";
// import "codemirror/addon/fold/foldcode.js";
// import "codemirror/addon/fold/foldgutter.js";
// import "codemirror/addon/fold/indent-fold.js";
// import "codemirror/addon/fold/markdown-fold.js";
// import "codemirror/addon/fold/xml-fold.js";

import Vue from "vue";
import axios from "~/plugins/axios";
import firebase from "firebase";
// import { codemirror } from "codemirror";
import * as Ably from "ably";
import {
  BFormInput,
  BFormSelect,
  BFormCheckbox,
  BFormTextarea,
  BFormRadio,
  BFormRadioGroup
} from "bootstrap-vue";

//UI store imports
import Ticket from "../ui/models/Ticket";

export default {
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-form-checkbox": BFormCheckbox,
    "b-form-text-area": BFormTextarea,
    "b-form-radio": BFormRadio,
    "b-form-radio-group": BFormRadioGroup
    // codemirror
  },

  computed: {
    isDisabled: function() {
      return !this.selected;
    }
  },

  data() {
    return {
      el: "#requests",
      code: null,
      cmOption: {
        tabSize: 4,
        styleActiveLine: false,
        lineNumbers: true,
        styleSelectedText: false,
        line: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        mode: "text/javascript",
        // hint.js options
        hintOptions: {
          completeSingle: false
        },
        keyMap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "monokai",
        extraKeys: { Ctrl: "autocomplete" }
      },
      currentRequestsTab: true,
      requestHistoryTab: false,
      show: true,
      unresolvedTicket: false,
      rows: [],
      status: "Open",
      oneLineOverview: "",
      requestLandingPage: true,
      submitRequest: false,
      probDes: "",
      file: null,
      student: null,
      openTicket: null,
      ticketHistory: [
        {
          owner: null,
          status: null,
          oneLineOverview: null,
          longerDescription: null,
          attachments: []
        }
      ],
      zoomLink: null,
      showCountdown: false,
      studentAcceptedSession: false,
      studentChannel: client.channels.get(userId),
      ticketChannel: client.channels.get("tickets"),
      fileUrls: [],
      fileObjects: [],
      selectedCourse: null,
      enrolledCourses: []
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    addRow: function() {
      var elem = document.createElement("tr");
      this.rows.push({
        file: {
          name: "Choose File"
        }
      });
    },
    uploadFile() {
      if (this.rows) {
        for (var i = 0; i < this.rows.length; i++) {
          var fileToUpload = this.rows[i].file;
          const storageRef = firebase
            .storage()
            .ref(fileToUpload.name)
            .put(fileToUpload);
          storageRef.on(
            `state_changed`,
            snapshot => {
              this.uploadValue =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            error => {
              console.log(error.message);
            },
            () => {
              this.uploadValue = 100;
              storageRef.snapshot.ref
                .getDownloadURL()
                .then(url => {
                  this.fileUrls.push(url);

                  if (this.fileUrls.length === this.rows.length) {
                    console.log("going to for loop");
                    for (var i = this.rows.length - 1; i > -1; i--) {
                      this.fileObjects.push({
                        fileName: this.rows[i].file.name,
                        filePath: this.fileUrls[i]
                      });
                    }
                  }
                })
                .then(() => {
                  this.submit();
                });
            }
          );
        }
      } else {
        this.submit();
      }
    },
    switchToCurrentRequestsTab: function() {
      this.currentRequestsTab = true;
      this.requestHistoryTab = false;
      this.scrollToTop();
      return this.currentRequestsTab;
    },
    switchToRequestHistoryTab: function() {
      this.currentRequestsTab = false;
      this.requestHistoryTab = true;
      this.scrollToTop();
      return this.requestHistoryTab;
    },
    openPage: function(attachmentUrl, attachmentName) {
      console.log(this.openTicket);
      window.open(attachmentUrl, "_blank");
      // location.href = attachmentUrl;
    },
    acceptSession: function() {
      this.scrollToTop();
      this.showCountdown = false;
      this.studentAcceptedSession = true;
      console.log("in accept session and zoomLink is " + this.zoomLink);

      // this.finished();

      // Publish an event to the  channel
      // this.studentChannel.publish("studentAcceptedSession", userId);
    },
    triggerAccept: function() {
      this.showCountdown = true;
      console.log(
        "in trigger click AcceptSession :: " +
          this.studentAcceptedSession +
          " countdownShowing :: " +
          this.showCountdown
      );
    },
    removeElement: function(index) {
      this.rows.splice(index, 1);
    },
    setFilename: function(event, row) {
      if (event && row) {
        var file = event.target.files[0];
        row.file = file;
      }
    },

    async loadCourses(classSelected) {
      if (classSelected) {
        let classes = await axios.get("/api/courses/" + classSelected._id);
        this.enrolledCourses.push({
          value: classes.data._id,
          text: classes.data.dep + classes.data.courseNum
        });
        this.selectedCourse = this.enrolledCourses[0].value;
      }
    },
    getSelectedCourse: function(course) {
      this.selectedCourse = course;
      console.log(course);
    },
    async startSubscribe() {
      console.log("subscribing to staff");
      // The student's ticket was accepted by the staff
      // this.studentChannel.subscribe("staffAcceptedTicket", message => {
      //   console.log("staff accepted ticket");
      //   this.zoomLink = message.data.zoomLink;
      //   this.openTicket.updatedAt = message.data.date;

      //   document.getElementById("hiddenButton").click();
      // });
    },
    countdownTime: function() {
      //read updated time
      let ticketTime = new Date(this.openTicket.updatedAt);

      let currentTime = new Date();
      ticketTime.setMinutes(ticketTime.getMinutes() + 1);
      console.log(
        ticketTime.getMinutes() * 60 +
          ticketTime.getSeconds() -
          (currentTime.getMinutes() * 60 + currentTime.getSeconds())
      );

      return (
        ticketTime.getMinutes() * 60 +
        ticketTime.getSeconds() -
        (currentTime.getMinutes() * 60 + currentTime.getSeconds())
      );
    },
    finished: studentChannel => {
      console.log("in finished");

      //tell staff student did not accept session
      // studentChannel.publish("studentDidNotAcceptSession", userId);

      this.openTicket.status = "Unresolved";
      this.ticketHistory.push(this.openTicket);
      this.unresolvedTicket = true;
      this.openTicket = null;
    },

    changeRequestState: function() {
      if (this.requestLandingPage === true && this.submitRequest === false) {
        this.requestLandingPage = false;
        return this.requestLandingPage;
      } else {
        // var client = new Ably.Realtime(process.env.ABLY_KEY);
        // var channel = client.channels.get("staff");
       
       // Publish a message to the test channel
        // channel.publish("ticketUpdate", "ticket updated");

        this.submitRequest = true;
        this.scrollToTop();

        return this.requestLandingPage;
      }
    },
    getNumberOfPendingTickets: function() {
      if (this.openTicket) {
        return "1";
      }
      return "no";
    },
    getRequestOrRequestsText: function() {
      if (!this.openTicket) {
        return "requests";
      }
      return "request";
    },
    clearForm: function() {
      console.log("clearing form");
      this.oneLineOverview = "";
      this.probDes = "";
      this.code = "";
      this.openTickets = null;
      this.file = null;
      this.showCountdown = false;
      this.submitRequest = false;
      this.requestLandingPage = false;
      this.fileUrls = [];
      this.rows = [];
      this.fileObjects = [];
      this.openTicket = null;
    },
    async loadUser(user) {
      // this.student = user.data._id;
      this.student = userId;
    },

    // NOT INSERTED YET: file
    async submit() {
      console.log("course is " + this.selectedCourse);
      if (this.selectedCourse === null) {
        this.selectedCourse = this.enrolledCourses[0].value;
      }

      if (!this.openTicket) {
        console.log("inserting " + this.fileObjects);
        let ticket = await axios.post("/api/insertTicket", {
          status: "Open",
          owner: {
            _id: userId
          },
          course: {
            _id: this.selectedCourse
          },
          oneLineOverview: this.probDes,
          longerDescription: this.oneLineOverview,
          codeSnippet: this.code,
          createdAt: new Date().toString(),
          attachments: this.fileObjects
        });

        this.openTicket = ticket.data;
        console.log("Open ticket below");
        console.log(this.openTicket);

        // sends ticket to staff
        // this.ticketChannel.publish("ticketUpdate", this.openTicket);
      }
    },
    async getTickets() {
      console.log("in get tickets");

      let tickets = await axios.get("/api/tickets/getTickets", {
        "owner._id": userId
      });

      this.ticketHistory = tickets.data.filter(
        ticket => ticket.status !== "Open"
      );
      this.openTickets = tickets.data.filter(
        ticket => ticket.status === "Open"
      );
      if (this.openTickets) {
        this.openTicket = this.openTickets[0];
        if (this.openTicket) {
          console.log(this.openTicket);
        }
      }
    },

    // let tickets = await axios.get("../../api/tickets");

    // this.ticketHistory = tickets.data.filter(
    //   ticket => ticket.owner._id === userId
    // );
    // tickets = tickets.data.filter(ticket => (ticket.owner._id === this.$route.params.id) && (ticket.status === 'Open'));

    //  tickets = tickets.data.filter(
    //     ticket => ticket.owner._id === userId && ticket.status === "Open"
    //   );

    async getStudentInfo() {
      console.log("getting student info");
      let student = await axios.get("/api/users/" + userId);
      this.student = student.data;

      student.data.classes.forEach(element => {
        this.loadCourses(element);
        console.log("course is " + element);
      });
      this.getTickets();
    },

    async closeTicket() {
      if (this.openTicket) {
        console.log("closing ticket " + this.openTicket._id);

        // this.ticketChannel.publish("ticketClosed", this.openTicket);

        this.openTicket.status = "Closed";
        this.ticketHistory.push(this.openTicket);

        var id = this.openTicket._id;

        axios
          .put("/api/updateTicket/" + id, {
            status: "Closed"
          })
          .then(() => {
            console.log("resetting ticket");
            this.openTicket = null;
          });

        this.clearForm();

        window.location.reload();

        this.scrollToTop();
      }
    }
  },

  beforeMount() {
    this.scrollToTop();
    this.getStudentInfo();
    this.startSubscribe();
  },

  async created() {},
  computed: {
    isDisabled: function() {
      return !this.selected;
    }
    // studentSession() {
    //   return this.studentAcceptedSession
    // },
    // showCountdown() {
    //   return this.showCountdown
    // }
  }
};
</script>