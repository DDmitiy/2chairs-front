<template>
    <v-dialog v-model="dialog" attach="app" fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-toolbar dark color="primary">
        <v-btn icon @click.native="dialog = false" dark>
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.native="dialog = false">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-dialog>
</template>

<script>
  export default {
    name: "category-edit",
    data(){
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    }
  }
</script>

<style scoped>

</style>
