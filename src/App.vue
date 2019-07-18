<template>
  <div id="app" class="container">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    'my-header' : Header
  },
  created(){
    this.$store.dispatch('initStocks')
  }
}
</script>

<style scoped>
</style>
