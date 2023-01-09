<template>
  <div class="main-container">
    <div id="title">
      <img src="/img/Vector.png" alt="GitHub">
      <h1>Repositórios favoritos</h1>
    </div>
    <Favoritos />
  </div>
</template>

<script>
  import Favoritos from '@/components/Favoritos.vue';

  export default {
    components: { Favoritos }
  }
</script>

<style scoped>
  #title {
    display: flex;
    padding: 0px 10px;
    align-items: center;
  }

  #title img {
    height: 50px;
    width: 50px;
  }

  #title h1 {
    margin-left: 30px;
  }
</style>
