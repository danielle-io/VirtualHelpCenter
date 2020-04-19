<template>
  <div>
    <div class="heading-text">My Requests</div>

    <!-- TO DO: make this text dynamic based on user tickets -->
    <div class="sub-heading-text">You currently have no requests.</div>

    <div class="request-container">
      <div class="heading-two-text">Start a Request</div>

      <div id="app">
        <table class="table request-table">
          <tbody>
            <!-- This is where the new questions are inserted -->
            <div class="top-row" v-for="(row, index) in rows" v-bind:key="row">
              <tr>
                <td class="form-column">
                  <b-form-input
                    v-model="oneLineOverview"
                    placeholder="One line description of the issue"
                  ></b-form-input>
                </td>

                <td class="remove-column">
                  <a v-on:click="removeElement(index);" style="cursor: pointer">Remove</a>
                </td>
              </tr>

              <tr>
                <td>
                  <label class="file-container">
                    {{row.file.name}}
                    <input
                      type="file"
                      @change="setFilename($event, row)"
                      :id="index"
                    />
                  </label>
                </td>
              </tr>
            </div>

          </tbody>
        </table>

        <span class="add-button" @click="addRow">
          <plus-circle />
        </span>
      </div>
    </div>
  </div>
</template>
      

<script>
// var app = new Vue({
//   el: "#app",
//   data: {
//     rows: []
//   },

import vue from "vue";
import axios from "~/plugins/axios";
import { BFormInput, BFormSelect, BButton, BFormCheckbox } from "bootstrap-vue";

export default {
  components: {
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-button": BButton,
    "b-form-checkbox": BFormCheckbox
  },
  data() {
    return {
      el: "#app",
      rows: [],
      status: "Open",
      oneLineOverview: "",
      shown: false
    };
  },
  methods: {
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
    }
  }
};
</script>


<style>
/* Styling for adding rows */
.add-button {
  font-size: 20px;
  color: #0090ad;
  cursor: pointer;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.top-row {
  border-top: 1px solid #dee2e6;
}

.form-column {
  width: 100%;
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
}

.file-container {
  /* overflow: hidden; */
  position: relative;
}

.file-container [type="file"] {
  cursor: inherit;
  display: block;
  font-size: 999px;
  filter: alpha(opacity=0);
  min-height: 21px;
  min-width: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
}

.file-container {
  background: #e3e3e3;
  float: left;
  padding: 0.5em;
}

.file-container [type="file"] {
  cursor: pointer;
}

.login-form {
  text-align: center;
}

.request-container {
  /* text-align: center;
  justify-content: center; */
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 2%;
  margin-bottom: 2%;
  /* padding-left: 22%;
  padding-right: 22%; */
  font-family: "Manrope";
  min-width: 200px;
  border: solid 1px #ddd;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  /* width: 90%; */
  max-width: px;
  /* position: relative; */
  /* padding: 0px; */
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/
input[type="button"],
input[type="submit"]
/* input[type="reset"]  */
 {
  background-color: #806897;
  /* border: none; */
  color: white;
  /* padding: 15px 80px; */
  width: 85%;
  height: 50px;
  text-align: center !important;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(137, 118, 241, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #987cb3;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 100%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
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

@keyframes fadeInDown {
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

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.7;
  -moz-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  animation-delay: 0.51s;
}

/* Simple CSS3 Fade-in Animation */
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

/* OTHERS */

/* *:focus {
  outline: none;
} */

#icon {
  width: 60%;
}

* {
  box-sizing: border-box;
}
</style>
