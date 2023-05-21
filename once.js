new Vue({
    el:"#app",
    data : {
       name : 'Tata'
    },
    methods:{
      update(){
        setTimeout(()=>{
           this.name = 'Good Bye'
        },2000);
      }
    }
})