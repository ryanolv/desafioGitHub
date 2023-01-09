<template>
    <div id="user-container">
        <Perfil :login="usuario.login" :avatar="usuario.avatar_url"/>
        <Repositorios :login="usuario.login"/>
    </div>
</template>

<script>
    import Perfil from '@/components/user/Perfil.vue'
    import Repositorios from '@/components/user/Repositorios.vue'

    export default {
        name: 'UsuarioSelecionado',
        components: { Perfil, Repositorios },
        props: {
            usuario: Object
        },
    }
</script>

<style scoped>
    #user-container {
        display: flex;
        margin-left: 17px;
        margin-top: 36px;
        margin-right: 42px;

    }
</style>