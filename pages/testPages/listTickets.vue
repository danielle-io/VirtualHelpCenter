<template>
  <section class="ticket-container">
    <div class="topElement">
        <h1 class="title">Ticket Display</h1>
        <h4>Total Tickets: {{tickets.length}}</h4>
    </div>
      <div class = "row justify-content-center">
        <div class = "col">
        
        <h4>Open Tickets</h4>
        <div id="open"  v-for="(ticket) in filterTickets('Open')" :key="ticket._id">
          <md-card>
          <md-card-header>
            <div class="md-title">Ticket</div>
          </md-card-header>

          <div class="md-card-content">
            <strong>Student:</strong>
            {{ ticket.owner }}
          </div>

          <div class="md-card-content">
            <strong>Status:</strong>
            {{ ticket.status }}
          </div>
          <div class="md-card-content">
            <strong>Issue:</strong>
            {{ ticket.oneLineOverview }}
            
          </div>
          <!-- <div class="md-card-content">
            <button type="button" v-on:click="deleteData(ticket, ticket._id)">Delete</button>
          </div> -->
          <div class="md-card-content">
            <button type="button" v-on:click="acceptTicket(ticket, ticket._id)">Accept</button>
          </div>
          
          <!-- <div
            class="md-card-content" style="margin-left: 25px;" v-for="(question, index) in ticket.questions" :key="index">
            <strong>{{index + 1}}.</strong>
            {{ ticket.questions[index] }}
          </div> -->

        </md-card>
        </div>
        </div>
        <div class = "col">
        
        <h4>In Progess Tickets</h4>
        <div  v-for="(ticket, index) in filterTickets('In Progress')" :key="index">
          <md-card>
          <md-card-header>
            <div class="md-title">Ticket</div>
          </md-card-header>
          </md-card>
          <h4>In Progess Tickets</h4>
          <div  v-for="(ticket) in filterTickets('In Progress')" :key="ticket._id">
            <md-card>
              <md-card-header>
                <div class="md-title">Ticket</div>
              </md-card-header>

              <div class="md-card-content">
                <strong>Student:</strong>
                {{ ticket.owner }}
              </div>

              <div class="md-card-content">
                <strong>Status:</strong>
                {{ ticket.status }}
              </div>
              <div class="md-card-content">
                <strong>Issue:</strong>
                {{ticket.oneLineOverview}}
              </div>
              <!-- <div class="md-card-content">
                <button type="button" v-on:click="deleteData(ticket, ticket._id)">Delete</button>
              </div> -->
              <div class="md-card-content">
                <button type="button" v-on:click="openTicket(ticket, ticket._id)">Not in Progress</button>
              </div>
              
              <!-- <div
                class="md-card-content" style="margin-left: 25px;" v-for="(question, index) in ticket.questions" :key="index">
                <strong>{{index + 1}}.</strong>
                {{ ticket.questions[index] }}
              </div> -->

            </md-card>
          </div>
        </div>
        <div class = "col">
          <h4>Closed</h4>
          <div  v-for="(ticket) in filterTickets('Closed')" :key="ticket._id">
            <md-card>
              <md-card-header>
                <div class="md-title">Ticket</div>
              </md-card-header>

              <div class="md-card-content">
                <strong>Student:</strong>
                {{ ticket.owner }}
              </div>

              <div class="md-card-content">
                <strong>Status:</strong>
                {{ ticket.status }}
              </div>
              <div class="md-card-content">
                <strong>Issue:</strong>
                {{ticket.oneLineOverview}}
              </div>
              <!-- <div class="md-card-content">
                <button type="button" v-on:click="deleteData(ticket, ticket._id)">Delete</button>
              </div> -->
              <div class="md-card-content">
                <button type="button" v-on:click="openTicket(ticket, ticket._id)">Not in Progress</button>
              </div>
              
              <!-- <div
                class="md-card-content" style="margin-left: 25px;" v-for="(question, index) in ticket.questions" :key="index">
                <strong>{{index + 1}}.</strong>
                {{ ticket.questions[index] }}
              </div> -->

            </md-card>
          </div>
        </div>
        <div class = "col">
          <h4>Unresolved</h4>
        </div>
      </div>
        
      
      
    </div>
    
  </section>

</template>

<script>


import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import axios from "~/plugins/axios"

import Ticket from '../../store/models/Ticket'
import User from '../../store/models/User'

Vue.use(VueMaterial)

 
export default {
  data(){
    return{
      open: [],
      inprogress: [],
      closed: [],
      unresolved: []
    }
  },

  async fetch() {
    // let { data } = await this.$axios.get("/tickets");

    // Ticket.insert({data: data});
    const result = await Ticket.api().get('/tickets');
  },
  computed: {
    tickets() {
      return Ticket.query().orderBy('owner').get();
    }
    //can you see this 
  },
  head() {
    return {
      title: "Tickets"
    }
  }, 
  methods:{
    filterTickets(status){
      return this.tickets.filter(ticket =>ticket.status === status);
    },
    created () {
      //let { data } = await axios.get("/api/tickets");
    },

    deleteData(ticket, id){
      console.log(id)
          axios.delete("/api/deleteTicket/"+ id )

        .then(function(response ){
          console.log(response)
        })
      window.location.reload();
      console.log("delete function")

     }
    // acceptTicket(ticket, id){
    //   console.log(ticket.status)
     },

    async acceptTicket(ticket, id){
      //update ticket withing db
      axios.put('/api/updateTicket/'+id, {
        status: 'In Progress'
      });

    //   // ticket.status = 'In Progress'
    //   axios.update('/updateTicket/'+id,{
    //     status: 'In Progress'
    //   })
    //   console.log(ticket.codeSnippet)
    //   console.log(ticket.user_id)
    //   // console.log(ticket.owner.data._id)
    //   // window.location.reload();


    // }
      //Ticket.getAll()
      //read updated time
      let tickets = await axios.get('/api/ticket/'+id);

      //create a timer for 1 minute
      let timer = new Date();
      timer.setMinutes(timer.getMinutes()+1);

      //run timer
      let x = setInterval( async function(){
        let current = new Date();
        if (current> timer){
          console.log("Time is up");
          clearInterval(x);
          await axios.put('/api/updateTicket/'+id, {
            status: 'Closed'
          });
          
        }
      }, 1000)

    },

    async openTicket(ticket, id){
      axios.put('/api/updateTicket/'+id, {
        status: 'Open'
      });
      window.location.reload();
    },
  async created () {
    let tickets = await axios.get('/api/tickets')
    console.log(tickets);
  }
}
</script>

<style scoped>
.ticket-container {
  margin: 0;
  width: 100%;
  margin-top: 30px;
  text-align: center;
  justify-content: center;
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
  text-align: left;
  line-height: 2px;
}
.md-card {
  width: 250px;
  margin: 14px;
  display: inline-block;
  vertical-align: top;
}
.topElement{
  margin-top: 100px;
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
.button {
  margin-top: 30px;
}
</style>