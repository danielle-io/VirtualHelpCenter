
<!-- TODO:  Check that email doesnt already exist in system -->
<style>
.add-email-row {
  margin-top: 10px;
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
}

input[type="text"] {
  padding-top: 6px;
  color: #0d0d0d;
  text-align: left;
  overflow: hidden;
  display: inline-block;
  font-size: 16px;
  width: 100% !important;
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
        >Add Staff</a>

        <a
          v-bind:class="{ 'tab-links-active': removeStaffTab, 'tab-links': !removeStaffTab }"
          @click="switchToRemoveStaffTab"
        >Remove Staff</a>

        <a
          v-bind:class="{ 'tab-links-active': addCourseTab, 'tab-links': !addCourseTab }"
          @click="switchToAddCourseTab"
        >Add Course</a>

        <a
          v-bind:class="{ 'tab-links-active': removeCourseTab, 'tab-links': !removeCourseTab }"
          @click="switchToRemoveCourseTab"
        >Remove Course</a>
      </div>

      <div style="padding-top: 16px;" class="request-container">
        <div
          class="heading-text"
          style="margin-top: 16px; margin-bottom: 10px;"
        >{{this.getTitle()}}</div>

        <div id="submittedText" style="font-size: 16px;" class="hidden-text">
          <check-circle style="height: 1.3em !important;" />
          <span style="margin-left:10px;">Submitted!</span>
        </div>

        <div id="staffRemovedText" style="font-size: 16px;" class="hidden-text">
          <check-circle style="height: 1.3em !important;" />
          <span style="margin-left:10px;">Staff Member Removed</span>
        </div>

        <div id="courseRemovedText" style="font-size: 16px;" class="hidden-text">
          <check-circle style="height: 1.3em !important;" />
          <span style="margin-left:10px;">Course Removed</span>
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
                  <span
                    v-if="!selectedCourses || selectedCourses.length === 0"
                    class="asterisk"
                  >*</span>
                </label>
              </div>

              <div class="row" style="margin-left: 20px; !important">
                <b-form-checkbox-group  v-model="selectedCourses" :options="courseList"></b-form-checkbox-group>
              </div>
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
                <label style="margin-top: 15px;" class="label-format-smaller">
                  <email class="label-icons" />Remove Staff By Email
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

          <div v-if="this.addCourseTab">
            <div style="margin-left: 12px;" class="form-container">
              <div class="row" style="width: 70%;">
                <label class="label-format-smaller">
                  <library class="label-icons" />Add a Course
                  <span v-if="!newCourseDep || !newCourseNum" class="asterisk">*</span>
                </label>
              </div>

              <div class="row form-line">
                <b-form-input
                  style="margin-right: 140px; border-top: none; border-left:none; border-right:none; border-radius:0;"
                  placeholder="Enter the course department (ex: ICS)"
                  v-model="newCourseDep"
                  class="email-input"
                ></b-form-input>
              </div>

              <div class="row form-line">
                <b-form-input
                  style="margin-right: 140px; border-top: none; border-left:none; border-right:none; border-radius:0;"
                  placeholder="Enter the course number (ex: 32)"
                  v-model="newCourseNum"
                  class="email-input"
                ></b-form-input>
              </div>

              <div v-if="this.newCourseDep && this.newCourseNum">
                <div style="text-align: center;">
                  <button
                    @click="insertNewCourse()"
                    type="submit"
                    style="margin-bottom: 10px; margin margin-top: 10px;"
                    class="fadeIn request-staff-buttons"
                  >
                    <right-circle />Submit
                  </button>
                </div>
              </div>

              <div v-if="!this.newCourseDep || !this.newCourseNum">
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
          </div>

          <div v-if="this.removeCourseTab">
            <div style="margin-left: 12px;" class="form-container">
              <div class="row">
                <label style="margin-top: 15px;" class="label-format-smaller">
                  <book class="label-icons" />Remove a Course
                </label>
              </div>

              <div class="row" style="margin-left: 10px;">
                <b-form-select
                  style="margin-top: 6px; border-radius: 0px; display: in-line-block; border-left:none; border-right:none; border-top: none; width: 40%;"
                  :options="courseList"
                  size="sm"
                  class="mt-3"
                  v-model="courseToRemove"
                ></b-form-select>
              </div>

              <div v-if="this.courseToRemove">
                <div style="text-align: center; margin-top:15px;">
                  <button
                    @click="removeCourse"
                    type="submit"
                    style="margin-bottom: 10px; margin margin-top: 10px;"
                    class="fadeIn request-staff-buttons"
                  >
                    <right-circle />Submit
                  </button>
                </div>
              </div>

              <div v-if="!this.courseToRemove">
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
  BFormTextarea,
  BFormRadio,
  BFormRadioGroup,
  BFormCheckboxGroup,
  BFormCheckbox
} from "bootstrap-vue";
export default {
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-form-text-area": BFormTextarea,
    "b-form-checkbox": BFormCheckbox,
    "b-form-checkbox-group": BFormCheckboxGroup
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
      addCourseTab: false,
      removeCourseTab: false,
      courseToRemove: null,
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
      selectedCourses: null,
      staffMemberToRemove: null,
      zoomLink: "",
      currentStaff: [{ value: null, text: "Select the email to remove" }],
      newCourseNum: null,
      newCourseDep: null
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    async addStaffClicked() {
      var staffCourseInsert = [];
      this.selectedCourses.forEach(element => {
        staffCourseInsert.push({ _id: element, section: 1 });
      });

      console.log(staffCourseInsert);

      document.getElementById("submittedText").className = "sub-heading-text";
      this.submitted = true;

      setTimeout(function() {
        this.submitted = false;
        document.getElementById("submittedText").className = "hidden-text";
      }, 3000);
      this.scrollToTop();

      if (staffCourseInsert) {
        var user = await axios.post("/api/insertStaff", {
          name: {
            firstName: this.firstName,
            lastName: this.lastName
          },
          email: this.email,
          ucinetid: this.email.split("@")[0],
          classes: staffCourseInsert,
          zoomLink: this.zoomLink,
          deleted: 0
        });
      }

      this.clearForm();
    },
    validateEmail: function() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
    removeCourse() {
      var id = this.courseToRemove;
      console.log(id);

      document.getElementById("courseRemovedText").className =
        "sub-heading-text";

      setTimeout(function() {
        this.submitted = false;
        document.getElementById("courseRemovedText").className = "hidden-text";
      }, 3000);
      axios
        .put("/api/courses/updateCourse/" + id, {
          deleted: 1
        })
        .then(() => {
          console.log("getting new user list");
        });

      this.courseList = this.courseList.filter(course => course.value !== id);
      this.courseToRemove = null;

      this.clearForm();
    },
    clearForm: function() {
      this.email = "";
      this.firstName = null;
      this.lastName = null;
      this.zoomLink = "";
      this.selectedCourses = null;
      this.newCourseDep = null;
      this.newCourseNum = null;
    },
    switchToAddStaffTab: function() {
      this.addStaffTab = true;
      this.removeStaffTab = false;
      this.addCourseTab = false;

      this.removeCourseTab = false;

      this.scrollToTop();
      return this.addStaffTab;
    },
    async insertNewCourse() {
      document.getElementById("submittedText").className = "sub-heading-text";

      setTimeout(function() {
        this.submitted = false;
        document.getElementById("submittedText").className = "hidden-text";
      }, 3000);

      let newCourse = await axios.post("/api/insertCourse", {
        dep: this.newCourseDep,
        courseNum: this.newCourseNum,
        deleted: 0
      });
      if (newCourse) {
        this.courseList.push({
          value: newCourse.data._id,
          text: newCourse.data.dep + newCourse.data.courseNum
        });
      }

      this.clearForm();
    },
    switchToRemoveStaffTab: function() {
      this.scrollToTop();
      this.addStaffTab = false;
      this.removeStaffTab = true;
      this.addCourseTab = false;
      this.removeCourseTab = false;

      return this.removeStaffTab;
    },
    switchToAddCourseTab: function() {
      this.scrollToTop();
      this.addCourseTab = true;
      this.removeCourseTab = false;
      this.addStaffTab = false;
      this.removeStaffTab = false;
      return this.addCourseTab;
    },
    switchToRemoveCourseTab: function() {
      this.scrollToTop();
      this.removeCourseTab = true;
      this.addCourseTab = false;
      this.addStaffTab = false;
      this.removeStaffTab = false;
      return this.removeCourseTab;
    },
    getTitle(){
      if(this.removeCourseTab){return "Remove a Course From System"} 
      if(this.addCourseTab){return "Add a Course To System"}
      if(this.addStaffTab){return "Add a New Staff Member"}
      if(this.removeStaffTab){return "Remove a Staff Member"}
    },
    removeStaffByEmails() {
      document.getElementById("staffRemovedText").className =
        "sub-heading-text";

      var id = this.staffMemberToRemove;
      this.removed = true;

      setTimeout(function() {
        this.removed = false;
        document.getElementById("staffRemovedText").className = "hidden-text";
      }, 3000);

      axios
        .put("/api/users/updateUser/" + id, {
          deleted: 1
        })
        .then(() => {
          console.log("getting new user list");
        });

      this.currentStaff = this.currentStaff.filter(staff => staff.value !== id);
      this.staffMemberToRemove = null;
    },
    async getCurrentStaff() {
      let staffList = await axios.get("/api/users/getUserByType/" + "Staff");
      console.log(staffList);

      if (staffList.data) {
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

      if (courses.data) {
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
  },
  mounted() {
    if (this.roles) {
      this.role = this.roles[0].value;
    }
  }
};
</script>