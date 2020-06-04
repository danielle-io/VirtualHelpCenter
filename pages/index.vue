<style>
.login-fields {
  width: 100% !important;
  border-radius: 0 !important;
  background: none !important;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom-color: #eee5e5;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
}

.login-form {
  margin-top: 10px;
  padding-bottom: 15px;
  padding-left: 40px !important;
  padding-right: 40px !important;
}

input[type="text"]:focus,
input[type="password"] {
}

input[type="text"]:placeholder,
input[type="password"]:placeholder {
  color: #241e1e;
}

button[type="disabled-button"] {
  background-color: #d3d3d3 !important;
  color: white;
  letter-spacing: 0.5px;
  font-weight: bolder;
  font-size: 14px;
  width: 85%;
  height: 50px;
  text-align: center !important;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 7px 7px 7px 7px;
  margin: 30px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button[type="button-color"] {
  background: linear-gradient(
    333deg,
    rgba(167, 115, 215, 0.72) 21%,
    rgba(169, 235, 244, 1) 75%
  );
  /* border: none; */
  color: white;
  letter-spacing: 0.5px;
  font-weight: bolder;
  font-size: 14px;
  width: 85%;
  height: 50px;
  text-align: center !important;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(137, 118, 241, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 7px 7px 7px 7px;
  margin: 30px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 0.1s;
  animation-duration: 0.1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.login-container {
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
  font-family: "Poppins";
  max-width: 800px;
  padding-top: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
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
  <div style="margin-top: 5%;">
    <div style="font-size: 34px;" class="fadeIn heading-text">Welcome.</div>
    <div
      class="sub-heading-text"
      style="margin-top: 18px; font-size: 15px; color:white;"
    >Please log in to continue.</div>

    <div class="login-container">
      <div>
        <form class="login-form">
          <span style="display: flex;">
            <b-form-input
              style="padding-left: 5px;"
              class="login-fields"
              v-model="email"
              type="email"
              name="email"
              placeholder="email"
            />
            <span v-if="!validateEmail()" class="asterisk">*</span>
          </span>

          <span style="display: flex;">
            <b-form-input
              style="padding-left: 5px;"
              type="password"
              class="login-fields"
              name="password"
              placeholder="password"
              v-model="password"
            />
            <span v-if="!this.password" class="asterisk">*</span>
          </span>

          <div style="text-align: center; margin: auto;">
            <div v-if="this.validateEmail() && this.password">
              <div style="text-align: center;">
                <button
                  @click="submitData()"
                  type="button-color"
                  style="margin-bottom: 10px; margin margin-top: 10px;"
                  class="fadeIn request-staff-buttons"
                >
                  <right-circle />Submit
                </button>
              </div>
            </div>

            <div v-if="!this.validateEmail() || !this.password">
              <div style="text-align: center;">
                <button
                  type="disabled-button"
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
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "~/plugins/axios";
import { BFormInput } from "bootstrap-vue";

export default {
  components: {
    "b-form-input": BFormInput
  },
  data() {
    return {
      password: null,
      email: null,
      userId: null,
      userType: null
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    async submitData() {
      let user = await axios.get("/api/users/getUserByEmail/" + this.email);

      if (user) {
        console.log(user);
        this.userId = user.data._id;
        this.userType = user.data.userType;

        if (user.data.userType === "Staff") {
          window.location.href = "landingStaff/?userId=" + user.data._id;
        } else if (user.data.userType === "Student") {
          console.log(user.data);
          window.location.href = "landingStudent/?userId=" + user.data._id;
        } else if (user.data.userType === "Admin") {
          window.location.href = "landingAdmin/?userId=" + user.data._id;
        } else {
          window.location.href = "registerStudent";
        }
      }
    },
    validateEmail: function() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    }
  },
  beforeMount() {
    this.scrollToTop();
  },
  mounted() {}
};
</script>



