import compHome from './components/HomePage.vue'
import compCustomer from './components/Customers/CustomerPage.vue'
import compCustomerStart from './components/Customers/CustomerStart.vue'
import compCustomerList from './components/Customers/CustomerList.vue'
import compCustomerEdit from './components/Customers/CustomerEdit.vue'
export const routes = [
  {
    path :'',
    component: compHome
  },
  {
    path : '/customer',
    component: compCustomer,
    children :[
      {
        path :'',
        component: compCustomerStart
      },
      {
        path :':id',
        component: compCustomerList
      },
      {
        path :':id/edit',
        component: compCustomerEdit
      }
    ]
  }
];