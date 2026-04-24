import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>('');

  function setToken(value: string) {
    token.value = value;
  }

  function clearToken() {
    token.value = '';
  }

  return {
    token,
    setToken,
    clearToken
  }
}, {
  persist: true
})
