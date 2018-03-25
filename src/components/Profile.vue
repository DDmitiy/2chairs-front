<template>
  <span>
    <v-card style="padding: 50px 0">
      <v-layout row wrap>
        <v-flex xs3>
          <img height="86px" width="86px" src="http://brandmark.io/logo-rank/random/pepsi.png" alt="">
        </v-flex>
        <v-flex xs9>
          <v-layout row>
            <h1 class="pt-4 text-xs-left">Company Name</h1>
          </v-layout>
          <v-layout>
            <v-dialog v-model='uploadDialog' attach='#app' max-width="500px">
              <v-btn  slot="activator" class="primary-btn">
                Загрузка модели
              </v-btn>
              <UploadDialog/>
            </v-dialog>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
    <v-container id="grid-container">
      <v-layout row wrap>
        <v-flex
          xs3
          class="pt-1 pr-1"
          v-for="category in categories"
          :key="category.name"
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
        :category="currentCategory"
      />
    </v-dialog>
  </span>
</template>

<script>
  import axios from '../http'
  import CategoryEdit from './CategoryEdit'
  import UploadDialog from './UploadDialog'
  import InputFile from './fields/InputFile'

  export default {
    name: "profile",
    components: {
      CategoryEdit,
      UploadDialog,
      InputFile
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
        uploadDialog: false,
        dialog: false,
        currentCategory: ''
      }
    },
    mounted() {
      axios.get('/api/categories', {
        params: {
          name: 'a'
        }
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
</style>
