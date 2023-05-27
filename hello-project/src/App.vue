<template>
  <div>
      <app-header 
       :Fname="fName"
       :Lname="lName"
       :YourAge="myAge"
       @updateValue="fName=$event"
      />
    <app-footer/>
   
</div>

</template>
<script>
import Header from './Components/partials/ProjectHeaders.vue'
import Footer from './Components/partials/ProjectFooters.vue'
export default {
  data() {
    return {
      fName : 'Ali ',
      lName : "Sami",
      myAge : 25
    }
  },
  components: {
   'app-header' : Header,
   'app-footer' : Footer
  }
}
</script>

 <style>
      body{
        font-family: 'Roboto', sans-serif;
      }
      #app{
        padding-left:10px;
      }
    </style>