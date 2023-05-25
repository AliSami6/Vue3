<template>
  <div>
      <app-header :myStudents="students"/>
    <app-footer/>
    <p>{{name}}</p>
  <p>{{age}}</p>

</div>

</template>
<script>
import Header from './Components/partials/ProjectHeaders.vue'
import Footer from './Components/partials/ProjectFooters.vue'
export default {
  data() {
    return {
      students : ["Sahib","kamran","Imran","Tanisha"],
      name : "Sami",
      age : 27
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