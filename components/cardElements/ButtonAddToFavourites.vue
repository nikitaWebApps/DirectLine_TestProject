<script setup lang="ts">
import type { Offer } from '~/types';

const props = defineProps<{
    ariaLabel?: string
    offer: Offer
}>()


const favouriteOffers = useOffersStore().favouriteOffers
const isFavourite = computed(() => favouriteOffers.some(offer => offer.id == props.offer.id))

const classes = computed(() => {
    const classes = []
    if (isFavourite.value) classes.push('active')

    return classes.join(' ')
})
</script>
<template>
    <button class="button-base title-m" :class="classes" type="button">
        <IconHeart :is-active="isFavourite" />
    </button>
</template>
<style scoped>
.button-base {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #F4F5F9;
    color: #2D3B87;
    border-radius: 10px;
}
.button-base.active {
    background-color: #2D3B87;
}
</style>