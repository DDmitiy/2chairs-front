<template>
  <v-layout>
    <v-flex xs12 id="bg">
      <v-layout row>
        <v-flex xs7 offset-xs1 pt-3>
          <h1 style="float: left; padding-left: 50px">2 chairs</h1>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 offset-xs1 pt-5>
          <h2 class="footer">
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
            Some text about our project
          </h2>
        </v-flex>
        <v-flex xs1 offset-xs1>
          <v-dialog v-model='loginDialog' attach='#app' max-width="500px">
            <v-btn
              class="footer"
              slot="activator"
            >
              Sign In
            </v-btn>
            <SignIn/>
          </v-dialog>
        </v-flex>
        <v-flex xs1 ml-5>
          <v-dialog v-model='registerDialog' attach='#app' max-width="500px">
            <v-btn
              class="footer"
              slot="activator"
            >
              Sign Up
            </v-btn>
            <SignUp/>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import SignIn from './SignIn'
  import SignUp from './SignUp'

  export default {
    name: "home",
    components:{
      SignIn,
      SignUp
    },
    data:() => ({
      loginDialog: '',
      registerDialog: ''
    })
  }
</script>

<style scoped>
  #bg{
    background-image: url('/static/bg_2chair.jpg');
    background-size: 100%;
  }
  .footer{
    margin-top: 300px;
    margin-bottom: 100px;
  }
  .dialog{
    background-color: white;
  }
</style>
