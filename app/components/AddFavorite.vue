<template>
  <button
    v-show="isShown || favoriteStore.isFavorite(id)"
    class="fav-button"
    @click.stop.prevent="() => favoriteStore.toggleFavorites(id)">
    <Icon
      name="app-icon:favorite-add"
      size="18px" />
  </button>
</template>

<script lang="ts" setup>
const { id, isShown } = defineProps<{
  id: number
  isShown: boolean
}>()

const favoriteStore = useFavoritesStore();

</script>

<style scoped>
.fav-button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
