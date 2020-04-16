<template>
  <div class="container">
    <div class="row">
      <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>

    <div class="row">
      <label>Brief one-sentence summary of the issue</label>
      <b-form-input v-model="probDes" placeholder="Enter Problem Description" :disabled='isDisabled'></b-form-input>
      <div class="mt-2">Value: {{ probDes }}</div>
    </div>

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

    <div class="row">
      <b-form-file v-model="file" class="mt-3" plain :disabled='isDisabled'></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import {BFormSelect, BFormInput, BFormTextarea, BFormFile} from 'bootstrap-vue'
  import axios from "~/plugins/axios"

  export default {
    components: {
      'b-form-select': BFormSelect,
      'b-form-input' : BFormInput,
      'b-form-textarea' : BFormTextarea,
      'b-form-file' : BFormFile
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
        options: [
          { value: null, text: 'Please select a class' },
        ]
      }
    },
    computed:{
      isDisabled: function(){
        return !this.selected;
      }
    },
    //had to rename function created because I couldnt access options property
    async created() {
      let students = await axios.get("/api/students");
      let users = await axios.get("/api/users");
      students.data[0].classes.forEach(element => {
        var value = element.class.dep +" "+ element.class.courseNum.toString()
        this.options.push({value: value, text: value})
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

.row{
  border-color: #448aff;
}

</style>