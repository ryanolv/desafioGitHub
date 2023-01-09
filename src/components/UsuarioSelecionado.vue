<template>
    <div id="user-container">
        <Perfil />
        <Repositorios />
    </div>
</template>

<script>
    import Perfil from '@/components/user/Perfil.vue'
    import Repositorios from '@/components/user/Repositorios.vue'

    export default {
        name: 'ThisUserView',
        components: { Perfil, Repositorios }
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