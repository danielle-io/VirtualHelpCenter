<template>
    <div class="container">
        <!-- Name -->
        <div class="row">
            <div class="col">
                <b-form-input v-model="firstname" placeholder="First name" ></b-form-input>
            </div>
            <div class="col">
                <b-form-input v-model="lastname" placeholder="Last name" ></b-form-input>
            </div>
        </div>

        <!-- Email -->
        <div class="row">
            <div class="col">
                <b-form-input v-model="email" placeholder="UCI Email" ></b-form-input>
            </div>
        </div>

        <!-- UCInetID -->
        <div class="row">
            <b-form-input v-model="ucinetid" placeholder="UCInetID" ></b-form-input>
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

        <!-- Select Staff Classes -->
        <div :hidden='studentCheck(staff)'>
            <div class="row" >
                <div class="col-6">
                    <label>Select your class:</label>
                    <b-form-select v-model="addClassStaff" :options="availableClassesStaff" size="sm" class="mt-3" ></b-form-select>
                    <b-button v-on:click="addClasses()" size="sm">Add Class</b-button>
                </div>
                <div class="col-6">
                    <label>Selected classes:</label>
                    <b-form-select v-model="removeClass" :options="pickedClassesStaff" size="sm" class="mt-3" :select-size="getSize(pickedClassesStaff)"></b-form-select>
                    <b-button v-on:click="removeClasses" size="sm">Remove Class</b-button>
                </div>
            </div>
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

        <!-- Select Student Classes -->
        <div :hidden='studentCheck(student)'>
            <div class="row" >
                <div class="col-6">
                    <label>Select your class:</label>
                    <b-form-select v-model="addClass" :options="availableClasses" size="sm" class="mt-3" ></b-form-select>
                    <b-button v-on:click="addClasses()" size="sm">Add Class</b-button>
                </div>
                <div class="col-6">
                    <label>Selected classes:</label>
                    <b-form-select v-model="removeClass" :options="pickedClasses" size="sm" class="mt-3" :select-size="getSize(pickedClasses)"></b-form-select>
                    <b-button v-on:click="removeClasses" size="sm">Remove Class</b-button>
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
import Course from '../store/models/Course'
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

            // Student
            addClass: null,
            removeClass: null,
            
            // Staff
            addClassStaff: null,
            removeClassStaff: null,

            pickedClasses: [
            ],
            pickedClassesStaff: [
            ],

            //available classes for Student
            availableClasses: [
            ], 
            availableClassesStaff: [
            ], 


            shown:false,

            // Staff/Student checkboxes
            staff: 'false',
            student: 'false'
        }
    },
    methods: {
        loadClasses: function(classSelected){
            var text = classSelected.dep +" "+ classSelected.courseNum;
            this.availableClasses.push({value: classSelected._id, text: text})
        },
        addClasses: function(){
            
            let classes = this.availableClasses.filter(classes => classes.value == this.addClass);
            console.log(classes)
            this.availableClasses = this.availableClasses.filter(classes => classes.value != this.addClass);
            this.pickedClasses.push({value : classes[0].value, text: classes[0].text});
            this.addClass = null;
            
        },
        removeClasses(user){
            if(this.removeClass != null){
                this.pickedClasses = this.pickedClasses.filter(classes => classes.value != this.removeClass);
                this.removeClass = null;
            }
            
        },
        async submit(){
            
            if(this.firstname != '' && this.lastname != '' && this.email != '' && this.ucinetid != '' && this.pickedClasses){
                let classes = [];
                this.pickedClasses.forEach((element)=>{
                    classes.push({_id: element.value, section: 1});
                });
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
        studentCheck: function(check){
            if(check == 'false'){
                return true;
            }
            return false;
        },
        getSize: function(array){
            if(array.length === 0){
                console.log("here")
                return 1;
            }
            else if (array.length <=4){
                return array.length;
            }
            return 4;
        }
    },
    async created(){
        
        let classes = await axios.get("/api/courses");
        let students = await axios.get("/api/students");
        classes.data.forEach(classSelected => {
            this.loadClasses(classSelected);
        });
        this.availableClassesStaff = this.availableClasses;
        
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