<template>
  <input
    v-model="data"
    :class="[$style[variant], $style.input]" />
</template>

<script lang="ts" setup>
const { variant } = defineProps<{
  variant: 'gray' | 'black'
}>()

const data = defineModel<string>('')
</script>

<style module>
.input {
  width: 100%;
  padding: 12px 0;
  background: none;
  border: none;
  color: var(--color-black);
  outline: none;
}

.input::placeholder {
  color: var(--color-dark-gray);
}

.gray {
  border-bottom: 1px solid var(--color-gray);
}

.black {
  border-bottom: 1px solid var(--color-black);
}
</style>
