<template>
    <ul class="nav nav-pills bg-primary">
        
            <router-link  active-class="active"  exact  style="cursor:pointer" tag="li" class="nav-item text-white nav-link" to="/">Home</router-link>
             <router-link active-class="active"  exact  style="cursor:pointer" tag="li" class="nav-item text-white nav-link" to="/customer">Customer </router-link>
             <router-link active-class="active"  exact  style="cursor:pointer" tag="li" class="nav-item text-white nav-link" to="/about">About</router-link>
    
      
    </ul>
</template>
<style scoped>
ul,li.nav-item{
    color:#fff;
}
ul,li.active{
    color:red!important;
}
</style>