<template>
    <div id="list-container">
        <div class="row-container">
            <h1>Title 1</h1>
            <p>description 1</p>
            <p>x stars</p>
        </div>
        <div class="row-container">
            <h1>Title 2</h1>
            <p>description 2</p>
            <p>y stars</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Favoritos'
    }
</script>

<style scoped>
    #list-container {
        margin: 10px;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
    }

    .row-container {
        margin: 0;
        text-align: left;
        border-bottom: 1px solid #222;
        transform: rotate(-0.08deg);
        margin-bottom: 15px;
    }
</style>