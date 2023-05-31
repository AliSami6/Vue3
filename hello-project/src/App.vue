<template>
    <div class="container">
      <div class="row">
        <comListhelper>
          <ul slot="listItem">
            <li v-for="li in list" :key="li">
              {{li}}
            </li>
          </ul>
          <p slot="para"> this is a paragraph</p>
          <p :slot="loader">See you again</p>
        </comListhelper>
        <comListForms>
          this is form
        </comListForms>
      </div>
    </div>
</template>
<script>
import comListhelper from './Components/ListHelper'
import comListForms from './Components/ListFormsHelper'
export default{
  data(){
    return {
      list : ['HTML','CSS','Javascript'],
      loader : ''
    }
  },
  components :{
    comListhelper,
    comListForms
  },
  created(){
    setTimeout(()=>{
      this.loader = 'other';
    },5000)
  }
}
</script>
<style>
 ul li{
  list-style: none;
 }
</style>