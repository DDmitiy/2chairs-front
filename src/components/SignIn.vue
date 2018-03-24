<template>
  <v-card class="pa-5">
    <v-form ref="form" lazy-validation>
      <p class="title">Вход</p>
      <v-text-field
        v-model="name"
        label="Имя пользователя"
      ></v-text-field>
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
    name: "sign-in",
    data: () => ({
      e1: true,
      name: '',
      password: '',
    }),
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          axios.post('/api/auth/login', {
            name: this.name,
            password: this.password
          })
        }
      },
      clear() {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  .card {
    max-width: 500px;
    background-color: white;
  }
</style>
