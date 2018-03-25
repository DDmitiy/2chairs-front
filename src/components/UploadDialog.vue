<template>
  <v-card class="pa-5">
    <v-form ref="form" lazy-validation>
      <p class="title">Загрузка</p>
      <v-text-field
        label="Категория"
        v-model="name"
      ></v-text-field>
      <v-text-field
        v-model="category"
        label="Категория"
      ></v-text-field>
      <v-text-field
        v-model="price"
        label="Цена"
      ></v-text-field>
      <input-file
        v-model="preview"
        :extensions="['.png']"
        label="Загрузите превью"
      ></input-file>
      <input-file
        v-model="model"
        :extensions="['.png']"
        label="Загрузите 3D модель"
      ></input-file>
      <v-btn
        @click.native="$emit('input', false)"
      >
        Отправить
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
  import axios from '../http'
  import InputFile from './fields/InputFile'

  export default {
    name: "upload-dialog",
    components:{
      InputFile
    },
    data(){
      return{
        category: '',
        model: '',
        preview: '',
        name: '',
        price: ''
      }
    },
    methods:{
      submit(){
        axios.post('/api/furniture', {
          category: this.category,
          model: this.model,
          preview: this.preview,
          name: this.name,
          price: this.price,
          token: this.$localStorage.get('token')
        })
      }
    }
  }
</script>

<style scoped>
  .card{
    background-color: white;
  }
</style>
