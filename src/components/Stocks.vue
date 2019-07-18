<template lang="html">
  <div class="container row">
    <my-stock v-for="stock in stocks" :stock="stock"></my-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  components: {
    'my-stock' : Stock
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks
    }
  }
 }
</script>

<style lang="css" scoped>
.container{
  margin-top: 30px;
}
</style>
