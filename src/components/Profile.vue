<template>
  <span>
    <v-card style="padding: 50px 0">
      <v-layout row wrap>
        <v-flex xs3>
          <img height="86px" width="86px" src="http://brandmark.io/logo-rank/random/pepsi.png" alt="">
        </v-flex>
        <v-flex xs9>
          <h1 class="pt-4 text-xs-left">Company Name</h1>
        </v-flex>
      </v-layout>
    </v-card>
    <v-container id="grid-container">
      <v-layout row wrap>
        <v-flex
          xs3
          class="pt-1 pr-1"
          v-for="category in categories"
        >
          <v-card>
            <v-card-media :src="category.preview_url" height="200"></v-card-media>
              <v-card-actions>
                <v-btn
                  flat
                  block
                  large
                  color="blue"
                  @click="dialog= true; currentCategory=category.category"
                style="font-family: 'Open Sans', sans-serif; font-weight: bold">
                  {{category.name}}
                </v-btn>
              </v-card-actions>
            </v-card>
         </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" attach="app" fullscreen transition="dialog-bottom-transition" :overlay="false">
      <CategoryEdit
        @input="dialog=$event"
        category="cat.title"
      />
    </v-dialog>
  </span>
</template>

<script>
  import axios from 'axios'
  import CategoryEdit from './CategoryEdit'

  export default {
    name: "profile",
    components: {
      CategoryEdit
    },
    data() {
      return {
        categories: [
          {
            'preview_url': 'https://i.sofino.ua/files/mailings/21/modulnyi-divan-Sofino.jpg',
            'name': 'Диваны'
          },
          {
            'preview_url': 'https://images.ua.prom.st/807534956_w0_h0_to_12_venge.jpg',
            'name': 'Тумбы'
          },
        ],
        dialog: false,
        currentCategory: ''
      }
    },
    mounted() {
      axios.get('/api/categories', {
        name: name
      }).then((response) => {
        this.categories = response.data.categories
      })
    },
    computed: {}
  }
</script>

<style scoped>
  #grid-container {
    width: 1110px;
  }
</style>
