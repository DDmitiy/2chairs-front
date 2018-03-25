<template>
  <span>
    <v-card style="padding: 50px 0" class="elevation-10" id="bg-top-gradient">
      <v-layout row wrap >
        <v-flex xs2>
          <img width="80%" src="/static/2chrs.png" pr-3>
        </v-flex>
        <v-flex xs8 pl-3>
          <v-layout row>
            <h1 class="pt-4 text-xs-left">2 chairs company</h1>
          </v-layout>
          <v-layout>
            <v-dialog v-model='uploadDialog' attach='#app' max-width="500px">
              <v-btn  slot="activator" class="primary-btn" pt-5>
                Загрузка модели
              </v-btn>
              <UploadDialog
                @input="uploadDialog=$event"
              />
            </v-dialog>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
    <div id="bg-gradient">
    <v-container id="grid-container">
      <v-layout row wrap>
        <v-flex

          xs4
          class="pt-1 pr-1 elevation-10"
          v-for="category in categories"
          :key="category.name"
        >
          <v-card>
            <v-card-media :src="category.preview_url" height="400"></v-card-media>
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
    </div>
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
          {
            'preview_url': 'http://ikea24.com/image/catalog/product/301.168.48_part_1.jpg',
            'name': 'Стулья'
          },
          {
            'preview_url': 'https://www.qpstol.ru/global_images/goods/182/14b/167/f24/1012211.jpg',
            'name': 'Столы'
          },
          {
            'preview_url': 'https://files.meb100.ru/products/b6b3da02d46f8aa706fa268887a6ecfd.jpg',
            'name': 'Шкафы'
          },
          {
            'preview_url': 'http://photoudom.ru/photo/f6/f6f2987a9c957a186d436667c83e0211.jpg',
            'name': 'Полки'
          },
          {
            'preview_url': 'http://ekb-mebel.ru/assets/images/products/dvuspalnaya-krovat-s-podemnym-mekhanizmom-naomi-sm-208-01-02-fon-seryy-dzhut.jpg',
            'name': 'Кровать'
          }
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
  #bg-gradient {
    background: linear-gradient(118.07deg, #7654FF 0%, #A55AE0 29.98%, #FF855E 100%);
    opacity: 0.8;
    height: 100%;
  }
  #bg-top-gradient {
    background: linear-gradient(118.07deg, #FF855E 10%, #A55AE0 60%,  #7654FF 70%);
    opacity: 0.8;
    height: 100%;
  }

</style>
