<template>
    <div class="container">
        <button @click="componentToRender='compHome'">Home</button>
         <button @click="componentToRender='compAbout'">About</button>
          <button @click="componentToRender='compContact'">Contact</button>
          <keep-alive>
                <component :is="componentToRender"></component>
          </keep-alive>
    
    </div>
</template>

<script>
    import compHome from './Components/HomePages.vue'
    import compAbout from './Components/AboutPages.vue' 
    import compContact from './Components/ContanctPages.vue'
    export default {
      data(){
        return {
         componentToRender:'compHome'
        }
      },
      components:{
        compHome,
        compAbout,
        compContact
      }
     
    }
</script>

<style>

 </style>