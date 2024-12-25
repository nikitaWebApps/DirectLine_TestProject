<script setup lang="ts">
import type { FilterType } from '~/types'

const { filterOffers } = useOffersStore()
const route = useRoute()
const filterOptions = [
    {
        name: 'Все типы',
        key: 'all',
    },
    {
        name: 'Прямые продажи',
        key: 'direct',
    },
    {
        name: 'Аукцион',
        key: 'auction',
    }
]
const activeFilter = ref(filterOptions[0])
function handleFiltering(filter: typeof filterOptions[number]) {
    activeFilter.value = filter
    filterOffers(filter.key as FilterType)
}

watch(() => route.path, () => {
    handleFiltering(filterOptions[0])
})

</script>
<template>
    <div class="filters">
        <button v-for="filter in filterOptions"
            @click="handleFiltering(filter)"
            class="filter-button text-l" type="button"
            :class="activeFilter.key == filter.key ? 'active' : ''"
            :key="filter.key">{{ filter.name }}</button>
    </div>
</template>

<style scoped>
.filters {
    display: flex;
    padding: 0.75rem;
    gap:0.75rem;
    border: 1px solid #E0E3EE;
    border-radius: 10px;
    background: #F4F5F9;
}

.filter-button {
    color:#969DC3;
}
.filter-button.active {
    color:#2D3B87;
}
</style>