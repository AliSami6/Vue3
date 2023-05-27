<template>
    <div>
      
      <p>First Name : {{ Fname }}</p>
      <p>Last Name : {{ Lname }}</p>
      <p>Age  : {{ YourAge }}</p>
      <button @click="updateName">click me</button>
    </div>
</template>
<script >


export default ({
   
     props : {
       Fname: String,
       Lname : String,
       YourAge : Number
      },
      methods: {
         updateName(){
           // this.Fname = "Adnan";
           this.$emit('updateValue','Adnan');
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
