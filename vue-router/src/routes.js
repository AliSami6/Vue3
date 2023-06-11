import compHome from './components/HomePage.vue'
import compCustomer from './components/Customers/CustomerPage.vue'

export const routes = [
  {
    path :'',
    component: compHome
  },
  {
    path : '/customer',
    component: compCustomer
  }
];