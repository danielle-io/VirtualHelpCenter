<template>
  <div style="position: relative;">
    <section class="header-title-container">
      <h1 class="title">Welcome {{this.$auth.user.given_name.split(' ')[0]}}</h1>
    </section>
    <div >
      <TicketRequestForm />
    </div>
  </div>
    
</template>

<script>
export default {
  name: "Media"
};
</script>


<script>
import Vue from "vue";
import TickeRequestForm from "~/components/TicketRequestForm";
import axios from "~/plugins/axios";


import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";


import User from "../store/models/User";

Vue.config.productionTip = false;
Vue.use(VueMaterial);

export default {
  components: {
    'TicketRequestForm': TickeRequestForm
  },
  data() {
    return {
      id: "5e9bc14dba244923803929d6"
    };
  },
  async fetch() {
    const user = this.$auth.user
    console.log(user.email)
    let { data } = await this.$axios.get("/users");
    console.log(data)
    User.insert({ data: data });

    let tutors = await this.$axios.get("/tutors");
    console.log(tutors.data);

    const userExists = User.query().where('email', this.$auth.user.email).exists()
    if(this.$auth.loggedIn && !userExists){
       console.log("wow")
      await axios.post('/api/insertStudent',{
          name: {
              firstname: user.given_name.split(' ')[0],
              lastname: user.family_name
          },
          email: user.email,
          ucinetid: user.email.split('@')[0],
          classes: null
      })
      // console.log(user)
      // await this.$axios.post('/api/insertStudent',{
      //     _id : user.data,
      
      // })

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
