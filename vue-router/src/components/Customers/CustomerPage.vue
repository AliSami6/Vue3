<template>
    <div>
        <h2>Customer Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia eaque, 
            nemo quibusdam ipsum nobis qui eos porro aut, saepe assumenda doloribus placeat 
            ullam iusto non corporis aperiam quos. Illum.</p>                           
        <hr>
           <button class="btn btn-sm btn-success" @click="navigateToHome">Go to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
   
    methods:{
       navigateToHome(){
        this.$router.push({name:'home'})
       } 
    },
}
</script>
