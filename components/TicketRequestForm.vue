<template>
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <div id="requests">
     
      <!-- The transition effects for the containers changing -->
      <transition name="fade" mode="in-out">
       
        <div v-bind:key="request" class="request-container">
         
          <div class="request-tabs">
            <a
              @click="switchToCurrentRequestsTab"
              v-bind:class="{ 'tab-links-active': currentRequestsTab, 'tab-links': !currentRequestsTab }"
            >Current Requests</a>

            <a
              v-bind:class="{ 'tab-links-active': requestHistoryTab, 'tab-links': !requestHistoryTab }"
              @click="switchToRequestHistoryTab"
            >Request History</a>
          </div>

          <!--  The first container to show  -->
          <div v-if="this.currentRequestsTab">
            <div v-if="this.request === true">
              <div class="heading-text">My Requests</div>

              <!-- TO DO: make this text dynamic based on user tickets -->
              <div
                class="sub-heading-text"
                style="padding-top:2%;"
              >You currently have no pending requests.</div>

              <div style="text-align: center;">
                <button
                  v-bind:key="request"
                  @click="changeRequestState"
                  type="submit"
                  style="margin-bottom: 20%;"
                  class="fadeIn form-buttons"
                >
                  <right-circle />Request a Session
                </button>
              </div>
            </div>

            <!-- Container for filling out the request form -->
            <div v-if="this.request === false && this.submitRequest === false">
              <div class="heading-text">Request a Session</div>
              <div
                class="sub-heading-text-left"
                style="padding-top:2%;"
              >Complete the form below to request assistance from a lab tutor.</div>

              <div class="form-container">
                <div class="row" style="width: 70%;">
                  <b-form-select
                    :options="classes"
                    size="sm"
                    class="mt-3"
                    placeholder="Please select the class you need help with"
                  ></b-form-select>
                </div>

                <div class="row">
                  <label class="label-format">Please enter a brief one-sentence summary of the issue</label>
                  <b-form-input v-model="probDes" placeholder class="form-text-areas"></b-form-input>
                </div>

                <div class="row">
                  <label class="label-format">Elaborate on the issue, if needed.</label>
                  <b-form-text-area
                    id="textarea"
                    v-model="problem"
                    placeholder
                    rows="2"
                    max-rows="6"
                  ></b-form-text-area>
                  <!-- removed for now from above :disabled="isDisabled" -->

                  <pre class="mt-3 mb-0">{{ problem }}</pre>
                </div>

                <div class="row">
                  <label class="label-format">Paste a code snippet, if needed</label>
                  <b-form-text-area id="textarea" v-model="code" placeholder rows="1" max-rows="6"></b-form-text-area>
                  <!-- removed for now from above :disabled="isDisabled" -->
                  <!-- <pre class="mt-3 mb-0">{{ code }}</pre> -->
                </div>

                <div class="Row">
                  <label class="label-format">Add a file, if needed</label>
                </div>

                <table class="table request-table">
                  <tbody>
                    <!-- This is where the new questions are inserted -->
                    <div class="top-row" v-for="(row, index) in rows" v-bind:key="row">
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
                            style="cursor: pointer; z-index: 999;"
                          >Remove</a>
                        </td>
                      </tr>
                    </div>
                  </tbody>
                </table>

                <span class="add-button" @click="addRow">
                  <plus-circle />
                </span>

                <div style="text-align: center;">
                  <!--  On select, the state of request is changed, forcing a transition effect and
                  changing what is rendered on the page-->
                  <button
                    v-bind:key="submitRequest"
                    type="submit"
                    style="margin-bottom: 10px; margin-top: 10px;"
                    class="fadeIn form-buttons"
                    @click="changeRequestState"
                  >
                    <right-circle />Submit Request
                  </button>

                  <!-- ADD THIS BACK TO BUTTON ABOVE WHEN READY
                  v-on:click="submit"-->
                </div>
              </div>
            </div>

            <div v-if="this.submitRequest === true" v-bind:key="submitRequest">
              <div class="heading-text">Request submitted</div>
              <div
                class="sub-heading-text"
                style="padding-top:2%;"
              >The current wait time is approximately 20 minutes.</div>
            </div>

          </div>
        </div>

                  <div v-if="this.requestHistoryTab">
                    hi
                    </div>

      </transition>
    </div>
  </div>
</template>
      

<script>
import Vue from "vue";
import axios from "~/plugins/axios";
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

  //users classes show up as options
  async loadClasses(courses) {
    courses = await axios.get("../api/courses/" + courses._id);
    let text = courses.data.dep + " " + courses.data.courseNum;
    this.classes.push({ value: courses.data._id, text: text });
    console.log("loading classes");
  },
  async loadUser(user) {
    this.student = user.data._id;
  },

  // COMMENTED OUT FOR NOW BC ITS GIVING SOME ISSUES
  // submit: function() {
  //   if (this.problem != "" && this.probDes != "" && this.code != "") {
  //     axios.post("/api/insertTicket", {
  //       status: "Open",
  //       owner: {
  //         _id: this.student
  //       },
  //       course: {
  //         _id: this.selected
  //       },
  //       oneLineOverview: this.probDes,
  //       longerDescription: this.problem,
  //       codeSnippet: this.code,
  //       createdAt: new Date().toString()
  //     });
  //   } else {
  //     console.log("not submitted");
  //   }
  // },
  computed: {
    isDisabled: function() {
      return !this.selected;
    }
  },

  // COMMENTED OUT BC THERE'S AN ERROR RN
  //had to rename function "created" because I couldnt access "options" property
  async created() {
    // let student = await axios.get("/api/students/" + this.$route.params.id);
    // student.data.classes.forEach(element => {
    //   this.loadClasses(element);
    // });
    // this.loadUser(student);
  },

  data() {
    return {
      el: "#requests",
      currentRequestsTab: true,
      requestHistoryTab: false,
      show: true,
      rows: [],
      status: "Open",
      oneLineOverview: "",
      shown: false,
      request: true,
      submitRequest: false,
      problem: "",
      probDes: "",
      code: "",
      file: null,
      selected: null,
      student: null,
      classes: [
        { value: null, text: "Please select the class you need help with:" },
        { value: "ICS32", text: "ICS32" }
      ]

      // TODO: replace hardcoded classes with dynamic below
      // classes: [
      //   { value: null, text: "Please select the class you need help with:" }
      // ]
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    addRow: function() {
      var elem = document.createElement("tr");
      this.rows.push({
        title: "",
        description: "",
        file: {
          name: "Choose File"
        }
      });
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
    removeElement: function(index) {
      this.rows.splice(index, 1);
    },
    setFilename: function(event, row) {
      var file = event.target.files[0];
      row.file = file;
    },
    loadClasses: function(classSelected) {
      var text = classSelected.dep + " " + classSelected.courseNum;
      this.classes.push({ value: classSelected._id, text: text });
    },
    changeRequestState: function() {
      if (this.request === true && this.submitRequest === false) {
        this.request = false;
        return this.request;
      } else {
        this.submitRequest = true;
        this.scrollToTop();
        return this.request;
      }
    }
  },
  beforeMount() {
    //console.log("hi");

    this.scrollToTop();
  }
};
</script>


<style>
.form-buttons {
  width: 60% !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.form-text-areas {
  border-style: solid;
  border: 1px !important;
  /* border-color: rgb(180, 175, 175) !important; */
  border: 2px solid #dfdada !important;
}

/* Styling for adding rows */
.add-button {
  align-items: left;
  font-size: 30px;
  color: rgb(154, 224, 231);
  cursor: pointer;
  padding-top: 15px !important;
}

.row {
  margin-top: 5px;
  margin-bottom: 5px;
}

.top-row {
  border-top: 1px solid #dee2e6;
}

.remove-column {
  align-content: flex-end;
}

table th,
.table td {
  border-top: none;
}

.request-table {
  margin-top: 10px;
  z-index: 1 !important;
}

.file-container [type="file"] {
  cursor: inherit;
  display: block;
  /* font-size: 999px; */
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
.request-tabs {
  margin-top: 10px;
  margin-bottom: 6px;
  width: 100%;
  display: inline-block;
  text-align: center;
}

.file-button {
}

.file-container:hover {
  opacity: 0.8;
}

.login-form {
  text-align: center;
}

.request-container {
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

.form-container {
  position: relative;
  padding-top: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 2px;
  font-family: "Poppins";
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"] {
  color: #0d0d0d;
  text-align: left;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 100%;
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
  border-bottom: 2px solid #5fbae9;
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
</style>