<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: NuxtError
}>()

function goHome() {
  navigateTo('/')
}
</script>

<template>
  <div class="error__wrapper">
    <h1 class="">{{ error.status }} ошибка</h1>

    <div
      v-if="error.status === 404"
      class="error__message">
      Страница не найдена, попробуйте перейти на главную страницу
    </div>
    <div
      v-else
      class="error__message">
      {{ error.message }}
    </div>

    <ActionButton
      @click="goHome"
      color="ghost"
      >На главную</ActionButton
    >
  </div>
</template>

<style scoped>
.error__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.error__message {
  color: var(--color-dark-gray);
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 40px;
}
</style>
