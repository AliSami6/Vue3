<template>
  <div class="container">
     <compClient/>
     <compUsers/>
  </div>
</template>
<script>
import compClient from './Components/ListClient'
import compUsers from './Components/ListUsers'

export default ({
  data(){
    return {
     
    }
  },
  components:{
    compClient,
    compUsers
  }
})
</script>
<style>
 
</style>
