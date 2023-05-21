new Vue({
    el:"#app",// 2 way binding
    data: {
      formData: {
        firstName : '',
        lastName  : ''
      }
    },
    methods:{
      
        handleForm(){
           console.log(this.formData);
        }

    }
})