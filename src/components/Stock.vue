<template lang="html">
  <div class="row">
    <div class="col-sm-6 col-md-4">
      <div class="card text-black mb-3" style="max-width: 18rem;" >
        <div class="card-body">
          <h5 class="card-title">{{stock.name}}<small>(price:{{stock.price}})</small></h5>
          <div class="input-group mb-3">
            <input type="number" class="form-control" v-model="quantity" placeholder="Enter Price" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn" type="button">Buy!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data(){
    return {
      quantity: ''
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
