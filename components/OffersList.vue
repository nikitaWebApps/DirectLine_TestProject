<script setup lang="ts">
const offersStore = useOffersStore()
</script>

<template>
    <main class="card-list">
        <OfferCard v-for="offer in offersStore.offers" :offer="offer" :key="offer.id" />
    </main>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>