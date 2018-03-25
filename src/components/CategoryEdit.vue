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
      <v-flex
        xs3
        class="pt-1 pr-1 elevation-10"
        v-for="item in items"
        :key="item.name"
      >
        <v-card>
          <v-card-media :src="item.preview_url" height="400"></v-card-media>
          <v-card-actions>
            <v-btn
              flat
              block
              large
              color="blue"
              @click="dialog= true; currentCategory=category.category"
              style="font-family: 'Open Sans', sans-serif; font-weight: bold">
              Удалить ({{item.name}})
            </v-btn>
          </v-card-actions>
        </v-card>
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
        items:[
          {
            'preview_url': 'http://www.fabrika-horeca.ru/images/mebel/belyi-stul-alban-1200x800-8661.jpg',
            'name': 'Alban'
          },
          {
            'preview_url': 'http://www.mebel-new.ru/upload/iblock/785/78543530e483a941df7d8e42fb0c6df8.jpg',
            'name': 'New-meb'
          },
          {
            'preview_url': 'http://static4.depositphotos.com/1001686/338/i/950/depositphotos_3381488-stock-photo-antique-chair.jpg',
            'name': 'Antique'
          },
          {
            'preview_url': 'http://branch.pricediscount.ru/60209-1-home_default/%D0%A1%D1%82%D1%83%D0%BB-%E2%80%9Capriori%E2%80%93s%E2%80%9D.jpg',
            'name': 'Caprioor'
          },
          {
            'preview_url': 'https://i3.63mebel.ru/1/4937/49367401/075a3e/stul-quot-vagner-t1-quot.jpg',
            'name': 'Vagner'
          },
          {
            'preview_url': 'http://ikea24.com/image/catalog/product/301.168.48_part_1.jpg',
            'name': 'Prod-ik'
          },
          {
            'preview_url': 'http://ofavorit.ru/media/img/alinda_1_1.jpg',
            'name': 'Lainfa'
          },
          {
            'preview_url': 'https://loft-concept.ru/upload/iblock/4fc/4fc3b4abc8de3626602e9f8ab9e74a44.jpg',
            'name': 'Iblock'
          },
          {
            'preview_url': 'http://nevaoffice.ru/files/goods/kf-1_orange26-29-1_45.jpg',
            'name': 'Goosdq'
          },
          {
            'preview_url': 'https://jquery.re/items/10/06/92/62/23/livepreview.jpg',
            'name': 'Hureb'
          },
          {
            'preview_url': 'https://majorfloor.ru/image/cache/data/DIK_mebel/1/006-1000x1000.jpg',
            'name': 'Jerto'
          },
          {
            'preview_url': 'http://new.fastshoptop.org/img/p/1/61692-home_default.jpg',
            'name': 'Def-ss'
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
