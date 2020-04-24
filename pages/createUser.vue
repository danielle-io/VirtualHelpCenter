<template>
    <div class="container">
        <!-- Name -->
        <label>Enter your name:</label>
        <div class="row">
            <div class="col">
                <b-form-input v-model="firstname" placeholder="First name" ></b-form-input>
                <div class="mt-2">Value: {{ firstname }}</div>
            </div>
            <div class="col">
                <b-form-input v-model="lastname" placeholder="Last name" ></b-form-input>
                <div class="mt-2">Value: {{ lastname }}</div>
            </div>
        </div>

        <!-- Email -->
        <label>Enter your email:</label>
        <div class="row">
            <div class="col">
                <b-form-input v-model="email" placeholder="Enter your Email:" ></b-form-input>
                <div class="mt-2">Value: {{ email }}</div>
            </div>
        </div>

        <!-- UCInetID -->
        <label>Enter your ucinetid:</label>
        <div class="row">
            <b-form-input v-model="ucinetid" placeholder="Enter your ucinetID:" ></b-form-input>
            <div class="mt-2">Value: {{ ucinetid }}</div>
        </div>

        <!-- Staff Student or Both -->
        <div class="row">
            <p>Staff:</p>
            <b-form-checkbox
            id="checkbox-1"
            v-model="staff"
            name="checkbox-1"
            value="true"
            unchecked-value="false"
            style="margin-left: 10px"
            >
            </b-form-checkbox>
        </div>
        <div class="row">
            <p>Student:</p>
            <b-form-checkbox
            id="checkbox-2"
            v-model="student"
            name="checkbox-2"
            value="true"
            unchecked-value="false"
            style="margin-left: 10px"
            >
            </b-form-checkbox>
        </div>

        <!-- Select Classes -->
        <div :hidden='studentCheck()'>
            <div class="row" >
                <div class="col-6">
                    <label>Select your class:</label>
                    <b-form-select v-model="addClass" :options="availableClasses" size="sm" class="mt-3" ></b-form-select>
                    <div class="mt-3">Selected: <strong>{{ addClass }}</strong></div>
                    <b-button v-on:click="addClasses" size="sm">Add Class</b-button>
                </div>
                <div class="col-6">
                    <label>Selected classes:</label>
                    <b-form-select v-model="removeClass" :options="pickedClasses" size="sm" class="mt-3" :select-size="4"></b-form-select>
                    <div class="mt-3">Selected: <strong>{{ removeClass }}</strong></div>
                    <b-button v-on:click="removeClasses" size="sm">Remove Class</b-button>
                </div>
                <div class="col">

                </div>
            </div>
        </div>
        


        <div class = "row justify-content-left">
            <label>All fields must be filled in</label>
        </div>
        
        <!-- submit User -->
        <div class="row">
            <b-button v-on:click="submit" variant="outline-primary">Submit</b-button>
        </div>
        <div class="row" v-if= "this.shown">
            <p>User Created</p>
        </div>
    </div>
</template>

<script>
import vue from 'vue'
import axios from '~/plugins/axios'
import {BFormInput, BFormSelect, BButton, BFormCheckbox, } from 'bootstrap-vue'

export default {
    components: {
        'b-form-input': BFormInput,
        'b-form-select': BFormSelect,
        'b-button' : BButton,
        'b-form-checkbox': BFormCheckbox
    },
    data(){
        return{
            // User input
            firstname: '',
            lastname: '',
            email:'',
            ucinetid: '',
            addClass: null,
            removeClass: null,

            pickedClasses: [
            ],

            //available classes
            availableClasses: [
            { value: null, text: 'Please select a class:'},
            ], 
            shown:false,

            // Staff/Student checkboxes
            staff: 'false',
            student: 'false'
        }
    },
    methods: {
        loadClasses: function(classSelected){
            var text = classSelected.dep +" "+ classSelected.courseNum
            this.availableClasses.push({value: classSelected._id, text: text})
        },
        addClasses(){
            let classes = this.availableClasses.filter(classes => classes.value == this.addClass);
            this.pickedClasses.push({value : classes[0].value, text: classes[0].text})
        },
        removeClasses(){
            if(this.removeClass != null){
                this.pickedClasses = this.pickedClasses.filter(classes => classes.value != this.removeClass)
                this.removeClass = null;
            }
            
        },
        async submit(){
            
            if(this.firstname != '' && this.lastname != '' && this.email != '' && this.ucinetid != '' && this.pickedClasses){
                let classes = [];
                this.pickedClasses.forEach((element)=>{
                    classes.push({_id: element.value, section: 1});
                });
                console.log(classes)
                this.shown = true;
                let student = await axios.post('/api/insertStudent',{
                    name: {
                        firstname: this.firstname,
                        lastname: this.lastname
                    },
                    email: this.email,
                    ucinetid: this.ucinetid,
                    classes: classes
                })
                window.location.href = 'request/'+student.data._id
            }
        },
        studentCheck: function(){
            if(this.student == 'false'){
                return true;
            }
            return false;
        }
    },
    async created(){
        
        let classes = await axios.get("/api/courses");
        let students = await axios.get("/api/students");
        classes.data.forEach(classSelected => {
            this.loadClasses(classSelected);
        });
        
    }
}
</script>

<style>
.container {
    position: relative;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

</style>