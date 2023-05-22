new Vue({
  el:  "#app",
  data : {
    name : 'Adnan'
  },
  beforeCreate() {
    console.log('Running before create');
  },
  created(){
     console.log('Running created');
  },
  beforeMount() {
    console.log('Running before mount');
  },
  mounted() {
    console.log('mounted');
  },
});