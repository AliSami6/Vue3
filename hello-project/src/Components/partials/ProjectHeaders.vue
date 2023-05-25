<template>
    <div>
       new Header
      <ul>
         <li v-for="stu in myStudents" :key="stu">
            {{stu}}
         </li>
      </ul>
    </div>
</template>
<script >


export default ({
   
     props : {
       myStudents : {
         type : Array,
         required : true
       }
      }
  
})
</script>

<style scoped>
 div{
    color: red;
   
 }
 div,ul,li{
    list-style: none;
 }
</style>
