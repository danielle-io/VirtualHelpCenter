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

        <!-- Select Classes -->
        <div class="row">
            <b-form-select v-model="selected" :options="classes" size="sm" class="mt-3"></b-form-select>
            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
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
//import axios from '~/plugins/axios'
import {BFormInput, BFormSelect, BButton, BFormCheckbox} from 'bootstrap-vue'

export default {
    components: {
        'b-form-input': BFormInput,
        'b-form-select': BFormSelect,
        'b-button' : BButton,
        'b-form-checkbox': BFormCheckbox
    },
    data(){
        return{
            firstname: '',
            lastname: '',
            email:'',
            ucinetid: '',
            selected: null,
            classes: [
            { value: null, text: 'Please select a class:' },
            ], 
            shown:false
        }
    },
    methods: {
        loadClasses: function(classSelected){
            var text = classSelected.dep +" "+ classSelected.courseNum
            this.classes.push({value: classSelected._id, text: text})
        },
        async submit(){
            
            if(this.firstname != '' && this.lastname != '' && this.email != '' && this.ucinetid != '' && this.selected != null){
                console.log("submitting")
                this.shown = true;
                let user = await this.$axios.post('/insertUser',{
                    name: {
                        firstname: this.firstname,
                        lastname: this.lastname
                    },
                    email: this.email,
                    ucinetid: this.ucinetid
                })
                await axios.post('/api/insertStudent',{
                    _id : user.data,
                    classes: [{
                        _id: this.selected,
                        section: 1
                    }]
                })
                window.location.href = 'request/'+user.data
                
            }
        }
    },
    async created(){
        let classes = await this.$axios.get("/courses");
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