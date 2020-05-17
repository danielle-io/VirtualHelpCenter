<style>
button[type="button"], button[type="submit"] input[type="reset"] {
    background: linear-gradient( 333deg, rgba(167, 115, 215, 0.72) 21%, rgba(169, 235, 244, 1) 75%);
    border: none;
    color: white;
    letter-spacing: 0.5px;
    font-weight: bolder;
    font-size: 14px;
    justify-content: center;
    width: 60%;
    height: 40px;
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
</style>

<template>
  <div id="accept">
    <transition name="fade" mode="in-out">
      <div v-if="this.countdownShowing === true">
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
              :initial-value="60"
              :steps="60"
              :seconds-stroke-color="'#7fe3d4'"
              :second-label="''"
              @finish="finished"
            ></circular-count-down-timer>
            <button
              v-bind:key="accept"
              @click="sendZoomLink"
              type="submit"
              style="margin-bottom: 20%;"
              class="fadeIn form-buttons"
            >
              <right-circle />Accept the Session
            </button>
          </div>
        </div>
      </div>

      <div v-if="!this.countdownShowing">
        <div v-bind:key="session" class="request-container">
          <div class="heading-text">Begin your session</div>

          <div class="sub-heading-text">Click the link to open your Zoom session</div>
          <div class="sub-heading-text-larger" style="margin-top: 15px;">
            <a
              target="_blank"
              href="https://uci.zoom.us/j/98814365521"
            >https://uci.zoom.us/j/98814365521</a>
          </div>
        </div>
      </div>
    </transition>
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

  // async loadUser(user) {
  //   this.student = user.data._id;
  // },

  computed: {
    isDisabled: function() {
      return !this.selected;
    }
  },

  data() {
    return {
      el: "#accept",
      // Hard coded user
      currentUserId: "5eb75ab2779eb66e27e4fad0",
      countdownShowing: true,
      submitClicked: false,
      showLink: false
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    finished: () => {
      console.log("in finished");
      window.location.href = "landingStudent/?tab=requestHistory";
    },

    sendZoomLink: function() {
      this.scrollToTop();
      this.countdownShowing = false;
    }
  },
  beforeMount() {
    this.scrollToTop();
  },
  mounted() {}
};
</script>
