<template>
  <div class="container">
    <p class="text-center mt-4"> {{txt | uppercase }}</p>
     <!--
      <table>
    <thead>
      <th v-for="col in cols" :key="col">
        {{col | uppercase}}
      </th>
    </thead>
  </table>-->

  </div>
  
</template>
<script>


export default ({
  data(){
    return {
   txt: "Adnan Sami"
  //  cols: ['nome', 'data', 'size', 'ext']
    }
  },
  filters :{
   uppercase: function(v) {
      return v.toUpperCase();
    },
    removeText(value){
      return value.slice(1);
    }

  }
})
</script>
<style>
  .appear-enter{
    opacity:0;
    transform: translateX(30px);
  }
  .appear-enter-active{
    transition: all .3s ease;
  }
  .appear-leave{

  }
  .appear-leave-active{
    opacity:0;
    transform: translateX(30px);
     transition: all .3s ease;
  }
  button{
    border-radius: 50%;
  }
</style>
