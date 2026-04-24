<template>
  <div>
    <h1>Мой аккаунт</h1>

    <form class="login-form">
      <div class="login-form__fields">
        <InputField
          v-model="email"
          variant="gray"
          placeholder="Email" />
        <InputField
          v-model="password"
          variant="gray"
          placeholder="Пароль"
          type="password" />
      </div>

      <div class="login-form__actions">
        <ActionButton
          color="primary"
          @click.stop.prevent="login">
          Вход
        </ActionButton>
        <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { LoginResponse } from '~/interfaces/auth.interface'

const API_URL = useApi()
const email = ref<string>('')
const password = ref<string>('')
const authStore = useAuthStore()

async function login() {
  const data = await $fetch<LoginResponse>(`${API_URL}/auth/login`, {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })

  authStore.setToken(data.token)
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 64px;
}

.login-form__fields {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.login-form__actions {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.login-form__actions a {
  text-decoration: none;
  margin: 0 auto;
  color: var(--color-black);
}

.login-form__actions a:hover {
  color: var(--color-black-hover);
}
</style>
