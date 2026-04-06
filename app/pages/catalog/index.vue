<template>
  <div>Catalog</div>
</template>

<script lang="ts" setup>
import type { GetCategoriesResponse } from '~/interfaces/category.interface'

const config = useRuntimeConfig()
const API_URL = config.public.apiUrl

const { data, error, } = await useFetch(API_URL + '/categories')

console.log(data.value);
console.log(error.value);

// try {
//   const data = await $fetch<GetCategoriesResponse>(API_URL + '/categories')
//   console.log(data)
// } catch (error) {
//   console.error(error)
// }
</script>

<style></style>
