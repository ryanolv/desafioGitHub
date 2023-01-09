<template>
    <div id="list-container">
        <div class="row-container" v-for="(repositorio, index) in repositorios" :key="index">
            <h1>{{ repositorio.name }}</h1>
            <p>{{ repositorio.description }}</p>
            <p>{{ repositorio.stargazers_count }} stars</p>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'Repositorios',
        data() {
            return {
                repositorios: null
            }
        },
        props: ['login'],
        methods: {
            // Resgata os repertórios do usuário selecionado 
            getRepositorios(user) {
                axios.get(`https://api.github.com/users/${user}/repos?direction=desc`)
                .then(res => {
                    this.repositorios = res.data
                })
                .catch(error => alert(error))
            }
        },
        mounted() {
            this.getRepositorios(this.login)
        }
    }
</script>

<style scoped>
    #list-container {
        margin-left: 70px;
    }
    .row-container {
        width: 971px;
        margin: 0;
        text-align: left;
        border-bottom: 1px solid #222;
        transform: rotate(-0.08deg);
        margin-bottom: 15px;
        
    }
</style>