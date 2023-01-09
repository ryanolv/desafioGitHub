<template>
    <div id="users-list">
        <div class="users-row" v-for="(usuario, index) in usuarios" :key="index" @click="setarUsuario(usuario)">
            <img :src="usuario.avatar_url" alt="Avatar"  >
            <p>{{ usuario.login }}</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'UsuariosView',
        data() {
            return {
                index: null
            }
        },
        props: {
            usuarios: Array,
            setarUsuario: Function
        },
    }
</script>

<style scoped>
    #users-list {
        margin: 62px 71px;
    }

    .users-row {
        width: 1286px;
        height: 171px;
        box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-bottom: 34px;
        /* padding: 13px; */

        display: flex;
        cursor: pointer;
    }

    .users-row img {
        width: 144px;
        height: 144px;
        margin: 13px;
        filter: drop-shadow(0px 0px 4px #000);
        border-radius: 5px;
    }

    .users-row p {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 300px;
        font-size: 36px;
        line-height: 43px;
        color: #000;
        margin-top: 22px;


    }
</style>