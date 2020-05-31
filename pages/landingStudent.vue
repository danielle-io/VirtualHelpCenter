<style>
.md-dialog {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  display: flex;
  transition-duration: 0.2s;

  /* z-index: 11; */
}

.dialog-showing {
  opacity: 0.9;
}

.dialog-hidden {
  opacity: 1;
}

.md-dialog-container.md-theme-default {
  width: 50% !important;
}

.md-button {
}

.md-primary {
  /* color: red !important; */
}

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
  font-size: 16px;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 14px;
}

.col-sm-3 {
  flex: 0 0 18%;
  /* max-width: 25%; */
}

.star-outline {
  margin-right: 6px;
  font-size: 20px;
  color: #624b77;
  height: 0.8em;
  cursor: pointer;
}

.star-filled {
  margin-right: 6px;
  font-size: 20px;
  color: #624b77;
  height: 0.8em;
  cursor: pointer;
}

.card-line-history {
  margin-bottom: 4px;
  font-size: 16px;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 10px;
  display: in-line-block;
  text-align: left;
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

.rating-title {
  color: #624b77;
  font-weight: 500;
}

.text-body {
  flex-wrap: wrap;
}

.close-button {
  margin-right: 10px;
  font-size: 22px;
  border: none;
  color: #c94d4d;
}

.close-button-black {
  margin-right: 10px;
  font-size: 22px;
  border: none;
  color: #444343;
}

.reSubmit-button {
  margin-right: 10px;
  padding-top: 12px;
  font-size: 22px;
  border: none;
  color: #53a59e;
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

.disabled-submit-rating {
  display: inline-block;
  color: #595c5f !important;
  cursor: default;
}

.disabled-submit-rating :hover {
  text-decoration: none !important;
  border-bottom: none !important;
}
.submit-rating {
  display: inline-block;
  cursor: pointer;
  color: rgb(45, 58, 130) !important;
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

.md-button.md-theme-default {
  color: rgba(0, 0, 0, 0.87);
  color: rgba(0, 0, 0, 0.87);
  color: var(
    --md-theme-default-text-primary-on-background,
    rgba(0, 0, 0, 0.87)
  );
  border: none !important;
  background: none !important;
  box-shadow: none;
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

.chevron {
  z-index: 999;
  padding-bottom: 14px;
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

.request-tabs {
  margin-top: 26px;
  margin-bottom: 25px;
  width: 100%;
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
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.expired-card {
  border-width: 1px !important;
  border-style: solid;
  border-color: rgb(151, 223, 233) !important;
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
    <no-ssr>
      <md-dialog-confirm
        style="margin-left: 20px; margin-right: 20px;"
        :md-active.sync="showDeleteRequestModal"
        md-title="Are you sure you would like to cancel this request?"
        md-content="If you choose to cancel, you can re-submit from your Request History tab, but you will be moved to the end of the line."
        md-confirm-text="Yes, remove request"
        md-cancel-text="No"
        clickOutsideToClose="true"
        @md-cancel="onCancel"
        @md-confirm="cancelTicket"
      />
    </no-ssr>
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

        <div v-bind:key="requestLandingPage" class="request-container" v-bind:class="{ 'dialog-showing': showDeleteRequestModal, 'dialog-hidden': !showDeleteRequestModal }">
          <div v-if="!this.requestLandingPage && !this.submitRequest" class="side-border-line" />

          <div class="container-body">
            <!-- <md-button class="md-primary md-raised" @click=" = true">Confirm</md-button> -->

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

                <div style="margin-top:20px" class="heading-text">My Requests</div>

                <div
                  class="sub-heading-text"
                  style="padding-top:7px;"
                >You currently have {{getNumberOfPendingTickets()}} pending {{getRequestOrRequestsText()}}.</div>
              </div>

              <div v-if="this.unresolvedTicket">
                <div style="margin-top:18px" class="heading-text">My Requests</div>

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

              <div v-if="showTicket" style="text-align: center; margin-top: 12px;">
                <!-- TODO: show a modal on clicking close asking if they are sure -->
                <md-card style="padding-top: 15px; padding-bottom: 10px;">
                  <div
                    style="float: right; margin-top: 6px; margin-left: 0px; margin-right: 10px; "
                  >
                    <button
                      class="close-button"
                      style="margin-top: 5px;"
                      v-on:click="showDeleteRequestModal = true"
                    >
                      <close
                        style="color: red !important; margin-bottom: 0px; padding-bottom: 0px;"
                        class="close-icon"
                      />
                    </button>
                  </div>

                  <div class="card-line">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <span style="margin-right: 6px;">
                          <clock />
                        </span>Time:
                      </span>
                      <span
                        style="padding-left: 35px !important;"
                        class="col-sm-9 text-body"
                      >{{ " " + (this.openTicket.createdAt.split('T')[1]).substring(0,5)}}</span>
                    </div>
                  </div>

                  <div class="card-line">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <span style="margin-right: 6px;">
                          <bell />
                        </span>Status:
                      </span>
                      <span
                        style="padding-left: 20px !important;"
                        class="col-sm-9 text-body"
                      >{{ this.openTicket.status }}</span>
                    </div>
                  </div>

                  <div class="card-line">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <span style="margin-right: 6px;">
                          <short-description />
                        </span>Overview:
                      </span>
                      <span
                        style="padding-left: 20px !important;"
                        class="col-sm-9 text-body"
                      >{{ this.openTicket.oneLineOverview }}</span>
                    </div>
                  </div>

                  <div class="card-line">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <span style="margin-right: 6px;">
                          <long-description />
                        </span>Details:
                      </span>
                      <span
                        style="padding-left: 20px !important;"
                        class="col-sm-9 text-body"
                      >{{ this.openTicket.longerDescription }}</span>
                    </div>
                  </div>

                  <div v-if="this.openTicket.attachments.length === 0">
                    <div class="card-line">
                      <div class="row">
                        <span class="card-categories col-sm-3">
                          <span style="margin-right: 6px;">
                            <attachment />
                          </span>Files:
                        </span>
                        <span style="padding-left: 20px !important;" class="col-sm-9 text-body">None</span>
                      </div>
                    </div>
                  </div>

                  <div v-if="this.openTicket.attachments.length > 0">
                    <div class="card-line">
                      <div class="row">
                        <span class="card-categories col-sm-3">
                          <span style="margin-right: 6px;">
                            <attachment />
                          </span>Files:
                        </span>
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
                </md-card>
              </div>

              <!-- Container for filling out the request form -->
              <div v-if="!this.requestLandingPage && !this.submitRequest">
                <div style="float: right;">
                  <button class="close-button-black" v-on:click="closeRequestForm()">
                    <close class="close-icon" />
                  </button>
                </div>
                <div class="heading-text" style="padding-top: 18px;">Request a Session</div>

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
            <div style="margin-top:20px;" class="heading-text">My Requests</div>

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
                  <!-- Show resubmit button if there's no open ticket -->
                  <div
                    :hidden="getOpenTicketStatus()"
                    style="display: in-line-block; padding-bottom: 12px; float: right;"
                  >
                    <!-- <span style="margin-bottom:8px;"> -->
                    <span
                      style="font-size: 9px; color: rgb(92, 99, 92); margin-right: 6px;"
                    >Re-submit</span>
                    <!-- </span> -->
                    <button
                      class="reSubmit-button"
                      style="margin-top: 5px; height: .8em !important; margin-bottom: 12px;"
                      v-on:click="reSubmitTicket(ticket)"
                    >
                      <restore style="margin-bottom: 0px; padding-bottom: 0px;" class="close-icon" />
                    </button>
                  </div>

                  <div class="md-card-content" style="margin-bottom:20px;">
                    <div v-if="ticket.status === 'Closed'">
                      <div v-if="ticket.wasRated === 0">
                        <div style="display: inline-block" class="row">
                          <span
                            style="padding-left:6px; margin-left: 16px; margin-right: 8px;"
                            class="rating-title"
                          >Rate Your Session:</span>

                          <span
                            style="margin-right: 4px !important;"
                            v-for="ratingIndexClosed in ticket.rating"
                            :key="ratingIndexClosed"
                          >
                            <a @click="setRating(ticket, ticket.rating, 1)">
                              <star-filled class="star-filled" />
                            </a>
                          </span>

                          <span
                            style="margin-right: 4px !important;"
                            v-for="ratingIndexOpen in (5 - ticket.rating)"
                            :key="ratingIndexOpen"
                          >
                            <a @click="setRating(ticket, ratingIndexOpen, 0)">
                              <star-outline class="star-outline" />
                            </a>
                          </span>
                        </div>

                        <div class="row">
                          <span class="col" style="display: inline-block;">
                            <b-form-input
                              style="font-size: 14px; padding-bottom: 0px; border-radius: 0; !important; padding-top: 0px; border-top: none; border-left: none; border-right: none; margin-top: 0px;"
                              placeholder="Rating explanation"
                              v-model="ticket.ratingExplanation"
                            >
                              <span v-if="ticket.ratingExplanation.length < 1" class="asterisk">*</span>
                            </b-form-input>
                          </span>
                          <span class="col">
                            <span
                              v-on:click="submitRating(ticket);"
                              v-bind:class="{ 'submit-rating': ticket.ratingExplanation !== '', 'disabled-submit-rating': ticket.ratingExplanation === '' }"
                              style=" display: inline-block !important; 
                              z-index: 999; 
                              text-shadow: none !important;
                              margin-left: 6px;"
                              rows="1"
                              max-rows="5"
                            >Submit Rating</span>
                          </span>
                        </div>
                      </div>

                      <div v-if="ticket.wasRated === 1" class="card-line-history">
                        <div style="display: inline-block" class="row">
                          <span style="padding-left:6px; margin-right: 8px;" class="rating-title">
                            <check />
                            <span style="padding-left:6px">Rating Submitted</span>
                          </span>
                        </div>
                      </div>
                    </div>

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

// const userId = "5ed34dbd99e64f3cc0b49397";
const userId = "5eb88b493b46ff146caf250c";

// const userId = "5ec5f90d81b13d23065ead3e";

// const userId = "5ed34dbd99e64f3cc0b49397";

const client = new Ably.Realtime(process.env.ABLY_KEY);

// // base style
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

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);

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
      showTicket: false,
      studentAcceptedSession: false,
      studentChannel: client.channels.get(userId),
      ticketChannel: client.channels.get("tickets"),
      fileUrls: [],
      fileObjects: [],
      selectedCourse: null,
      enrolledCourses: [],
      expandChevron: true,
      collapseChevron: false,
      showDeleteRequestModal: false,
      value: null
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
    // onCancel() {
    //   this.
    // },
    uploadFile() {
      if (this.rows.length > 0) {
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
              storageRef.snapshot.ref.getDownloadURL().then(url => {
                this.fileUrls.push(url);

                if (this.fileUrls.length === this.rows.length) {
                  console.log("going to for loop");
                  for (var i = this.rows.length - 1; i > -1; i--) {
                    this.fileObjects.push({
                      fileName: this.rows[i].file.name,
                      filePath: this.fileUrls[i]
                    });
                  }
                  this.submit();
                }
              });
            }
          );
        }
      } else {
        this.submit();
      }
    },
    getOpenTicketStatus: function() {
      if (this.openTicket) {
        return true;
      }
      return false;
    },
    submitRating: function(ticket) {
      console.log("in submit rating, ticket is is " + ticket._id);
      if (ticket.ratingExplanation !== "") {
        axios
          .put("/api/updateTicket/" + ticket._id, {
            rating: ticket.rating,
            ratingExplanation: ticket.ratingExplanation,
            wasRated: 1
          })
          .then(() => {
            console.log("submitted rating");
          });
        ticket.wasRated = 1;
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
    setRating: function(ticket, clickedRating, starKind) {
      console.log("clicked: " + clickedRating);
      if (starKind === 1) {
        ticket.rating = clickedRating - 1;
      } else {
        ticket.rating = clickedRating;
      }
      console.log("ticket rating is now " + ticket.rating);
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
    startSubscribe() {
      console.log("subscribing to staff");
      // The student's ticket was accepted by the staff
      // this.studentChannel.subscribe("staffAcceptedTicket", message => {
      //   console.log("staff accepted ticket");
      //   this.zoomLink = message.data.zoomLink;
      //   this.openTicket.updatedAt = message.data.date;
      //   this.showCountdown = true;
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
    finished: function() {
      //when countdown is over, take them back to the other page
      this.showCountdown = false;
      this.requestLandingPage = true;
      this.showTicket = false;
      this.openTicket.status = "Unresolved";
      this.ticketHistory.push(this.openTicket);
      this.unresolvedTicket = true;
      this.openTicket = null;
      this.submitRequest = false;
    },

    reSubmitTicket: function(ticket) {
      // To remove ticket from the history
      console.log("in resubmit " + ticket._id);
      var id = ticket._id;

      axios
        .put("/api/updateTicket/" + id, {
          status: "Open",
          createdAt: new Date().toString()
        })
        .then(() => {
          console.log("resetting ticket");
          this.openTicket = ticket;
          this.switchToCurrentRequestsTab();
        });

      this.openTicket = ticket;
      this.openTicket.status = "Open";
      this.openTicket.createdAt = new Date().toString();

      this.getTickets();
      this.showTicket = true;

      // sends ticket to staff
      // this.ticketChannel.publish("ticketUpdate", this.openTicket);
    },

    changeRequestState: function() {
      if (this.requestLandingPage === true && this.submitRequest === false) {
        this.clearForm();
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
    closeRequestForm: function() {
      this.requestLandingPage = true;
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
    changeStarClass: function() {
      // if (this.expandChevron) {
      //   this.collapseChevron = true;
      //   this.expandChevron = false;
      // } else {
      //   this.expandChevron = true;
      //   this.collapseChevron = false;
      // }
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
      this.student = userId;
    },

    // NOT INSERTED YET: file
    async submit() {
      if (this.selectedCourse === null) {
        this.selectedCourse = this.enrolledCourses[0].value;
      }

      if (!this.openTicket) {
        console.log("inserting ", this.fileObjects);
        let ticket = await axios.post("/api/insertTicket", {
          status: "Open",
          owner: {
            _id: userId
          },
          course: {
            _id: this.selectedCourse
          },
          oneLineOverview: this.oneLineOverview,
          longerDescription: this.probDes,
          codeSnippet: this.code,
          createdAt: new Date().toString(),
          attachments: this.fileObjects,
          rating: 0,
          ratingExplanation: "",
          wasRated: 0
          // This is only for testing Closed tickets
          // acceptedBy: {
          //   _id: staffId
          // }
        });

        this.openTicket = ticket.data;
        this.showTicket = true;
        console.log("Open ticket below");
        console.log(this.openTicket);

        // sends ticket to staff
        // this.ticketChannel.publish("ticketUpdate", this.openTicket);
      }
    },
    async getTickets() {
      console.log("in get tickets");

      let tickets = await axios.get(
        "/api/tickets/getTicketsByUser/" + userId,
        {}
      );

      this.ticketHistory = tickets.data.filter(
        ticket => ticket.status !== "Open" && ticket.owner._id == userId
      );

      this.openTickets = tickets.data.filter(
        ticket => ticket.status === "Open" && ticket.owner._id == userId
      );

      if (this.openTickets.length > 0) {
        this.openTicket = this.openTickets[0];
        this.showTicket = true;
      }
    },

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

    async cancelTicket() {
      if (this.openTicket) {
        console.log("closing ticket " + this.openTicket._id);

        // this.ticketChannel.publish("ticketClosed", this.openTicket);

        this.openTicket.status = "Unresolved";
        this.ticketHistory.push(this.openTicket);

        var id = this.openTicket._id;

        axios
          .put("/api/updateTicket/" + id, {
            status: "Unresolved"
          })
          .then(() => {
            console.log("resetting ticket");
            this.openTicket = null;
          });

        this.requestLandingPage = true;
        this.openTicket = null;
        this.submitRequest = false;
        this.scrollToTop();
        this.showTicket = false;
      }
    }
  },

  beforeMount() {
    // let staff = await axios.get("/api/users/" + this.staff);

    this.scrollToTop();
    this.getStudentInfo();
    this.startSubscribe();
  }
};
</script>