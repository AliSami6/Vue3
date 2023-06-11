<template>
    <div>
        <h1>Customer Page</h1> 
        <hr>
        <button class="btn btn-sm btn-success" @click="navigateToHome">Go to home</button>
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
