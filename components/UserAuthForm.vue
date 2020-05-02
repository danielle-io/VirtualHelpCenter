<template>
  <v-form v-model="valid">
    <v-text-field v-model="userInfo.firstName" 
                  label="First Name" 
                  :rules="[required('firstName')]"
                  v-if="hasName" />

    <v-text-field v-model="userInfo.lastName"
                  label="Last Name" 
                  :rules="[required('lastName')]"
                  v-if="hasName" />

    <v-text-field v-model="userInfo.email" 
                  label="Email"
                  color="green" 
                  :rules="[required('email'), emailFormat()]"/>

    <v-container fluid>
	    <v-row align="center">
	        <v-select
	          v-model="e6"
	          :items="classes"
	          :menu-props="{ maxHeight: '400' }"
	          label="Classes"
	          multiple
	          hint="Choose your enrolled classes"
	          persistent-hint>
	        </v-select>
	    </v-row>
	</v-container>

    <UserAuthPassword v-model="userInfo.password" label="Password" />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid" color="green accent-3">{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
  import validations from "@/utils/validations";
  import UserAuthPassword from '@/components/UserAuthPassword.vue';

  export default {
    data() {
      return {
      	classes: [
      		'ICS33',
      		'ICS45J',
      		'ICS45C',
      		],
      	e6: [],
        valid: false,
        userInfo: {
          name: '',
          email: '',
          password: '',
        },
        ...validations
      }
    },
    components: {
      UserAuthPassword
    },
    props: {
      submitForm: {
        type: Function,
        required: true,
      },
      buttonText: {
        type: String,
        required: true,
      },
      hasName: Boolean,
      registrationCheckboxes: Boolean
    }
  }
</script>

<style lang="scss" scoped>

</style>