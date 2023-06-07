<template>
    <div class="container">
        <p>{{ mdg }}</p>
        <ul>
            <li v-for="user in users" :key="user">
                   {{ user }}
            </li>
        </ul>
       
    </div>
   
</template>
<script>
export default{
    data(){
        return {
          mdg : 'hi',
          users : ['nomita','don','parul','fariya','fahim']
        }
    }
}
</script>
<style scoped>
ul li{
    color:red;
    list-style: none;
}
p{
    color:blue;
}
</style>