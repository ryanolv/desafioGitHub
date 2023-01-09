<template>
  <NavBar :logo="src_logo" :alt="nome_pagina"/>
  <router-view/>
</template>

<script>
  import NavBar from './components/NavBar.vue'

  export default {

    components: {NavBar},
    data() {
      return {
        src_logo: '/img/GitHubSearch.png',
        nome_pagina: 'GitHub Search'
      }
    }
  }
</script>

<style>
  * {
    font-family: 'Inter';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px 40px;
    text-align: center;
    min-height: 250px;
  }
</style>
