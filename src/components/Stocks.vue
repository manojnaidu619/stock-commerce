<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-6 col-md-4" v-for="stock in stocks">
        <div class="card text-black mb-3" style="max-width: 18rem;" >
          <div class="card-body">
            <h5 class="card-title">{{stock.name}}<small>(price:{{stock.price}})</small></h5>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter Price" aria-label="Recipient's username" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn" type="button">Buy!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
