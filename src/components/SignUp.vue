<template>
  <v-card class="pa-5">
    <v-form ref="form" lazy-validation>
      <p class="title">Регистрация</p>
      <v-text-field
        label="Имя пользователя"
        v-model="name"
      ></v-text-field>

      <v-text-field
        v-model="company_name"
        label="Название организации"
      ></v-text-field>

      <input-file
        v-model="company_label"
        :extensions="['.png']"
        label="Логотип компании"
      ></input-file>

      <v-select
        label="Города, в которых происходит продажа"
        chips
        tags
        solo
        v-model="cities"
        append-icon=""
        clearable
        class="mt-3"
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
  import axios from '../http'
  import InputFile from './fields/InputFile'

  export default {
    components: {
      InputFile
    },
    name: 'signUp',
    data:() => ({
      e1: true,
      cities: [],
      company_name: '',
      name: '',
      password: '',
      company_label: '',
    }),
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          axios.post('/api/auth/register', {
            name: this.name,
            company_name: this.company_name,
            company_label: this.company_label,
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
  .card{
    max-width: 500px;
    background-color: white;
  }
</style>
