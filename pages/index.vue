<script setup lang="ts">
import type { Offer } from '~/types';
const offersStore = useOffersStore()
const { data: allOffers } = await useFetch<Offer[] | []>('/offers.json')
if (allOffers.value) {
    offersStore.setOffers(allOffers.value)
}
</script>

<template>
    <OffersList v-if="offersStore.offers.length" />
    <p v-else class="not-found">Нет подходящих предлоджений</p>
</template>
<style scoped>
.not-found{
    color: #2D3B87;
}
</style>