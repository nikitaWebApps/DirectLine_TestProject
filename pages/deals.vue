<script setup lang="ts">
const offersStore = useOffersStore()
if (offersStore.offersInDeals) {
    offersStore.setOffers(offersStore.offersInDeals)
}
</script>

<template>
    <OffersList v-if="offersStore.offers.length" />
    <p v-else-if="!offersStore.offersInDeals.length" class="not-found">Нет предложений в сделках</p>
    <p v-else class="not-found">Нет подходящих предложений</p>
</template>
<style scoped>
.not-found{
    color: #2D3B87;
}
</style>