<template>
  <div>
    <NuxtLink
      href="/"
      @click="authStore.clearToken">
      Выход
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})

const authStore = useAuthStore()
</script>

<style></style>
