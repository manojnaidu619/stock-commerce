<template lang="html">
  <div class="container">
    <my-stock v-for="stock in stocks" :stock="stock"></my-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  data(){
    return{
      stocks: [
        {id:1, name:'BMW', price:110},
        {id:2, name:'Apple', price:100},
        {id:3, name:'Facebook', price:90},
        {id:4, name:'Tesla', price:105},
        {id:5, name:'NASA', price:120},
        {id:6, name:'Amazon', price:85}
      ]
    }
  },
  components: {
    'my-stock' : Stock
  }
 }
</script>

<style lang="css" scoped>
</style>
