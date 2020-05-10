
<template>
    <div class = "container">
        <div class = "row">
            <b-button v-on:click="submit" variant="danger">Submit</b-button>
        </div>
    </div>
</template>


<script>
import vue from 'vue'
import axios from "~/plugins/axios"

import {BFormInput, BFormSelect, BButton, BFormCheckbox} from 'bootstrap-vue'

export default {
    components: {
        'b-button' : BButton,
    },

    methods:{
    async submit(){
            await axios.post('/api/insertCourse',{
                dept: "Information and Computer Science",
                courseNum: "32"
            }
            )
            console.log("Inserted course")

}
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