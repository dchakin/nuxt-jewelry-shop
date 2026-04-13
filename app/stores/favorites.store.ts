import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favoritesIds = ref<number[]>([]);

  function addToFavorite(id: number) {
    if (favoritesIds.value.includes(id) === false) {
      favoritesIds.value.push(id);
    }
  }

  function removeFromFavorites(id: number) {
    favoritesIds.value = favoritesIds.value.filter(item => item != id)
  }

  return {
    favoritesIds,
    addToFavorite,
    removeFromFavorites
  }
})
