<style>
.CodeMirror {
  float: left;
  width: 700px;
  border: 1px solid rgb(230, 221, 221);
}
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

.dialog-showing {
  opacity: 0.9;
}

.dialog-hidden {
  opacity: 1;
}

.md-dialog-container.md-theme-default {
  width: 50% !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.margin-for-no-requests {
  margin-top: 60px;
}

.margin-requests {
  margin-top: 30px;
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

.container-body-accept {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  overflow-y: scroll;
  max-height: 670px;
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

.close-button:hover {
  transform: scale(1.1, 1.1);
}

.edit-button:hover {
  transform: scale(1.1, 1.1);
}

.close-button-black {
  margin-right: 10px;
  font-size: 22px;
  border: none;
  color: #444343;
}

.edit-button {
  margin-right: 10px;
  font-size: 22px;
  border: none;
  color: #43afc2;
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
  cursor: default !important;
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
  opacity: 0.5;
  background-color: rgba(41, 32, 131, 0.493);
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

.side-border-line-two {
  background-color: rgba(143, 183, 201, 0.384);
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
  width: 4px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.side-border-line-three {
  background-color: rgba(174, 211, 205, 0.623);
  opacity: 0.3;
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
  width: 4px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.top-border-line {
  opacity: 0.4;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 14px;
  background-color: rgba(87, 174, 221, 0.322);
  left: -1px;
  position: absolute;
  top: -1px;
  width: calc(100% + 2px);
}

.top-border-line-two {
  opacity: 0.3;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 12px;
  background-color: rgba(138, 153, 148, 0.342);
  left: -1px;
  position: absolute;
  top: -1px;
  width: calc(100% + 2px);
}

.expired-card {
  border-width: 1px !important;
  border-style: solid;
  border-color: rgb(151, 223, 233) !important;
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
    <client-only>
      <md-dialog-alert
        style="margin-left: 20px; margin-right: 20px;"
        :md-active.sync="unresolvedTicket"
        md-title="Request Canceled"
        md-content="Due to missing the acceptance window, your request has been removed from the queue. You may resubmit your request for assistance by accessing it in the
Request History tab."
        md-confirm-text="Okay"
        clickOutsideToClose="true"
        @md-confirm="unresolvedTicket = false;"
      />
    </client-only>

    <client-only>
      <md-dialog-confirm
        style="margin-left: 20px; margin-right: 20px;"
        :md-active.sync="showDeleteRequestModal"
        md-title="Are you sure you would like to cancel this request?"
        md-content="If you choose to cancel, you can re-submit from your Request History tab, but you will be moved to the end of the line."
        md-confirm-text="Yes, remove request"
        md-cancel-text="No"
        clickOutsideToClose="true"
        @md-cancel="showDeleteRequestModal = false;"
        @md-confirm="cancelTicket"
      />
    </client-only>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <div id="requests">
      <div class="request-tabs">
        <a
          id="landingTab"
          @click="switchToCurrentRequestsTab"
          v-bind:class="{ 'tab-links-active': currentRequestsTab, 'tab-links': !currentRequestsTab }"
        >Current Requests</a>

        <a
          v-bind:class="{ 'tab-links-active': requestHistoryTab, 'tab-links': !requestHistoryTab }"
          @click="switchToRequestHistoryTab"
        >Request History</a>
      </div>

      <transition name="fade" mode="in-out">
        <div
          v-bind:key="requestLandingPage"
          class="request-container"
          v-bind:class="{ 'dialog-showing': showDeleteRequestModal || unresolvedTicket, 'dialog-hidden': !showDeleteRequestModal && !unresolvedTicket }"
        >
          <div v-if="!this.requestLandingPage && !this.submitRequest" class="side-border-line" />

          <div class="container-body">
            <div v-if="this.currentRequestsTab">
              <div v-if="this.studentAcceptedSession">
                <div class="request-container-two">
                  <div class="heading-text">Begin your session</div>

                  <!-- TODO replace href with variable for zoom -->
                  <div class="sub-heading-text">Click the link to open your Zoom session</div>
                  <div class="sub-heading-text-larger" style="margin-top: 15px;">
                    <a
                      style="cursor: pointer; color: rgb(45, 58, 130) !important; z-index: 999; 
                              text-shadow: none !important;
                              margin-top: 4px;
                              font-size: 20px;
                              margin-left: 6px;"
                      target="_blank"
                      href="zoom.us"
                    >
                      <open-in-new-window style="margin-right:8px !important; padding-right: 5px;" />
                      <span style="margin-left: 10px;">{{this.zoomLink}}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                v-if="this.requestLandingPage && !this.showCountdown && !this.studentAcceptedSession"
              >
                <div class="top-border-line" />
                <div class="side-border-line-two" />

                <div
                  v-bind:class="{ 'margin-for-no-requests': this.getNumberOfPendingTickets() === 'no', 'margin-requests': this.getNumberOfPendingTickets() !== 'no' }"
                  class="heading-text"
                >Active Requests</div>

                <div
                  v-if="!this.openTicket"
                  class="sub-heading-text"
                  style="padding-top:7px;"
                >You currently have {{getNumberOfPendingTickets()}} pending {{getRequestOrRequestsText()}}.</div>

                <div
                  v-if="this.allOpenTicketsAmount && this.openTicket"
                  class="sub-heading-text"
                  style="padding-top:7px; font-size: 17px;"
                >
                  There {{this.getSingleOrPlural()}}
                  <span
                    style="font-weight: 600"
                  >{{this.allOpenTicketsAmount}}</span>
                  {{this.getSessionOrSessions()}} currently ahead of you. Please wait for the next available TA.
                </div>
              </div>

              <div v-if="this.showCountdown && !this.studentAcceptedSession">
                <div style="margin-top: 20px;" class="container-body-accept">
                  <div class="heading-text">Accept your session</div>

                  <div class="sub-heading-text-left" style="padding-top:2%;">
                    A TA is available.
                    <strong>Please accept the session before the timer runs out to continue.</strong>
                  </div>
                  <div
                    class="sub-heading-text-left-italic"
                  >If you do not accept in time, your request will be removed, and placed in your request history for resubmission.</div>

                  <div style="text-align: center; justify-content: center;">
                    <circular-count-down-timer
                      :initial-value="countdownTime()"
                      :steps="countdownTime()"
                      :seconds-stroke-color="'#7acbdf'"
                      :second-label="''"
                      :padding="0"
                      :size="120"
                      @finish="finished()"
                    ></circular-count-down-timer>

                    <button
                      v-bind:key="acceptSession"
                      @click="acceptSession"
                      type="submit"
                      class="fadeIn form-buttons"
                    >
                      <right-circle />Accept the Session
                    </button>
                  </div>
                </div>
              </div>

              <div v-if="this.requestLandingPage && !this.openTicket && !this.showCountdown">
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
                v-if="this.showTicket && !this.editingRequest && !this.showCountdown"
                style="text-align: center;"
              >
                <md-card
                  style="padding-top: 8px; padding-bottom: 10px; margin-top: 8px; margin-bottom: 10px;"
                >
                  <div
                    style="float: right; margin-top: 6px; margin-left: 0px; margin-right: 10px; "
                  >
                    <button class="edit-button" style="margin-top: 5px;" v-on:click="editRequest">
                      <edit style=" margin-bottom: 0px; padding-bottom: 0px;" />
                    </button>

                    <button
                      v
                      style="margin-top: 5px;"
                      v-on:click="showDeleteRequestModal = true"
                      class="close-button"
                    >
                      <close style="margin-bottom: 0px; padding-bottom: 0px;" />
                    </button>
                  </div>

                  <div v-if="this.ticketTime" class="card-line">
                    <div class="row">
                      <span class="card-categories col-sm-3">
                        <span style="margin-right: 6px;">
                          <clock />
                        </span>Time:
                      </span>
                      <span
                        style="padding-left: 35px !important;"
                        class="col-sm-9 text-body"
                      >{{this.ticketTime}}</span>
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
                      >{{ this.status }}</span>
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
                      >{{ this.oneLineOverview }}</span>
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
                      >{{ this.longerDescription }}</span>
                    </div>
                  </div>

                  <div v-if="this.attachments && this.attachments.length === 0">
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

                  <div v-if="this.codeSnippet">
                    <div class="card-line">
                      <div class="row">
                        <span class="card-categories col-sm-3">
                          <span style="margin-right: 6px;">
                            <code-symbol />
                          </span>Code:
                        </span>
                        <!-- <span style="padding-left: 20px !important;" class="col-sm-9 text-body"> -->
                        <Codemirror id="codeMirrorInput" v-model="codeSnippet" />

                        <!-- </span> -->
                      </div>
                    </div>
                  </div>

                  <div v-if="this.attachments && this.attachments.length > 0">
                    <div class="card-line">
                      <div class="row">
                        <span class="card-categories col-sm-3">
                          <span style="margin-right: 6px;">
                            <attachment />
                          </span>Files:
                        </span>
                        <span
                          style="margin-left:20px !important;"
                          v-for="(attachment, index) in (this.attachments)"
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

                <div
                  class="heading-text"
                  style="margin-left: 30px; margin-bottom: 10px; padding-top: 20px; padding-top: 18px;"
                >{{this.getRequestFormHeader()}}</div>

                <div style="margin-left: 8px;" class="form-container">
                  <div class="row" style="width: 70%;">
                    <label class="label-format">
                      <library class="label-icons" />Course Selection
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
                    <span v-if="!this.longerDescription" class="asterisk">*</span>
                    <b-form-text-area
                      id="textarea"
                      v-model="longerDescription"
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
                  </div>

                  <div class="row">
                    <Codemirror v-model="codeSnippet" />
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

                  <div
                    v-if="this.selectedCourse && this.oneLineOverview  && this.longerDescription"
                  >
                    <div style="text-align: center;">
                      <button
                        v-on:click="uploadFile"
                        v-bind:key="submitRequest"
                        type="submit"
                        style="margin-bottom: 10px; margin-top: 0px;"
                        class="fadeIn form-buttons"
                        @click="changeRequestState"
                      >
                        <right-circle style="margin-right:4px" />
                        {{this.getButtonText()}}
                      </button>
                    </div>
                  </div>

                  <div
                    v-if="!this.selectedCourse || !this.oneLineOverview  || !this.longerDescription"
                  >
                    <div style="text-align: center;">
                      <button
                        type="disabled"
                        disabled="true"
                        style="margin-bottom: 10px;
                      background-color: #d3d3d3 !important; margin-top: 0px;"
                        class="form-buttons-disabled"
                      >
                        <right-circle style="margin-right:4px" />
                        {{this.getButtonText()}}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!this.currentRequestsTab">
            <div class="top-border-line-two" />

            <div class="side-border-line-three" />

            <div style="margin-top: 30px;" class="heading-text">Prior Requests</div>

            <div
              v-if="this.ticketHistory"
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
                    <span
                      style="font-size: 9px; color: rgb(92, 99, 92); margin-right: 6px;"
                    >Re-submit</span>
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

                    <div v-if="ticket.createdAt" class="card-line-history">
                      <div class="row">
                        <span class="card-categories col-sm-3">
                          <date class="label-icons" />Date:
                        </span>
                        <span
                          class="col-sm-9 text-body"
                        >{{ (ticket.createdAt.split('T')[0].split('-')[1] + '-' + ticket.createdAt.split('T')[0].split('-')[2] + '-' + ticket.createdAt.split('T')[0].split('-')[0])}}</span>
                      </div>
                    </div>

                    <div v-if="ticket.createdAt" class="card-line-history">
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
    <!-- <button id="hiddenButton" style="display:none;" @click="triggerAccept"></button> -->
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
// const userId = "5ec5f90d81b13d23065ead3e";
const client = new Ably.Realtime(process.env.ABLY_KEY);

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
import Codemirror from "../components/Codemirror";

Vue.use(VueMaterial);
import Ticket from "../ui/models/Ticket";

export default {
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-form-checkbox": BFormCheckbox,
    "b-form-text-area": BFormTextarea,
    "b-form-radio": BFormRadio,
    "b-form-radio-group": BFormRadioGroup,
    Codemirror: Codemirror
  },

  data() {
    return {
      el: "#requests",
      codeSnippet: null,
      status: "Open",
      oneLineOverview: "",
      longerDescription: "",
      selectedCourse: null,
      createdAt: null,
      ticketTime: null,
      ticketDate: null,
      currentRequestsTab: true,
      requestHistoryTab: false,
      unresolvedTicket: false,
      rows: [],
      requestLandingPage: true,
      submitRequest: false,
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
      ticketChannel: client.channels.get("tickets"),
      fileUrls: [],
      fileObjects: [],
      enrolledCourses: [],
      expandChevron: true,
      collapseChevron: false,
      showDeleteRequestModal: false,
      editingRequest: false,
      attachments: null,
      userId: null,
      studentName: null,
      allOpenTicketsAmount: null
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    addRow: function() {
      console.log(this.codeSnippet);
      var elem = document.createElement("tr");
      this.rows.push({
        file: {
          name: "Choose File"
        }
      });
    },
    saveEditChanges() {
      console.log("saving changes");
      var id = this.openTicket._id;

      axios
        .put("/api/updateTicket/" + id, {
          course: {
            _id: this.selectedCourse
          },
          oneLineOverview: this.oneLineOverview,
          longerDescription: this.longerDescription,
          codeSnippet: this.codeSnippet,
          attachments: this.fileObjects
        })
        .then(() => {});
      // this.setFieldsFromTicket();
      this.editingRequest = false;
      this.submitRequest = true;
      this.requestLandingPage = true;

      // Publish edited ticket
      this.ticketChannel.publish("ticketUpdate", this.openTicket);
    },
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
                  if (!this.editingRequest) {
                    this.submit();
                  } else {
                    this.saveEditChanges();
                  }
                }
              });
            }
          );
        }
      } else if (!this.editingRequest) {
        this.submit();
      } else {
        this.saveEditChanges();
      }
    },
    getOpenTicketStatus: function() {
      if (this.openTicket) {
        return true;
      }
      return false;
    },
    submitRating: function(ticket) {
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
    getButtonText: function() {
      if (this.editingRequest) {
        return "Save Changes";
      } else {
        return "Submit Changes";
      }
    },
    getSingleOrPlural: function() {
      if (this.allOpenTicketsAmount === 1) {
        return "is";
      }
      return "are";
    },
    openPage: function(attachmentUrl, attachmentName) {
      window.open(attachmentUrl, "_blank");
    },
    acceptSession: function() {
      this.scrollToTop();
      this.showCountdown = false;
      this.studentAcceptedSession = true;
      console.log("in accept session and zoomLink is " + this.zoomLink);

      // Publish an event to the  channel
      var studentChannel = client.channels.get(this.userId);
      studentChannel.publish("studentAcceptedSession", this.userId);
    },
    triggerAccept: function() {
      this.showCountdown = true;
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
    getRequestFormHeader: function() {
      if (!this.editingRequest) {
        console.log("not");
        return "Request a Session";
      }
      return "Edit Request";
    },
    getSessionOrSessions: function() {
      if (this.allOpenTicketsAmount === 1) {
        return "session";
      }
      return "sessions";
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
      console.log(this.code == null);
      console.log("remove");
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
      var studentChannel = client.channels.get(this.userId);

      studentChannel.subscribe("staffAcceptedTicket", message => {
        console.log("staff accepted ticket");
        this.zoomLink = message.data.zoomLink;
        this.openTicket.updatedAt = message.data.date;
        this.showCountdown = true;
      });

      console.log("student channel " + this.userId);
      studentChannel.subscribe("ticketMarkedClosed", message => {
        this.openTicket.status = "Closed";
        this.clearTicketWhenCanceledOrComplete();

        console.log("ticket was closed by staff");
      });

      this.ticketChannel.subscribe("ticketUpdate", message => {
        console.log("ticket count changed");
        this.getOpenTicketCount();
      });
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
    countdownTime: function() {
      // Read updated time
      let ticketTime = new Date(this.openTicket.updatedAt);

      let currentTime = new Date();
      ticketTime.setMinutes(ticketTime.getMinutes() + 1);
      return (
        ticketTime.getMinutes() * 60 +
        ticketTime.getSeconds() -
        (currentTime.getMinutes() * 60 + currentTime.getSeconds())
      );
    },
    finished: function() {
      var studentChannel = client.channels.get(this.userId);

      // When countdown is over, take them back to the other page
      this.openTicket.status = "Unresolved";
      this.unresolvedTicket = true;
      this.clearTicketWhenCanceledOrComplete();
    },

    clearTicketWhenCanceledOrComplete: function() {
      this.showCountdown = false;
      this.ticketHistory.push(this.openTicket);
      this.requestLandingPage = true;
      this.showTicket = false;
      this.submitRequest = false;
      this.openTicket = null;
      this.studentAcceptedSession = false;
    },

    reSubmitTicket: function(ticket) {
      var currentDate = new Date().toString();

      console.log("in resubmit " + ticket._id);
      var id = ticket._id;

      if (ticket.status !== "Closed") {
        axios
          .put("/api/updateTicket/" + id, {
            status: "Open",
            createdAt: currentDate
          })
          .then(() => {});
      }
      // Ticket was worked on in a session and keeps its rating,
      // so create a new one with the same data but with a new time stamp
      else {
        axios.post("/api/insertTicket", {
          status: "Open",
          owner: {
            _id: this.userId
          },
          course: {
            _id: ticket.course._id
          },
          oneLineOverview: ticket.oneLineOverview,
          longerDescription: ticket.longerDescription,
          codeSnippet: ticket.codeSnippet,
          createdAt: currentDate,
          attachments: ticket.attachments,
          rating: 0,
          ratingExplanation: "",
          wasRated: 0
        });
      }
      this.setFieldsFromTicket(ticket);
      this.showTicket = true;
      this.openTicket = ticket;
      this.openTicket.createdAt = currentDate;
      this.createdAt = currentDate;
      this.ticketTime = this.formatTime(
        currentDate.split("T")[1].substring(0, 5)
      );
      this.openTicket.status = "Open";
      this.status = "Open";
      this.getTickets();
      document.getElementById("landingTab").click();

      // Sends ticket to staff
      this.ticketChannel.publish("ticketUpdate", this.openTicket);
    },
    setFieldsFromTicket(ticket) {
      this.longerDescription = ticket.longerDescription;
      this.codeSnippet = ticket.codeSnippet;
      this.oneLineOverview = ticket.oneLineOverview;
      this.selectedCourse = ticket.course._id;
      this.attachments = ticket.attachments;
      this.status = ticket.status;
      this.createdAt = ticket.createdAt;
      this.ticketTime =
        " " + this.formatTime(ticket.createdAt.split("T")[1].substring(0, 5));
      this.showTicket = true;
      if (this.codeSnippet) {
        console.log("code snippet in set fields");
        // document.getElementById("codeMirrorInput").fromTextArea(document.getElementById("codeMirrorInput"), {
        //   lineNumbers: true
        // }).setValue("your code here");

        // var textArea = document.getElementById("codeMirrorInput");
        // textArea.code = "CODEEE";

        // var editor = document.getElementById("codeMirrorInput").fromTextArea(textArea);
        // editor.getDoc().setValue('var msg = "Hi";');
        // console.log("here");

        // var currentValue = document.getElementById("codeMirrorInput").cm.getValue();
        // console.log(currentValue);
        // var str = "some new value";

        // document.getElementById("codeMirrorInput").cm.setValue("CODDEEE");
      }
    },
    changeRequestState: function() {
      if (this.requestLandingPage === true && this.submitRequest === false) {
        this.fileObjects = [];
        this.requestLandingPage = false;
        return this.requestLandingPage;
      } else {
        var channel = client.channels.get("staff");
        // Publish a message to the test channel
        channel.publish("ticketUpdate", "ticket updated");

        this.submitRequest = true;
        this.scrollToTop();

        return this.requestLandingPage;
      }
    },
    editRequest: function() {
      this.editingRequest = true;
      this.submitRequest = false;
      this.requestLandingPage = false;
    },
    closeRequestForm: function() {
      if (this.editingRequest) {
        this.showTicket = true;
        this.editingRequest = false;
      }
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
    clearForm: function() {
      console.log("clearing form");
      this.oneLineOverview = "";
      this.longerDescription = "";
      this.codeSnippet = "";
      this.createdAt = "";
      this.status = "Open";
      this.openTickets = [];
      this.file = null;
      this.showCountdown = false;
      this.submitRequest = false;
      this.requestLandingPage = false;
      this.fileUrls = [];
      this.rows = [];
      this.fileObjects = [];
      this.openTicket = null;
    },
    compareTicketsRev(ticketA, ticketB) {
      if (ticketA.updatedAt > ticketB.updatedAt) {
        return -1;
      } else if (ticketA.updatedAt < ticketB.updatedAt) {
        return 1;
      }
      return 0;
    },
    async loadUser(user) {
      this.student = this.userId;
    },

    async submit() {
      if (this.selectedCourse === null) {
        this.selectedCourse = this.enrolledCourses[0].value;
      }

      if (!this.openTicket) {
        console.log("inserting ", this.fileObjects);
        let ticket = await axios.post("/api/insertTicket", {
          status: "Open",
          owner: {
            _id: this.userId
          },
          course: {
            _id: this.selectedCourse
          },
          oneLineOverview: this.oneLineOverview,
          longerDescription: this.longerDescription,
          codeSnippet: this.codeSnippet,
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

        if (this.codeSnippet) {
          console.log("code snippet here");
          CodeMirror.fromTextArea(document.getElementById("codeMirrorInput"), {
            lineNumbers: true
          }).setValue("your code here");
        }
        this.openTicket = ticket.data;

        if (ticket) {
          this.requestLandingPage = true;
          this.showTicket = true;
          console.log(this.openTicket);
        }

        // sends ticket to staff
        this.ticketChannel.publish("ticketUpdate", this.openTicket);
      }
    },

    async getTickets() {
      console.log("in get tickets");

      let tickets = await axios.get(
        "/api/tickets/getTicketsByUser/" + this.userId,
        {}
      );

      tickets.data.sort(this.compareTicketsRev);

      this.ticketHistory = tickets.data.filter(
        ticket => ticket.status !== "Open" && ticket.owner._id == this.userId
      );

      this.openTickets = tickets.data.filter(
        ticket => ticket.status === "Open" && ticket.owner._id == this.userId
      );

      if (this.openTickets.length > 0) {
        this.openTicket = this.openTickets[0];
        this.setFieldsFromTicket(this.openTicket);
        this.showTicket = true;
      }
    },

    async getOpenTicketCount() {
      if (this.openTicket) {
        console.log("getting open tickets");
        let allOpenTickets = await axios.get("/api/tickets/getOpenTickets");
        allOpenTickets = allOpenTickets.data;

        if (allOpenTickets) {
          allOpenTickets = allOpenTickets.filter(
            item => item.createdAt < this.openTicket.createdAt
          );
          this.allOpenTicketsAmount = allOpenTickets.length;
        }
      }
    },

    async getStudentInfo() {
      let student = await axios.get("/api/users/" + this.userId);
      this.student = student.data;

      if (this.student) {
        this.studentName =
          this.student.name.firstName + " " + this.student.name.lastName;
      }
      console.log(this.studentName);
      student.data.classes.forEach(element => {
        this.loadCourses(element);
      });
      this.startSubscribe();

      this.getTickets();
    },

    async cancelTicket() {
      if (this.openTicket) {
        this.ticketChannel.publish("ticketClosed", this.openTicket);
        this.openTicket.status = "Unresolved";
        this.ticketHistory.unshift(this.openTicket);

        var id = this.openTicket._id;

        axios
          .put("/api/updateTicket/" + id, {
            status: "Unresolved"
          })
          .then(() => {
            console.log("resetting ticket");
            this.openTicket = null;
          });
        this.clearForm();
        this.requestLandingPage = true;
        this.openTicket = null;
        this.submitRequest = false;
        this.scrollToTop();
        this.showTicket = false;
      }
    }
  },

  beforeMount() {
    this.scrollToTop();
    const queryString = window.location.search;
    this.userId = queryString.split("=")[1];
    console.log(this.userId);
    if (this.userId) {
      this.getStudentInfo();
    }
    this.getOpenTicketCount();
  },
  mounted() {}
};
</script>