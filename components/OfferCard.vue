<script setup lang="ts">
import type { Offer } from '~/types';
const props = defineProps<{
    offer: Offer
}>()

</script>

<template>
    <div class="offer">
        <div class="offer-content">
            <img :src="`/${offer.imageSrc}.jpg`" alt="" loading="lazy" class="offer-image">
            <div class="offer-info">
                <p class="offer-category text-m">{{ props.offer.category.name }}</p>
                <h2 class="offer-title text-m-v2">{{ props.offer.name }}</h2>
                <div class="offer-city text-m">
                    <IconGeo />
                    <p>{{ props.offer.city }}</p>
                </div>
                <div class="offer-seller text-m">
                    <p>Продавец: <span class="seller">{{ props.offer.seller }}</span> </p>
                </div>
                <div class="offer-kind text-m">
                    <p>Вид товара:</p>
                    <div class="offer-kind__items">
                        <p v-for="kind in props.offer.kind" class="offer-kind-item">{{ kind }}</p>
                    </div>
                </div>
                <p class="offer-description text-m-v3">{{ props.offer.description }}</p>
            </div>
        </div>
        <CardSide :offer="offer" />
    </div>
</template>

<style scoped>
.offer {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: start;
    border: 1px solid #E0E3EE;
    border-radius: 20px;
}

.offer-content {
    display: flex;
    gap:1.125rem;
    padding: 1.125rem;
    padding-bottom: 4rem;
    
}
.offer-info {
    display: flex;
    flex-direction: column;
    gap:0.75rem
}

.offer-image {
    max-width: 16rem;
    max-height: 16rem;
    object-fit: cover;
}
.offer-category {
    color: #969DC3
}
.offer-title {
    color: #2D3B87;
    margin-bottom: 0.75rem
}

.offer-city {
    display: flex;
    align-items: center;
    gap:0.125rem;
    padding: 0.25rem 0.5rem;
    max-width: max-content;
    color: #616CA5;
    background-color: #F4F5F9;
    border-radius: 5px;
}

.offer-seller {
    display: flex;
    gap: 0.25rem;
    color: #969DC3;
}

.offer-seller .seller {
    color: #2D3B87;
}

.offer-kind {
    display: flex;
    flex-direction: column;
    padding:0.5rem;
    border-radius: 10px;
    gap:0.25rem;
    max-width: max-content;
    color: #969DC3;
    background-color: #F4F5F9;

}
.offer-kind__items {
    display: flex;
    gap:0.25rem;
    color: #616CA5

}

.offer-description {
    max-height: 60px;
    overflow: clip;
    text-overflow: ellipsis;
    color: #2D3B87;
}
</style>
