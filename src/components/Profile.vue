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
                @click=""
                slot="activator"
              >
              </v-btn>
            </v-flex>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <CategoryEdit/>
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
      }
    },
    mounted(){
      /*axios.get('/categories', {
        name: name
      }).then((response) => {
        this.categories = response.data.categories
      })*/
    },
    computed:{

    }
  }
</script>

<style scoped>

</style>
