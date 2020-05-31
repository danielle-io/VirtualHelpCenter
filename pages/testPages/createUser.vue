<template>
    <div class="container">
        <!-- Name -->
        <div class="row">
            <div class="col">
                <b-form-input v-model="firstName" placeholder="First name" ></b-form-input>
            </div>
            <div class="col">
                <b-form-input v-model="lastName" placeholder="Last name" ></b-form-input>
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
                    <b-form-select v-model="addClassStaff" :options="availableClassesStaff" size="sm" class="mt-3" :select-size="getSize(availableClassesStaff)"></b-form-select>
                    <b-button v-on:click="staffAdd" size="sm">Add Class</b-button>
                </div>
                <div class="col-6">
                    <label>Selected classes:</label>
                    <b-form-select v-model="removeClassStaff" :options="pickedClassesStaff" size="sm" class="mt-3" :select-size="getSize(pickedClassesStaff)"></b-form-select>
                    <b-button v-on:click="removeClass" size="sm">Remove Class</b-button>
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
                    <b-form-select v-model="addClass" :options="availableClasses" size="sm" class="mt-3" :select-size="getSize(availableClasses)"></b-form-select>
                    <b-button v-on:click="studentAdd" size="sm">Add Class</b-button>
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
import Course from '../../ui/models/Course'
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
            firstName: '',
            lastName: '',
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
            this.availableClassesStaff.push({value: classSelected._id, text: text})
        },
        addClasses: function(currArray, otherArray, selected, notSelected){
            if(selected != null){
                let index;
                
                //find index
                for(let i=0;i<currArray.length;i++){
                    if(currArray[i].value == selected){
                        index = i;
                    }
                }

                let classes = currArray[index];

                //remove picked class
                currArray.splice(index,1);

                //add picked class to selected
                otherArray.push({value: selected, text: classes.text});
            }
        },
        removeClasses: function(){
            if(this.removeClass != null){
                let classes = this.pickedClasses.filter(classes => classes.value == this.removeClass);

                //move removed class back to avaialble class
                this.availableClasses.push({value: classes[0].value, text: classes[0].text})

                //remove class from current list
                this.pickedClasses = this.pickedClasses.filter(classes => classes.value != this.removeClass);

                //select field becomes blank where there is only one object in the list whos value isnt null
                if(this.pickedClasses.length === 1){
                    this.removeClass = this.pickedClasses[0].value;
                }
                else{
                    this.removeClass = null;
                }

                //if there is one object in the classes available select that value
                if(this.availableClasses.length === 1){
                    this.addClass = this.availableClasses[0].value;
                }
            }
        },
        async submit(){
            if(this.firstName != '' && this.lastName != '' && this.email != '' && this.ucinetid != '' && this.pickedClasses){
                let classesStudent = [];
                let classesStaff = [];
                this.pickedClasses.forEach((element)=>{
                    classesStudent.push({_id: element.value, section: 1});
                });
                this.pickedClassesStaff.forEach((element)=>{
                    classesStaff.push({_id: element.value, section: 1});
                });
                this.shown = true;
                let user;
                if(this.staff === 'true'){
                    user = await axios.post('/api/insertStaff',{
                        name: {
                            firstName: this.firstName,
                            lastName: this.lastName
                        },
                        email: this.email,
                        ucinetid: this.ucinetid,
                        classes: classesStaff
                    })
                    window.location.href = 'landingStaff/' + user.data._id;
                }
                if(this.student === 'true'){
                    user = await axios.post('/api/insertStudent',{
                        name: {
                            firstName: this.firstName,
                            lastName: this.lastName
                        },
                        email: this.email,
                        ucinetid: this.ucinetid,
                        classes: classesStudent
                    })
                    window.location.href = 'landingStudent/' + user.data._id;
                }
            }
        },
        studentCheck: function(check){
            if(check == 'false'){
                return true;
            }
            return false;
        },
        getSize: function(array){
            if(array.length === 1 && array[0].value != null){
                return 1;
            }
            if (array.length <=4){
                return array.length;
            }
            return 4;
        },
        staffAdd: function(){
            console.log("in staff add ");

            this.addClasses(this.availableClassesStaff, this.pickedClassesStaff, this.addClassStaff, this.removeClassStaff);
            if(this.pickedClassesStaff.length === 1){
                this.removeClassStaff = this.pickedClassesStaff[0].value;
                console.log([this.pickedClassesStaff[0].value, this.removeClassStaff]);
            }
            if(this.availableClassesStaff.length === 1){
                this.addClassStaff = this.availableClassesStaff[0].value;
            }
            else{
                this.addClassStaff = null;
            }
        },
        studentAdd: function(){
            console.log("in student add ");

            this.addClasses(this.availableClasses, this.pickedClasses, this.addClass, this.removeClass);
            if(this.pickedClasses.length === 1){
                this.removeClass = this.pickedClasses[0].value;
                console.log([this.pickedClasses[0].value, this.removeClass]);
            }
            if(this.availableClasses.length === 1){
                this.addClass = this.availableClasses[0].value;
            }
            else{
                this.addClass = null;
            }
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