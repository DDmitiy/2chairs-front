<template>
  <v-layout>
    <v-flex xs12 id="bg">
      <div id="bg-gradient">
        <v-container fill-height id="grid-container">
          <v-layout class="center">
            <v-flex class="text-xs-right" xs3 offset-xs1>
              <img src="/static/TwoChairsLogo.png" alt="" class="text-xs-right mt-2 mb-5 pb-4">
              <p class="plain-text transparent mb-5">#bonch #hackathon<br> #spbgti #ar</p>
              <img class="" src="/static/bonch_logo.png" alt="">
              <img class="ml-5" src="/static/spbgti_logo.png" alt="">
            </v-flex>
            <v-flex class="" xs2>
              <div class="line-in-middle">
              </div>
            </v-flex>
            <v-flex class="" xs5>
              <p class="plain-text mt-3 mb-5 text-xs-left">Лучший инструмент для проектирования
                интерьера в реальном времени
              </p>
              <p class="plain-text mb-5 text-xs-left">
                Всё их оборудование и инструменты были живыми, в той или иной форме
              </p>
              <div class="text-xs-left" style="opacity: 1 !important;">
                <v-dialog v-model='loginDialog' attach='#app'>
                  <v-btn slot="activator" class="primary-btn white pink--text">
                    Sign In
                  </v-btn>
                  <SignIn/>
                </v-dialog>
                <v-dialog v-model='registerDialog' attach='#app' max-width="500px">
                  <v-btn  slot="activator" class="primary-btn transparent white--text">
                    Sign Up
                  </v-btn>
                  <SignUp/>
                </v-dialog>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>


<!---->

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
  .primary-btn {
    height: 40px;
    width: 160px;
    margin: 0;
    box-shadow: none;
    opacity: 1 !important;
    text-transform: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
  }

  .center {
    padding-top: 25%;
  }

  .plain-text {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 32px;
    font-size: 16px;
    color: #FFFFFF;
  }

  .transparent {
    opacity: 0.5;
  }

  .line-in-middle {
    height: 300px;
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
