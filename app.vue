<script setup lang="ts">
const rubikFontConnect = [{
  href: "https://fonts.googleapis.com",
  rel: "preconnect"
},
{
  href: "https://fonts.gstatic.com",
  rel: "preconnect",
  crossorigin: ""
},
{
  href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
  rel: "stylesheet",
}] as {}[] //TS warning fix

useHead({
  link: [...rubikFontConnect],
})
</script>

<template>

  <div class="container">
    <Header />
    <FiltersAndSearch />
    <div class="content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style>
@import '~/assets/css/reset.css';
:root {
  font-size: 16px;
}

body {
  font-family: 'Rubik', 'system-ui', 'sans-serif';
}

.container {
 max-width: 1232px;
  padding: 0 1rem;
  margin: auto;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 500px;
 
}

/* Global text styles */

.title-xl {
font-size: 20px;
font-weight: 500;
line-height: 20px;
}

.title-m {
font-size: 15px;
font-weight: 500;
line-height: 15px;
}

.title-m-v2 {
font-size: 15px;
font-weight: 500;
line-height: 18.75px;
}

.title-s {
font-size: 13px;
font-weight: 500;
line-height: 13px;
}


.text-l {
font-size: 15px;
font-weight: 400;
line-height: 15px;
}

.text-m {
font-size: 13px;
font-weight: 400;
line-height: 13px;
}

.text-m-v3 {
font-size: 13px;
font-weight: 400;
line-height: 19.5px;
}







</style>
