<script setup lang="ts">
import type { Offer } from '~/types';
const { toggleFavourite } = useOffersStore()
const props = defineProps<{
    offer: Offer
}>()
const sumPrice = computed(() => props.offer.price * props.offer.amount)
</script>

<template>
    <div class="card-side">
        <div class="top">
            <p class="price title-xl">{{ formatPrice(sumPrice) }}</p>
            <div class="additional-info">
                <p class="info-item text-m">Количество <span class="text-highlight">{{ props.offer.amount }}</span></p>
                <p class="info-item text-m">Стоимость за штуку <span
                        class="text-highlight">{{ formatPrice(props.offer.price) }}</span></p>
            </div>
        </div>
        <div class="bottom">
            <ButtonAddDeal :offer="props.offer" />
            <ButtonAddToFavourites @click="toggleFavourite(props.offer)" :offer="props.offer" />
        </div>
    </div>
</template>

<style scoped>
.card-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 20rem;
    height: 100%;
    padding: 1.25rem;
    border: 1px solid #E0E3EE;
    border-radius: 20px;
}

.price {
    color: #2D3B87;
    margin-bottom:0.75rem;
}
.additional-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

}

.info-item {
    display: flex;
    gap:1rem;
    justify-content: space-between;
    align-items: center;
    color: #969DC3;
}

.info-item .text-highlight {
    color: #2D3B87
}

.bottom {
    width: 100%;
    display: flex;
    gap: 0.75rem;
}

</style>