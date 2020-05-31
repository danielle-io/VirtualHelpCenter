
<!-- TODO: make sure an email was actually typed before allowing additions to be added or save button to be clicked-->
<!-- TODO:  Check that email doesnt already exist in system -->
<!-- TODO:  Save information for staff name, role, classes -->
<!-- TODO: Check and process removed emails -->
<style>
.add-email-row {
  margin-top: 10px;
  /* float: left !important; */
}

.small-column {
  margin-left: 4%;
}

.remove-button {
  cursor: pointer;
  z-index: 999;
  size: 8px;
  margin-top: 14px;
  padding-top: 14px;
}

.email-input {
  float: left !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Styling for adding newStaffEmails */
.add-button {
  align-items: left;
  font-size: 30px;
  color: rgb(154, 224, 231);
  cursor: pointer;
  padding-top: 10px !important;
}

.top-row {
  border-top: 1px solid #dee2e6;
}

.table {
  text-align: center;
}

table th,
.table td {
  border-top: none;
}

.request-container {
  position: relative;
  padding-left: px;
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

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  /* border-bottom: 2px solid #5fbae9; */
}

input[type="text"] {
  padding-top: 6px !important;
  color: #0d0d0d;
  text-align: left;
  overflow: hidden;
  display: inline-block;
  font-size: 16px;
  width: 100% !important;
  /* margin: 5px; */
  /* border: 2px solid #f6f6f6; */
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  /* border-bottom: 2px solid #5fbae9; */
}

input[type="text"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */
/* Simple CSS3 Fade-in-down Animation */
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

.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  font-weight: 300 !important;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover:after {
  width: 100%;
  font-weight: 300 !important;
}

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
  text-decoration: underline !important;
  color: #0286a0 !important;
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

.md-subhead {
  justify-content: left;
}
</style>


<template>
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <div id="admin" style="position: relative;">
      <div class="request-container">
        <div class="heading-text" style="margin-bottom: 10px;">Administrative Actions</div>

        <div class="request-tabs">
          <a
            @click="switchToAddStaffTab"
            v-bind:class="{ 'tab-links-active': addStaffTab, 'tab-links': !addStaffTab }"
          >Add a Tutor</a>

          <a
            v-bind:class="{ 'tab-links-active': removeStaffTab, 'tab-links': !removeStaffTab }"
            @click="switchToRemoveStaffTab"
          >Remove a Tutor</a>

           <!-- <a
            v-bind:class="{ 'tab-links-active': addCourseTab, 'tab-links': !addCourseTab }"
            @click="switchToAddCourseTab"
          >Add a Course</a> -->

          
        </div>

        <!-- THE ADD TUTOR TAB -->
        <div v-if="this.addStaffTab">
          <div class="top-row"></div>

          <div
            v-if="!this.addAdditionRowClickedAfterSubmit && this.submitAdditionClicked"
            id="emailsSubmitted"
            class="sub-heading-text-larger"
          >Emails Submitted!</div>

          <table class="table">
            <tbody>
              <tr>
                <div
                  class="input-and-add-button"
                  v-for="(rowKey, index) in newStaffEmails"
                  v-bind:key="index"
                >
                  <td width="80%">
                    <input width="100%" type="text" placeholder="Enter their First Name" />
                    <input width="100%" type="text" placeholder="Enter their Last Name" />
                    <input
                      width="100%"
                      ref="newStaffEmails"
                      type="text"
                      class="email-input"
                      placeholder="Enter their email"
                    />
                    <div class="row" style="margin-left: 10px; margin-top: 0px; width: 70%;">
                      <b-form-select
                        :options="roles"
                        size="sm"
                        class="mt-3"
                        placeholder="Select their role"
                      ></b-form-select>
                    </div>
                  </td>
                  <td sm="auto">
                    <a v-on:click="removeAddStaffRow(index);" class="remove-button">Remove Addition</a>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>

          <!-- TODO: disable button unless a valid email is typed in current rows -->
          <span ref="newStaffRowButton" class="add-button" @click="addAdditionRow">
            <plus-circle />
          </span>

          <div style="text-align: center;">
            <!-- TODO: disable submit button until an email is entered -->
            <button
              @click="submitNewStaff"
              type="submit"
              style="margin-bottom: 10px; margin-top: 10px;"
              class="fadeIn request-staff-buttons"
            >
              <right-circle />Submit
            </button>
          </div>
        </div>

        <!-- THE REMOVE STAFF TAB -->
        <div v-if="this.removeStaffTab">
          <div class="top-row"></div>

          <div
            v-if="!this.addRemovalRowClickedAfterSubmit && this.submitForRemovalClicked"
            id="emailsSubmitted"
            class="sub-heading-text-larger"
          >Accounts Removed</div>

          <table class="table">
            <tbody>
              <tr>
                <div
                  class="input-and-add-button"
                  v-for="(rowKey, index) in removeStaffEmails"
                  v-bind:key="index"
                >
                  <td width="80%">
                    <div class="row" style="margin-left: 10px; width: 70%;">
                      <!-- TODO: have value selected save -->
                      <div class="row" style="margin-left: 10px; width: 70%;">
                        <b-form-select
                          :options="currentStaff"
                          ref="removeStaffEmails"
                          size="sm"
                          class="mt-3"
                          placeholder="Select their role"
                        ></b-form-select>
                      </div>
                    </div>
                  </td>
                  <td sm="auto">
                    <a
                      v-on:click="removeDeleteStaffRow(index);"
                      class="remove-button"
                    >Remove Addition</a>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>

          <!-- Only allows a new addition if there was one submitted -->
          <div v-if="this.numberOfRemovalRows === 0">
            <span ref="addRowOnRemovalTab" class="add-button" @click="addRemovalRow">
              <plus-circle />
            </span>
          </div>

          <!-- TODO: disable submit button until an email is selected -->
          <div style="text-align: center;">
            <button
              @click="removeStaffByEmails"
              type="submit"
              style="margin-bottom: 10px; margin-top: 10px;"
              class="fadeIn request-staff-buttons"
            >
              <right-circle />Submit Removal
            </button>
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
import {
  BFormInput,
  BFormSelect,
  BFormCheckbox,
  BFormTextarea
} from "bootstrap-vue";
export default {
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-form-checkbox": BFormCheckbox,
    "b-form-text-area": BFormTextarea
  },

  // TODO: Change this
  head() {
    return {
      title: "Tickets"
    };
  },

  async addAdminUser() {
    // let student = await axios.get("/api/students/" + this.$route.params.id);
    // student.data.classes.forEach(element => {
    //   this.loadClasses(element);
    // });
    // this.loadUser(student);
  },

  data() {
    return {
      el: "#admin",
      newStaffEmails: [],
      removeStaffEmails: [],
      addStaffTab: true,
      removeStaffTab: false,
      color: "#7e6694",
      submitAdditionClicked: false,
      submitForRemovalClicked: false,
      addAdditionRowClickedAfterSubmit: false,
      addRemovalRowClickedAfterSubmit: false,
      numberOfAdditionRows: 0,
      numberOfRemovalRows: 0,
      emailsToSubmit: [],
      roles: [
        { value: null, text: "Select their role" },
        { value: "TA", text: "TA" },
        { value: "Reader", text: "Reader" }
      ],
      removenewStaffEmails: [],
      // TODO: replace with empty array
      currentStaff: [
        { value: null, text: "Select the email to remove" },
        { value: "jham@uci.edu", text: "jham@uci.edu" },
        { value: "riley2@uci.edu", text: "riley2@uci.edu" }
      ]
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    
    switchToAddStaffTab: function() {
      this.addStaffTab = true;
      this.removeStaffTab = false;
      this.scrollToTop();
      return this.addStaffTab;
    },
    switchToRemoveStaffTab: function() {
      if (this.numberOfRemovalRows === 0) {
        this.addRemovalRow();
      }
      this.addStaffTab = false;
      this.removeStaffTab = true;
      this.scrollToTop();
      return this.removeStaffTab;
    },
    addAdditionRow: function() {
      this.numberOfAdditionRows += 1;
      this.addAdditionRowClickedAfterSubmit = true;
      this.submitAdditionClicked = false;

      var elem = document.createElement("tr");
      // It breaks without this line idk why rn
      this.newStaffEmails.push({});
    },
    addRemovalRow: function() {
      this.numberOfRemovalRows += 1;

      this.addRemovalRowClickedAfterSubmit = true;
      this.submitForRemovalClicked = false;

      var elem = document.createElement("tr");
      // It breaks without this line idk why rn
      this.removeStaffEmails.push({});
    },
    // This is to make sure one row is input on load
    clickRowOnLoad() {
      this.$refs.newStaffRowButton.click();
    },
    removeAddStaffRow: function(index) {
      this.numberOfAdditionRows -= 1;
      this.newStaffEmails.splice(index, 1);
    },
    removeDeleteStaffRow: function(index) {
      this.numberOfRemovalRows -= 1;
      this.removeStaffEmails.splice(index, 1);
    },
    // TODO: this will populate this.currentStaff with the current
    // staff emails an admin can select from
    getCurrentStaff() {
      console.log("getting current staff");
    },

    // TODO: Make sure none of the emails are duplicates
    submitNewStaff() {
      this.addAdditionRowClickedAfterSubmit = false;
      this.submitAdditionClicked = true;

      var rowCount = this.numberOfAdditionRows;
      for (var i in this.$refs.newStaffEmails) {
        if (this.$refs.newStaffEmails[i].value === "") {
          continue;
        }
        var email = this.$refs.newStaffEmails[i].value;

        this.emailsToSubmit.push(this.$refs.newStaffEmails[i].value);
        axios.post("/api/insertTutor", {
          email: this.$refs.newStaffEmails[i].value
        });
      }

      // Get rid of populated rows
      for (var i = rowCount - 1; i > -1; i--) {
        this.removeAddStaffRow(i);
      }
      this.scrollToTop();
    },

    // TODO: this post request should be changing delete column
    // of that email to 1
    // TODO: make sure it runs only if email selected from dropdown
    removeStaffByEmails() {
      this.submitForRemovalClicked = true;
      this.addRemovalRowClickedAfterSubmit = false;

      var rowCount = this.numberOfRemovalRows;

      for (var i in this.$refs.removeStaffEmails) {
        if (this.$refs.removeStaffEmails[i].value === "") {
          continue;
        }
        //   // TO DO: this is where you can add each email to the
        //   // db. The email is in var email below!
        var email = this.$refs.removeStaffEmails[i].value;
      }

      // Get rid of populated rows
      for (var i = rowCount - 1; i > -1; i--) {
        this.removeDeleteStaffRow(i);
      }
      this.scrollToTop();
    }
  },
  // Runs first
  beforeMount() {
    this.scrollToTop();
    this.getCurrentStaff();
  },
  mounted() {
    this.clickRowOnLoad();
  }
};
</script>