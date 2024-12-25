<script setup lang="ts">

const IconHeart = resolveComponent('IconHeart')
const IconPack = resolveComponent('IconPack')
const IconBox = resolveComponent('IconBox')
const menuLinks = [
    {
        icon: IconHeart,
        name: 'Избранное',
        href: '/favourites'
    },
    {
        icon: IconBox,
        name: 'Склад',
        href: '/',
    },
    {
        icon: IconPack,
        name: 'Сделки',
        href: '/deals'
    }
]
</script>

<template>
    <header class="header">
        <div class="header-top">
        </div>
        <div class="header-bottom">
            <nav class="header-menu">
                <NuxtLink v-for="link in menuLinks" :key="link.name" :to="link.href" active-class="active"
                    class="header-menu__button title-s">
                    <div class="header-menu__button-inner">
                        <component :is="link.icon"></component>
                        {{ link.name }}
                    </div>
                </NuxtLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 5rem;
}
.header-top{
    height: 48px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    background-color: #E0E3EE;
}
.header-bottom {
display: flex;
justify-content: flex-end;
}

.header-menu {
    display: flex;
}

.header-menu__button {
    display: flex;
    flex-direction: column;

    min-width: 86px;
    min-height: 50px;
    padding: 0.6rem;
    border-radius: 10px;
}
.header-menu__button.active {
 background-color: #F4F5F9;
}

.header-menu__button-inner {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    font-weight: 500;
    color: #2D3B87;
}

</style>
