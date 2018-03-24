<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon @click.native="$emit('input', false)" dark>
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>{{category}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="$emit('input', false)">Save</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs3>

      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    name: "category-edit",
    props: [
      'category'
    ],
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
