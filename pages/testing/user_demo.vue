<template>
  <section class="container">
    <div class="topElement">
      <h1 class="title">User Demo</h1>
      <ul class="users">
        <li v-for="(user, index) in users" :key="index" class="user">
          <nuxt-link :to="{ name: 'id', params: { id: index }}">{{ user._id }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import axios from "~/plugins/axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import User from '../../store/models/User';

Vue.use(VueMaterial);

export default {
  computed: {
    users() { 
      console.log(this.$store.$db().model('users').all())
      User.query().orderBy('_id').get()
    }
  },
  async asyncData() {
    // let { data } = await axios.get("/api/users");
    // return { users: data };
  },
  head() {
    return {
      title: "Users"
    };
  }
};
</script>

<style scoped>
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
</style>
