<template>
  <v-layout>
    <v-flex xs12 id="bg">
      <v-layout row>
        <v-flex xs7 offset-xs1>
          <h1>2 chairs</h1>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
  #bg{
    background-image: url('/static/bg_2chair.jpg');
    width: 98%;
  }
</style>
