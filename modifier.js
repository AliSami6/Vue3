new Vue({
    el:"#app",
    data: {
      name : 'A'
    },
    methods:{
        updateName(newname,event){
          this.name = newname;
          console.log(event);
        },
        handleForm(){
           console.log("submit form");
        }

    }
})