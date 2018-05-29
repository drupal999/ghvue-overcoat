import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Classification from 'components/classification/classification'
import Shoppingcart from 'components/shoppingcart/shoppingcart'
import My from 'components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'My'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/shoppingcart',
      component: Shoppingcart
    },
    {
      path: '/my',
      component: My
    }
  ]
})
