
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
  /* border: 1px solid #dadce0; */
  border-radius: 8px;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-bottom: 2%;
  font-family: "Poppins";
  max-width: 800px;
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05); */
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
    <div style="padding-top: 16px;" class="request-container">
      <div style="position: relative;">
        <div style="padding-top: 16px;" class="request-container">
          <div class="heading-text" style="margin-top: 16px; margin-bottom: 10px;">Welcome!</div>
          <div
            class="sub-heading-text-blue-left"
          >We can see it's your first time on Virtual Help. Please enter your information below so we can get you started.</div>

          <div class="container-body">
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
                  <email class="label-icons" />email
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
                  <library class="label-icons" />Courses
                  <span
                    v-if="!selectedCourses || selectedCourses.length === 0"
                    class="asterisk"
                  >*</span>
                </label>
              </div>

              <div class="row" style="margin-left: 20px; !important">
                <b-form-checkbox-group v-model="selectedCourses" :options="courseList"></b-form-checkbox-group>
              </div>
            </div>

            <div v-if="this.firstName && this.lastName && this.validateEmail()">
              <div style="text-align: center;">
                <button
                  @click="addStudentClicked()"
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
      el: "#student",
      color: "#7e6694",
      firstName: null,
      lastName: null,
      email: "",
      courseList: [],
      selectedCourses: null
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    async addStudentClicked() {
      var studentCourseInsert = [];
      this.selectedCourses.forEach(element => {
        studentCourseInsert.push({ _id: element, section: 1 });
      });

      this.scrollToTop();

      if (studentCourseInsert) {
        var user = await axios.post("/api/insertStudent", {
          name: {
            firstName: this.firstName,
            lastName: this.lastName
          },
          email: this.email,
          ucinetid: this.email.split("@")[0],
          classes: studentCourseInsert,
          deleted: 0
        });
      }
      if (user) {
        var userId = user.data._id;
        window.location.href = "landingStudent/?userId=" + userId;
      }
    },
    validateEmail: function() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
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
    this.loadCourses();
  }
};
</script>