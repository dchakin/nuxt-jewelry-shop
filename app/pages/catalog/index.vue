<template>
  <div>Catalog</div>
</template>

<script lang="ts" setup>
import type { GetCategoriesResponse } from '~/interfaces/category.interface'

const config = useRuntimeConfig()
const API_URL = config.public.apiUrl

try {
  const data = await $fetch<GetCategoriesResponse>(API_URL + '/categories')
  console.log(data)
} catch (error) {
  console.error(error)
}
</script>

<style></style>
