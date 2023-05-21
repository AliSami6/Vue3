const app11 = new Vue({
  el:"#app1",
  data : {
    value : '1st'
  },
  methods:{
    changeValue(){
       app12.value = 'changed';
     }
  },
   
});

const app12 = new Vue({
  el:"#app2",
  data : {
    value : '2nd'
  },
   
});