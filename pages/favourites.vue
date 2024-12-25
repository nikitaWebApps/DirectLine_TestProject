<script setup lang="ts">
const offersStore = useOffersStore()
if (offersStore.favouriteOffers) {
    offersStore.setOffers(offersStore.favouriteOffers)
}

</script>

<template>
    <OffersList v-if="offersStore.offers.length" />
    <p v-else-if="!offersStore.favouriteOffers.length" class="not-found">Нет избранных предложений</p>
    <p v-else class="not-found">Нет подходящих предлоджений</p>
</template>
<style scoped>
.not-found{
    color: #2D3B87;
}
</style>
