<template>
  <v-layout>
    <v-flex xs12 id="bg">
      <div id="bg-gradient">
        <v-container fill-height id="grid-container">
          <v-layout class="">
            <v-flex class="px-3" xs3 offset-xs1>
              <div style="background-color: rgba(255, 255, 255, 0.5)">
                sdf
              </div>
            </v-flex>
            <v-flex class="px-3" xs2>
              <div class="line-in-middle" style="background-color: rgba(255, 255, 255, 0.5)">
              </div>
            </v-flex>
            <v-flex class="px-3" xs5>
              <div style="background-color: rgba(255, 255, 255, 0.5)">
                sdf
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>


<!--<v-dialog v-model='loginDialog' attach='#app' max-width="500px">
  <v-btn
    class="footer"
    slot="activator"
  >
    Sign In
  </v-btn>
  <SignIn/>
</v-dialog>
<v-dialog v-model='registerDialog' attach='#app' max-width="500px">
  <v-btn
    class="footer"
    slot="activator"
  >
    Sign Up
  </v-btn>
  <SignUp/>
</v-dialog>-->

<script>
  import SignIn from './SignIn'
  import SignUp from './SignUp'

  export default {
    name: "home",
    components: {
      SignIn,
      SignUp
    },
    data: () => ({
      loginDialog: '',
      registerDialog: ''
    })
  }
</script>

<style scoped>

  .line-in-middle {
    height:200px;
    background: linear-gradient(to right,
    transparent 0%,
    transparent calc(50% - 0.81px),
    white calc(50% - 0.8px),
    white calc(50% + 0.8px),
    transparent calc(50% + 0.81px),
    transparent 100%);
  }

  #grid-container {
    width: 1110px;
  }

  #bg-gradient {
    background: linear-gradient(118.07deg, #7654FF 0%, #A55AE0 29.98%, #FF855E 100%);
    opacity: 0.8;
    height: 100%;
  }

  #bg {
    background-image: url('/static/bg_2chair.jpg');
    background-size: 100%;
  }

  .footer {
    margin-top: 300px;
    margin-bottom: 100px;
  }

  .dialog {
    background-color: white;
  }
</style>
