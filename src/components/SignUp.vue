<template>
  <v-card>
    <v-form ref="form" lazy-validation>
      <v-card-title>Регистрация</v-card-title>
      <v-text-field
        label="Имя пользователя"
        v-model="name"
      ></v-text-field>
      <v-text-field
        v-model="companyname"
        label="Название организации"
      ></v-text-field>
      <v-select
        label="Города, в которых происходит продажа"
        chips
        tags
        solo
        v-model="cities"
        append-icon=""
        clearable
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
        v-model="password"
        min="8"
        :append-icon-cb="() => (e1 = !e1)"
        :type="e1 ? 'password' : 'text'"
        label="Пароль"
      ></v-text-field>
      <v-btn
        @click="submit"
      >
        Отправить
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'signUp',
    data:() => ({
      e1: true,
      cities: [],
      companyname: '',
      name: '',
      password: '',
    }),
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          axios.post('/api/auth/register', {
            name: this.name,
            companyname: this.companyname,
            cities: this.cities,
            password: this.password
          })
        }
      },
      clear() {
        this.$refs.form.reset()
      },
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }
</script>

<style scoped>

</style>
