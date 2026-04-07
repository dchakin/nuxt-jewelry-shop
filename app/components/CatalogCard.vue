<template>
  <NuxtLink
    class="card"
    to="/">
    <div
      class="card__image"
      :style="{
        background: `url(${config.public.imageUrl}${product.images[0]}) lightgray 50% / cover no-repeat`,
      }">
      <div class="card__discount">-{{ product.discount }}</div>
    </div>

    <div class="card__name">{{ product.name }}</div>

    <div>$ {{ product.price }}</div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Product } from '~/interfaces/product.interface'

const product = defineProps<Product>()

const config = useRuntimeConfig()
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 320px;
  width: 100%;
  text-decoration: none;
}

.card__image {
  aspect-ratio: 1/1;
  width: 100%;
  min-width: 320px;
  border-radius: 8px;
  padding: 16px;
}

.card__price {
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  text-transform: capitalize;
  color: var(--color-accent);
}

.card__name {
  font-size: 20px;
  line-height: 26px;
  color: var(--color-black);
}

.card__discount {
  background: var(--color-accent);
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 12px;
  color: var(--color-white-light);
  justify-self: start;
}
</style>
