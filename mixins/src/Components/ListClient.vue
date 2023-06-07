<template>
    <div class="container">
     <p>{{ text }}</p>
     <ul>
      <li v-for="car in cars" :key="car">
        {{ car }}
      </li>
     </ul>
       
    </div>
</template>
<script>
import { carMixin } from './mixins';
export default{
    data(){
        return {
         // text : "hello world"
       
        }
    },
    mixins: [carMixin]
}
</script>
<style scoped>
ul li{
  list-style: none;
}
</style>
