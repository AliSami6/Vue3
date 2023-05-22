Vue.component('name',{
  data(){
    return {
      name : 'adnan'
    }
  },
  template : `<p>{{name}}</p>`
});

new Vue({
  el:  "#app",
});