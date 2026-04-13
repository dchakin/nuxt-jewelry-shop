<template>
  <div>
    {{ favoritesStore.favoritesIds[0] }}
  </div>
</template>

<script lang="ts" setup>
const favoritesStore = useFavoritesStore()

favoritesStore.addToFavorite(1)
</script>

<style></style>
