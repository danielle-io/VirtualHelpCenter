<template>
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <div id="admin" style="position: relative;">
      <div class="request-container">
        <div class="heading-text" style="margin-bottom: 10px;">Administrative Actions</div>

        <div class="request-tabs">
          <a
            @click="switchToAddTutorTab"
            v-bind:class="{ 'tab-links-active': addTutorTab, 'tab-links': !addTutorTab }"
          >Add a Tutor</a>

          <a
            v-bind:class="{ 'tab-links-active': removeTutorTab, 'tab-links': !removeTutorTab }"
            @click="switchToRemoveTutorTab"
          >Remove a Tutor</a>
        </div>

        <div v-if="this.addTutorTab">
          <table class="table">
            <tbody>
              <div class="top-row" v-for="(row, index) in taEmails" v-bind:key="row">
                <tr>
                  <td>
                    <input type="text" id="staffEmail" name="email" placeholder="email" />
                    <!-- <button class="file-container file-button">
                    {{row.file.name}}
                    <input
                      type="file"
                      @change="setFilename($event, row)"
                      :id="index"
                    />
                    </button>-->
                  </td>

                  <td class="remove-column">
                    <a
                      v-on:click="removeElement(index);"
                      style="cursor: pointer; z-index: 999;"
                    >Remove Row</a>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>

          <span class="add-button" @click="addRow">
            <plus-circle />
          </span>

          <div style="text-align: center;">
              <!-- TODO: add v-bind:key="submitRequest" and 
             @click="submitRequest which ties it to the db"
            then have submitRequest remove everything and 
              show a submitted screen
-->
            <button
              type="submit"
              style="margin-bottom: 10px; margin-top: 10px;"
              class="fadeIn request-staff-buttons"
            >
              <right-circle />Submit
            </button>

            <!-- ADD THIS BACK TO BUTTON ABOVE WHEN READY
            v-on:click="submit"-->
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
      taEmails: [],
      addTutorTab: true,
      removeTutorTab: false,
      color: "#7e6694"
    };
  },
  methods: {
    filterOpenTickets(status) {
      return this.tickets.filter(ticket => ticket.status === status);
    },
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    switchToAddTutorTab: function() {
      this.addTutorTab = true;
      this.removeTutorTab = false;
      this.scrollToTop();
      return this.addTutorTab;
    },
    switchToRemoveTutorTab: function() {
      this.addTutorTab = false;
      this.removeTutorTab = true;
      this.scrollToTop();
      return this.removeTutorTab;
    },
    addRow: function() {
      var elem = document.createElement("tr");
      this.taEmails.push({
        // put the input form here
      });
    },
    removeElement: function(index) {
      this.taEmails.splice(index, 1);
    },
    setFilename: function(event, row) {
      var file = event.target.files[0];
      row.file = file;
    },
    beforeMount() {
      this.scrollToTop();
    }
  }
};
</script>


<style>
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

/* Styling for adding taEmails */
.add-button {
  align-items: left;
  font-size: 30px;
  color: rgb(154, 224, 231);
  cursor: pointer;
  padding-top: 15px !important;
  margin-left: 18px;
}

.row {
  margin-top: 5px;
  margin-bottom: 5px;
}

.top-row {
  border-top: 1px solid #dee2e6;
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
  height: 300px;
  overflow-y: scroll;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
.md-subhead {
  justify-content: left;
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

.card-row {
  display: inline-block;
}
.title {
  margin-top: 30px;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
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