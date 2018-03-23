<template>
  <v-card>
    <v-card-title

    >
      Регистрация
    </v-card-title>
    <v-text-field
      label="Имя пользователя"
    ></v-text-field>
    <v-text-field
      label="Название организации"
    ></v-text-field>
    <v-select
      label="Города, в которых происходит продажа"
      chips
      tags
      solo

      append-icon=""
      clearable
      v-model="cities"
    >
      <template slot="selection" slot-scope="data">
        <v-chip
          close
          @input="remove(data.item)"
          :selected="data.selected"
        >
          <strong>{{ data.item }}</strong>&nbsp;
        </v-chip>
      </template>
    </v-select>
    <v-text-field
      label="Пароль"
    ></v-text-field>
    <v-btn >
      Отправить
    </v-btn>
  </v-card>
</template>

<script>
  export default {
    name: 'signUp',
    data () {
      return {
        cities: []
      }
    },

    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }
</script>

<style scoped>

</style>
