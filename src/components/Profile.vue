<template>
  <span>
    <v-layout row wrap>
      <v-flex xs4 pr-1>
        <v-card style="padding: 100px 0 100px 0">
          <h1>Company Name</h1>
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card style="padding: 100px 0 100px 0">
          <h1>Big LOGO</h1>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex
        xs4
        pt-1
        pr-1
        v-for="cat in categories"
      >
        <v-card>
          <v-card-media
            :src="cat.url"
          >
            <v-flex align-center>
              <v-btn
                @click="dialog= true; currentCategory=cat.title"
              >
                {{cat.title}}
              </v-btn>
            </v-flex>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
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
    components:{
      CategoryEdit
    },
    data(){
      return{
        categories: ['adf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdfsadf', 'fadafsdfasd'],
        dialog: false,
        currentCategory: ''
      }
    },
    mounted(){
      axios.get('/categories', {
        name: name
      }).then((response) => {
        this.categories = response.data.categories
      })
    },
    computed:{

    }
  }
</script>

<style scoped>

</style>
