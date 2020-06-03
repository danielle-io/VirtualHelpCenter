
<!-- TODO:  Check that email doesnt already exist in system -->
<!-- TODO:  Save information for staff name, role, classes -->
<!-- TODO:  Check that email doesnt already exist in system -->
<!-- TODO: Add courses -->
<style>
.add-email-row {
  margin-top: 10px;
  /* float: left !important; */
}

.container-body {
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  overflow-y: scroll;
  max-height: 670px;
}

.form-buttons-disabled {
  width: 40% !important;
  cursor: dafualt !important;
  background-color: #d3d3d3 !important;
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

.form-line {
  margin-top: 4px;
  margin-bottom: 15px;
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

/* TABS */
h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  /* border-bottom: 2px solid #5fbae9; */
}

input[type="text"] {
  padding-top: 6px;
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

.hidden-text {
  display: none;
  line-height: 0px;
  font-size: 0px;
  margin: 0;
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
  margin-top: 26px;
  margin-bottom: 25px;
  width: 100%;
  display: inline-block;
  text-align: center;
}
</style>

<template>
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <div id="admin" style="position: relative;">
      <div class="request-tabs">
        <a
          @click="switchToAddStaffTab"
          v-bind:class="{ 'tab-links-active': addStaffTab, 'tab-links': !addStaffTab }"
        >Add a Tutor</a>

        <a
          v-bind:class="{ 'tab-links-active': removeStaffTab, 'tab-links': !removeStaffTab }"
          @click="switchToRemoveStaffTab"
        >Remove a Tutor</a>
      </div>

      <div style="padding-top: 16px;" class="request-container">
        <div
          class="heading-text"
          style="margin-top: 16px; margin-bottom: 10px;"
        >Administrative Actions</div>

        <div id="submittedText" style="font-size: 16px;" class="hidden-text">
          <check-circle style="height: 1.3em !important;" />
          <span style="margin-left:10px;">Submitted!</span>
        </div>

        <div id="removedText" style="font-size: 16px;" class="hidden-text">
          <check-circle style="height: 1.3em !important;" />
          <span style="margin-left:10px;">Staff Member Removed</span>
        </div>

        <div class="container-body">
          <div v-if="this.addStaffTab">
            <div style="margin-left: 12px;" class="form-container">
              <div class="row" style="width: 70%;">
                <label class="label-format-smaller">
                  <student class="label-icons" />Name
                  <span v-if="!firstName || !lastName" class="asterisk">*</span>
                </label>
              </div>

              <div class="row form-line">
                <b-form-input
                  style="margin-right: 140px; border-top: none; border-left:none; border-right:none; border-radius:0;"
                  placeholder="Enter their First Name"
                  v-model="firstName"
                  required
                ></b-form-input>
              </div>

              <div class="row form-line">
                <b-form-input
                  style="margin-right: 140px; border-top: none; border-left:none; border-right:none; border-radius:0;"
                  placeholder="Enter their Last Name"
                  v-model="lastName"
                  required
                ></b-form-input>
              </div>

              <div class="row">
                <label class="label-format-smaller">
                  <email class="label-icons" />Email
                  <span v-if="!validateEmail()" class="asterisk">*</span>
                </label>
              </div>

              <div class="row form-line">
                <b-form-input
                  style="margin-right: 140px; border-top: none; border-left:none; border-right:none; border-radius:0;"
                  placeholder="Enter their email"
                  v-model="email"
                  type="email"
                  required
                  class="email-input"
                ></b-form-input>
              </div>

              <div class="row">
                <label class="label-format-smaller">
                  <zoom class="label-icons" />Zoom
                </label>
              </div>

              <div class="row form-line">
                <b-form-input
                  style="margin-right: 140px; border-top: none; border-left:none; border-right:none; border-radius:0;"
                  placeholder="Enter their Zoom link, if available"
                  v-model="zoomLink"
                  type="email"
                  class="email-input"
                ></b-form-input>
              </div>

              <div class="row">
                <label style="margin-bottom: 0px; padding-bottom:0px;" class="label-format-smaller">
                  <book class="label-icons" />Role
                </label>
              </div>

              <b-form-select
                style="margin-top: 0px; padding-top: 0px; border-radius: 0px; display: in-line-block; border-left:none; border-right:none; border-top: none; width: 30%;"
                :options="roles"
                size="sm"
                class="mt-3"
                v-model="role"
              ></b-form-select>

              <div class="row">
                <label class="label-format-smaller">
                  <library class="label-icons" />Courses
                </label>
              </div>

              <div class="row">
                <b-form-radio-group
                  v-model="selectedCourse"
                  :options="courseList"
                  required
                  v-on:change="getSelectedCourse"
                ></b-form-radio-group>
              </div>

              <!-- <div class="row">
                  <b-form-radio-group
                    v-model="selectedCourses"
                    :options="courseList"
                    required
                    v-on:change="getSelectedCourse"
                  ></b-form-radio-group>
              </div>-->
            </div>

            <div v-if="this.firstName && this.lastName && this.validateEmail()">
              <div style="text-align: center;">
                <button
                  @click="addStaffClicked()"
                  type="submit"
                  style="margin-bottom: 10px; margin margin-top: 10px;"
                  class="fadeIn request-staff-buttons"
                >
                  <right-circle />Submit
                </button>
              </div>
            </div>

            <div v-if="!this.firstName || !this.lastName || !this.validateEmail()">
              <div style="text-align: center;">
                <button
                  type="disabled"
                  disabled="true"
                  style="margin-bottom: 10px; margin margin-top: 10px;
                      background-color: #d3d3d3 !important;"
                  class="form-buttons-disabled"
                >
                  <right-circle style="margin-right:4px" />Submit
                </button>
              </div>
            </div>
          </div>

          <div v-if="this.removeStaffTab">
            <div style="margin-left: 12px;" class="form-container">
              <div class="row">
                <label style="margin-top: 0px;" class="label-format-smaller">
                  <email class="label-icons" />Remove By Email
                </label>
              </div>

              <div class="row" style="margin-left: 10px;">
                <b-form-select
                  style="margin-top: 6px; border-radius: 0px; display: in-line-block; border-left:none; border-right:none; border-top: none; width: 40%;"
                  :options="currentStaff"
                  size="sm"
                  class="mt-3"
                  v-model="staffMemberToRemove"
                ></b-form-select>
              </div>

              <div v-if="this.staffMemberToRemove">
                <div style="text-align: center; margin-top:15px;">
                  <button
                    @click="removeStaffByEmails"
                    type="submit"
                    style="margin-bottom: 10px; margin margin-top: 10px;"
                    class="fadeIn request-staff-buttons"
                  >
                    <right-circle />Submit Removal
                  </button>
                </div>
              </div>

              <div v-if="!this.staffMemberToRemove">
                <div style="text-align: center;">
                  <button
                    type="disabled"
                    disabled="true"
                    style="margin-bottom: 10px; margin margin-top: 10px;
                      background-color: #d3d3d3 !important;"
                    class="form-buttons-disabled"
                  >
                    <right-circle style="margin-right:4px" />Submit Removal
                  </button>
                </div>
              </div>
            </div>
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
  BFormTextarea,
  BFormRadio,
  BFormRadioGroup
} from "bootstrap-vue";
export default {
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-form-checkbox": BFormCheckbox,
    "b-form-text-area": BFormTextarea,
    "b-form-radio": BFormRadio,
    "b-form-radio-group": BFormRadioGroup
  },

  head() {
    return {
      title: "Admin"
    };
  },

  async addAdminUser() {},

  data() {
    return {
      el: "#admin",
      removeStaffEmails: [],
      addStaffTab: true,
      removeStaffTab: false,
      color: "#7e6694",
      submitted: false,
      removed: false,
      numberOfAdditionRows: 0,
      numberOfRemovalRows: 0,
      firstName: null,
      lastName: null,
      email: "",
      role: null,
      roles: [
        { value: "TA", text: "TA" },
        { value: "Reader", text: "Reader" }
      ],
      courseList: [],
      selectedCourses: [],
      selectedCourse: null,
      staffMemberToRemove: null,
      zoomLink: "",
      currentStaff: [{ value: null, text: "Select the email to remove" }]
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    async addStaffClicked() {
      document.getElementById("submittedText").className = "sub-heading-text";

      this.submitted = true;
      this.clearForm();

      setTimeout(function() {
        this.submitted = false;
        document.getElementById("submittedText").className = "hidden-text";
      }, 3000);
      this.scrollToTop();
      user = await axios.post("/api/insertStaff", {
        name: {
          firstName: this.firstName,
          lastName: this.lastName
        },
        email: this.email,
        ucinetid: this.ucinetid,
        classes: selectedCourses,
        zoomLink: this.zoomLink,
        deleted: 0
      });
    },
    validateEmail: function() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
    getSelectedCourse: function(course) {
      this.selectedCourse = course;
      console.log(course);
    },
    clearForm: function() {
      console.log("clearing form");
      this.email = "";
      this.firstName = null;
      this.lastName = null;
      this.zoomLink = "";
    },
    switchToAddStaffTab: function() {
      this.addStaffTab = true;
      this.removeStaffTab = false;
      this.scrollToTop();
      return this.addStaffTab;
    },
    switchToRemoveStaffTab: function() {
      this.addStaffTab = false;
      this.removeStaffTab = true;
      this.scrollToTop();
      return this.removeStaffTab;
    },
    removeStaffByEmails() {
      document.getElementById("removedText").className = "sub-heading-text";

      var id = this.staffMemberToRemove;
      this.removed = true;
      console.log(this.staffMemberToRemove);

      setTimeout(function() {
        this.removed = false;
        document.getElementById("removedText").className = "hidden-text";
      }, 3000);

      axios
        .put("/api/users/updateUser/" + id, {
          deleted: 1
        })
        .then(() => {
          console.log("getting new user list");
        });

      // var newStaff = [];

      // this.currentStaff.forEach(staff => {
      //   if (staff._id !== id) {
      //     newStaff.push({
      //       value: staff._id,
      //       text: staff.email
      //     });
      //   }
      // });

      this.currentStaff = this.currentStaff.filter(staff => staff.value !== id);

      console.log("newstaff");
      // console.log(newStaff);

      // if (newStaff.length === this.currentStaff.length -1){
      //   console.log(newStaff);
      //   this.currentStaff = newStaff;
      // }

      console.log(this.currentStaff);

      this.staffMemberToRemove = null;
    },
    async getCurrentStaff() {
      let staffList = await axios.get("/api/users/getUserByType/" + "Staff");
      console.log(staffList);

      if (staffList.data) {
        console.log("courses ");
        staffList.data.forEach(staff => {
          this.currentStaff.push({
            value: staff._id,
            text: staff.email
          });
        });
      }
    },
    async loadCourses() {
      let courses = await axios.get("/api/courses/");
      console.log(courses.data);

      if (courses.data) {
        console.log("courses ");
        courses.data.forEach(course => {
          this.courseList.push({
            value: course._id,
            text: course.dep + course.courseNum
          });
        });
      }
    }
  },
  beforeMount() {
    this.scrollToTop();
    this.getCurrentStaff();
    this.loadCourses();
  }
};
</script>