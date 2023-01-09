<template>
    <div id="perfil-container">
        <img :src="avatar" alt="Avatar">
        <p>{{ login }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Perfil',
        props: ['avatar', 'login']
    }
</script>

<style scoped>
    #perfil-container {
        width: 339px;
        height: 664px;
        background-color: #D9D9D9;
        border-radius: 5px;
        margin-bottom: 260px;
        position: auto;
    }

    #perfil-container img {
        width: 300px;
        height: 300px;
        margin: 15px;
        filter: drop-shadow(0px 0px 4px #000000);
        border-radius: 5px;
    }

    #perfil-container p {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 43px;
        text-align: left;
        margin-left: 15px;
    }
</style>