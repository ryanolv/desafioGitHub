<template>
    <div id="users-list">
        <div class="users-row">
            <img :src="avatarUser" alt="Avatar">
            <p>{{ loginUser }}</p>
        </div>
        <div class="users-row">
            <p>Usuario 2</p>
        </div>
        <div class="users-row">
            <p>Usuario 3</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'UsuariosView',
        props: {
            loginUser: String,
            avatarUser: String
        }
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