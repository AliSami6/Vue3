new Vue({
  el:  "#app",
  data : {
    name : 'Adnan'
  },
  methods:{
    updateName(){
       return this.name = 'Adnan Sami'
    },
    kill(){
       this.$destroy();
    }
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
  beforeUpdate() {
    console.log('before updated');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('before destroy');
  },
  destroyed(){
    console.log('destroyed');
  }

});