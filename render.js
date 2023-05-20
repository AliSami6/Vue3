new Vue({
   el: "#app",
   data: {
    user: "A",
    userAge: 12,
    allowedAge: 18
   },
   methods:{
     changeUser(){
        return this.user==="A" ? true : false;
     }
   }
});