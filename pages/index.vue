<template>
  <div style="position: relative;">
    <div v-if="this.$auth.loggedIn">
       <section class="header-title-container">
      <h1 class="title">Welcome {{user.name.firstname}}</h1>
    </section>
      <div v-if="user.usertype == 'Student'">
        <TicketRequestForm />
      </div>
      <div v-else-if="user.usertype == 'Staff'">
        <StaffDashboard />
      </div>
      </div>
  </div>
    
</template>

<script>
export default {
  name: "Media"
};
</script>


<script>
//Base vue imports
import Vue from "vue"
import axios from "~/plugins/axios"

//Component Imports
import TickeRequestForm from "~/components/TicketRequestForm"
import StaffDashboard from "~/components/StaffDashboard"

//Vuex ORM model imports
import User from "../ui/models/User"
import Tutor from "../ui/models/Tutor"
import Ticket from "../ui/models/Ticket"

//CSS imports
import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css"
import "vue-material/dist/theme/default.css"


Vue.config.productionTip = false;
Vue.use(VueMaterial);

export default {
  components: {
    'TicketRequestForm': TickeRequestForm,
    'StaffDashboard': StaffDashboard
  },
  data() {
    return {
      id: "5e9bc14dba244923803929d6"
    };
  },
  async fetch() {
    const user = this.$auth.user
    // let { data } = await this.$axios.get("/users");
    // User.insert({ data: data });
    const users = await User.api().get('/users');
    const tutors = await Tutors.api().get('/tutors');

    console.log(tickets)


    const userExists = User.query().where('email', user.email).exists()
    const tutorExists = Tutor.query().where('email', user.email).exists()

    if(this.$auth.loggedIn && !userExists){

      if(tutorExists) {
        let tutor = await axios.post('/api/insertStaff',{
            name: {
                firstname: user.given_name.split(' ')[0],
                lastname: user.family_name
            },
            email: user.email,
            ucinetid: user.email.split('@')[0],
            classes: []
        })
      }
      else {
        let student = await axios.post('/api/insertStudent',{
            name: {
                firstname: user.given_name.split(' ')[0],
                lastname: user.family_name
            },
            email: user.email,
            ucinetid: user.email.split('@')[0],
            classes: []
        })
      }
    }
  },
  computed: {
    user() {
        let user = User.query().where('email', this.$auth.user.email).get()
        return user[0]
    }
  },
  head() {
    return {
      title: "Users"
    };
  }
};
</script>


<style scoped>
.header-title-container {
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  width: 100%;
  padding: 50px 0;
}

/* .md-card:hover{
  opacity: .2;
} */

.md-card {
  min-width: 300px;
  max-width: 300px;
  margin-top: 2%;
  justify-content: space-between;
  display: inline-block;
  word-wrap: break-word;
  vertical-align: top;
}
.card-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
