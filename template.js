const temp = `<p>Hi {{name}}</p>`;
const app1 = new Vue({
   
    data : {
      name : 'Sadi'
    },
    template: temp
  
});

setTimeout(()=>{
   app1.$mount('#app')
},2000);