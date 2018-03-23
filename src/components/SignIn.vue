<template>
  <v-card>
    <v-card-title
    >
      Вход
    </v-card-title>
    <v-text-field
      label="Имя пользователя"
    ></v-text-field>
    <v-text-field
      v-model="password"
      min="8"
      :append-icon-cb="() => (e1 = !e1)"
      :type="e1 ? 'password' : 'text'"
      label="Пароль"
    ></v-text-field>
    <v-btn >
      Отправить
    </v-btn>
  </v-card>
</template>

<script>
    export default {
      name: "sign-in",
      data() {
        return {
          e1: true
        }
      }
    }
</script>

<style scoped>

</style>
