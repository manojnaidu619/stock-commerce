<template lang="html">
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: LightGoldenRodYellow;">
    <router-link to="/" class="navbar-brand"><b>Stock-Commerce</b></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/portfolio" class="btn">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="btn">Stocks</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .container{
    margin-top:40px;
  }
  .nav-item{
    margin:5px;
  }
  .navbar{
    border-radius: 20px;
  }
  .btn:focus{
    box-shadow: none;
    border: 1.5px dashed orange;
  }
</style>
