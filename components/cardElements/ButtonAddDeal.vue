<script setup lang="ts">
import type { Offer } from '~/types';

const offerStore = useOffersStore()
const props = defineProps<{
    ariaLabel?: string
    offer: Offer
}>()



const isInDeals = computed(() => offerStore.offersInDeals.some(offer => offer.id == props.offer.id))
const isPayed = computed(() => offerStore.payedOffers.some(offer => offer.id == props.offer.id))

function handleButtonClick() {
    if (!isInDeals.value) {
        offerStore.addToDeals(props.offer)
        return
    }
    if (isInDeals && !isPayed.value) {
        offerStore.addToPayedOffers(props.offer)
        return
    }
}

const classes = computed(() => {
    const classes = []
    if (isInDeals.value) classes.push('in-deals')
    return classes.join(' ')
})

const buttonText = computed(() => {
    if (isInDeals.value && !isPayed.value) return 'Оплатить'
    if (isPayed.value) return 'Оплачено'
    return 'Добавить в сделки'
})

</script>
<template>
    <button @click="handleButtonClick()" class="button-base title-m" :class="classes"
        :disabled="isPayed"
        type="button">{{ buttonText }}</button>
</template>
<style scoped>
.button-base {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #F4F5F9;
    color: #2D3B87;
    border-radius: 10px;
}
.button-base.in-deals {
    background-color: #69C57F;
    color: #fff;
}
.button-base:disabled {
    border: 1px solid #E0E3EE;
    background-color: #fff;
    color: #969DC3;
}
</style>