import Home from './src/components/Home .vue'
import Portfolio from './src/components/Portfolio.vue'
import Stock from './src/components/Stock.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/portfolio', component: Portfolio},
  {path: '/stocks', component: Stock}
]
