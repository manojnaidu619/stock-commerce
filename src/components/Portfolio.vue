<template lang="html">
    <div class="col-sm-6 col-md-4">
      <div class="card text-black mb-3" style="max-width: 18rem;" >
        <div class="card-body">
          <h5 class="card-title">{{stock.name}}<small>(price:{{stock.price}} | Quantity: {{stock.quantity }})</small></h5>
          <div class="input-group mb-3">
            <input type="number" class="form-control" v-model="quantity" placeholder="Enter Price" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn" @click="sell()" :disabled="quantity <= 0" type="button">Sell!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  props: ['stock'],
  data(){
    return {
      quantity: ''
    }
  },
  methods: {
    sell(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStock', order)
    }
  }
 }
</script>

<style lang="css" scoped>
.container{
  margin-top:50px;
}
.card{
  background-color: Lavender;
}
.form-control:focus{
  outline: 0 !important;
  box-shadow: none;
}
.btn{
  background-color: Chartreuse;
}
</style>
