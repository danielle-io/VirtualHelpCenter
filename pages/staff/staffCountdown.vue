<template>
  <div id="accept">
    <div>
      <div class="request-container">
        <div class="heading-text">Awaiting Student Acceptance</div>

        <div
          class="sub-heading-text-left"
          style="padding-top:2%;"
        >Please wait while the student is given one minute to accept the session.</div>

        <circular-count-down-timer
          style="text-align: center;"
          :initial-value="60"
          :steps="60"
          :seconds-stroke-color="'#7fe3d4'"
          :second-label="''"
          @finish="finished"
        ></circular-count-down-timer>
      </div>
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
    //   currentUserId: "5eb75ab2779eb66e27e4fad0"
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("tabs").scrollIntoView();
    },
    finished: () => {
    window.location.href = 'landingStaff';

    //   window.location.href = "/staff/landingStaff";
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

