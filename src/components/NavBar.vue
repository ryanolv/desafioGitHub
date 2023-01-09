<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">INÍCIO</router-link> 
        <router-link to="/favoritos">FAVORITOS</router-link>
  </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    
    #nav {
        position: auto;
        height: 84px;
        background-color: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 20px;
        
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 40px;

    }

    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #nav a {
        padding-inline: 8px;
        text-decoration: none;
        font-weight: bold;
        color: #000000;
    }



</style>