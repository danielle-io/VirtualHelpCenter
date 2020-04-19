<template>
  <div class="container">
    <!-- Select Classes -->
    <div class="row">
      <b-form-select v-model="selected" :options="classes" size="sm" class="mt-3"></b-form-select>
      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>

    <!-- One Sentence Summary -->
    <div class="row">
      <label>Brief one-sentence summary of the issue</label>
      <b-form-input v-model="probDes" placeholder="Enter Problem Description" :disabled='isDisabled'></b-form-input>
      <div class="mt-2">Value: {{ probDes }}</div>
    </div>

    <!-- Longer Description -->
    <div class="row">
      <label>Description of the issue</label>
      <b-form-textarea
        id="textarea"
        v-model="problem"
        placeholder="Enter something..."
        rows="6"
        max-rows="6"
        :disabled='isDisabled'
      ></b-form-textarea>
      <pre class="mt-3 mb-0">{{ problem }}</pre>
    </div>

    <!-- Addition of Code -->
    <div class="row">
      <label>Paste your code below or attach a file</label>
      <b-form-textarea
        id="textarea"
        v-model="code"
        placeholder="Enter something..."
        rows="6"
        max-rows="6"
        :disabled='isDisabled'
      ></b-form-textarea>
      <pre class="mt-3 mb-0">{{ code }}</pre>
    </div>

    <!-- attatched file -->
    <div class="row">
      <b-form-file v-model="file" class="mt-3" plain :disabled='isDisabled'></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    </div>

    <!-- submit ticket -->
    <div class="row">
      <b-button v-on:click="submit" variant="outline-primary">Submit</b-button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import {BFormSelect, BFormInput, BFormTextarea, BFormFile, BButton} from 'bootstrap-vue'
  import axios from "~/plugins/axios"

  export default {
    components: {
      'b-form-select': BFormSelect,
      'b-form-input' : BFormInput,
      'b-form-textarea' : BFormTextarea,
      'b-form-file' : BFormFile,
      'b-button' : BButton
    },
    head(){
      return{
        title: 'Ask Question'
      }
    },
    data(){
      return {
        problem: '',
        probDes: '',
        code: '',
        file: null,
        selected: null,
        classes: [
          { value: null, text: 'Please select a class:' },
        ]
      }
    },
    methods: {
      //users classes show up as options
      async loadClasses (courses){
        courses = await axios.get("/api/courses/"+courses._id)
        let text = courses.data.dep +" "+ courses.data.courseNum
        this.classes.push({value: courses.data._id, text: text});
      },
      submit: function(){
        if (this.problem != '' && this.probDes != '' && this.code != ''){
          console.log("Submitting")
          axios.post('/api/insertTicket',{
            status : 'Open',
            course: {
              _id: this.selected
            },
            codeSnippet : this.code,
            oneLiveOverview: this.problem,
            longerDescription: this.probDes,
            createdAt: new Date().toString()
          })
        }
        else{
          console.log("not submitted")
        }
      }
    },
    computed:{
      isDisabled: function(){
        return !this.selected;
      }
    },

    //had to rename function "created" because I couldnt access "options" property
    async created() {
      let student = await axios.get("/api/students/"+this.$route.params.id);
      // let users = await axios.get("/api/users");
      student.data.classes.forEach(element => {
        this.loadClasses(element)
      });
    }
  }
</script>


<style>
.container {
  width: 100%;
  padding: 100px 0;
  text-align: center;
}


</style>