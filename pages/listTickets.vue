<template>
  <section class="container">
    <div class="topElement">
      <h1 class="title">Ticket Display</h1>
      <!-- <ul class="users"> -->
      <div v-for="(thing, index) in tickets" :key="index" class="tickets">
        <md-card>
          <md-card-header>
            <div class="md-title">Ticket</div>
          </md-card-header>

          <div class="md-card-content">
            <strong>Student:</strong>
            {{ thing.owner }}
          </div>

          <div class="md-card-content">
            <strong>Status:</strong>
            {{ thing.status }}
          </div>
          <div class="md-card-content">
            <strong>Questions:</strong>
          </div>

          <div
            class="md-card-content"
            style="margin-left: 25px;"
            v-for="(question, index) in thing.questions"
            :key="index"
          >
            <strong>{{index + 1}}.</strong>
            {{ thing.questions[index] }}
          </div>

          <!-- <div class="md-subhead">Questions: {{ thing.questions }}</div> -->
        </md-card>

        <!-- <nuxt-link :to="{ status: 'id', params: { ststus: index }}">{{ user.name }}</nuxt-link> -->
      </div>
      <!-- </ul> -->
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
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}
.title {
  margin: 30px 0;
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