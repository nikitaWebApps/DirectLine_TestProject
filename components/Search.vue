<script setup lang="ts">
const offerStorage = useOffersStore()
const route = useRoute()

const searchInput = defineModel<string>('searchInput')

watch(() => route.path, () => {
    searchInput.value = ''
})

</script>

<template>
    <div class="search">
        <input v-model="searchInput" @input="offerStorage.search(searchInput as string)" type="text"
            class="search-input" />
        <div class="icon">
            <IconSearch />
        </div>
    </div>
</template>

<style scoped>
.search {
   position: relative;

}
.search-input {
    display: flex;
    align-items: center;
    border: 1px solid #E0E3EE;
    gap:0.5rem;
    height: 48px;
    border-radius: 10px;
    padding: 0.25rem;
    padding-left: 0.5rem;
    min-width: 274px;
}
.icon {
    position: absolute;
    top:0.25rem;
    right:0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: #2D3B87;
    border-radius: 10px;
}
</style>