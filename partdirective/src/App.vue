<template>
  <div class="container">
    <div v-any.red.big="'Hi sami'"></div>
    <div v-any.blue.small="'Hi sami'"></div>
    <hr>
    <div v-user="'I am 27 years old'"></div>
  </div>
</template>

<script>

export default {
 directives :{
  'user' : {
    bind(el,binding){
      el.innerHTML = binding.value
    }
  }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
