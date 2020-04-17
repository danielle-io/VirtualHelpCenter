<template>
  <section class="ticket-container">
    <div class="topElement">
      <!-- <h1 class="title">Ticket Display</h1> -->
      <h4>Total Tickets: {{tickets.length}}</h4>
      <div v-for="(item, index) in tickets" :key="index" class="tickets">
        <md-card>
          <md-card-header>
            <div class="md-title">Ticket</div>
          </md-card-header>

          <div class="md-card-content">
            <strong>Student:</strong>
            {{ item.owner }}
          </div>

          <div class="md-card-content">
            <strong>Status:</strong>
            {{ item.status }}
          </div>
          <div class="md-card-content">
            <strong>Questions:</strong>
          </div>

          <div
            class="md-card-content"
            style="margin-left: 25px;"
            v-for="(question, index) in item.questions"
            :key="index"
          >
            <strong>{{index + 1}}.</strong>
            {{ item.questions[index] }}
          </div>

        </md-card>

      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

export default {
  async asyncData() {
    let { data } = await axios.get("/api/tickets");
    return { tickets: data };
  },
  head() {
    return {
      title: "Tickets"
    };
  }
};
</script>

<style scoped>
.ticket-container {
  margin: 0;
  width: 100%;
  margin-top: 30px;
  text-align: center;
  justify-content: center;
}
.title {
  /* margin: 30px 0; */
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