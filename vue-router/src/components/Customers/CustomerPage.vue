<template>
    <div>
        <h2>Customer Page</h2>
       
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
        this.$router.push('/')
       } 
    },
}
</script>
