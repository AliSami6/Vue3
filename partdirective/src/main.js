import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('any',{
  bind(el,binding){
    el.innerHTML = binding.value
    if(binding.modifiers.blue){
      el.style.color = 'blue'
    }
    if(binding.modifiers.red){
      el.style.color = 'red'
    }
     if(binding.modifiers.big){
      el.style.fontSize = '30px'
    }
      if(binding.modifiers.small){
      el.style.fontSize = '15px'
    }
    
  
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
