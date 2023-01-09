<template>
    <div>
        <!-- <section v-if="usuarios.length === 0">
            
      </section> -->
    <!-- <section v-else-if="!usuarioSelecionadoId">
        lista
    </section>
    <section v-else>
        detalhes
    </section> -->
    <section v-if="usuarios.length === 0">
        <Banner />  
        <form  id="form-container" @submit="searchUsuario" >
                <div class="button-container">
                    <button type="button" name="repositorio" value="repositorio">Repositório</button>
                    <button type="button" name="usuario" value="usuario">Usuário</button>
                </div>
                <div class="search-container">
                    <input type="search" name="search" id="search" placeholder="Buscar..."
                            v-model="pesquisa">
                </div>
    
            </form>
    </section>
    <section v-else>
            <Usuarios :loginUser="loginUser" :avatarUser="avatarUser"/>
    </section>
    </div>
</template>

<script>
    import Banner from './Banner.vue'
    import Usuarios from './Usuarios.vue'
    import axios from 'axios'

    export default {
        name: 'SearchForm',
        components: { Banner, Usuarios },
        data() {
            return {
                pesquisa: '',
                usuarios: [],  // sem uso ainda
                loginUser: 'ryanolv',
                avatarUser: 'https://avatars.githubusercontent.com/u/82781538?v=4',
                renderPage: false,
                usuarioSelecionadoId: null
            }
        },

        methods: {
            
            // Pesquisa usuarios com o valor do input
            searchUsuario(e) {
                
                e.preventDefault()

                const dataSearched = this.pesquisa
                console.log(dataSearched)

                this.getUsuarios(dataSearched)
                console.log(this.usuarios.length)

            },

            getUsuarios(user) {
                    axios.get(`https://api.github.com/search/users?q=${user}&page=1`)
                        .then(res => {
                            
                            const usersList = res.data.items
                            console.log(usersList)
                            this.usuarios = usersList
                        })
                        .catch(error => {
                            alert(error)
                        })
                    
                    
            },   
        },
}
</script>

<style scoped>
    #form-container {
        margin-top: 50px;
        padding: 10px;
    }

    .button-container {
        margin-bottom: 20px
    }

    .button-container button {
        margin-inline: 20.5px;
        width: 185px;
        height: 51px;
        font-size: 20px;
        font-weight: bold;
        background-color: #fff;
        border: 2px solid #000;
        border-radius: 5px;
        transition: .5s;
        cursor: pointer;
    }

    .button-container button:hover {
        background-color: #000;
        color: #fff;
    }

    .search-container {
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    .search-container input {
        border: 2px solid #000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        padding-left: 41px;
        width: 780px;
        height: 71px;
        font-size: 24px;
    }
</style>
