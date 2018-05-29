import 'babel-polyfill'
/* 就是ie9和一些低版本的高级浏览器对es6新语法并不支持 通过babel-polyfill插件解决 一定要写在最前面 */
import fastclick from 'fastclick'
/* fastclick解决点击事件延迟的问题 */
import 'lib-flexible'
/* lib-flexible屏幕自适应 */
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import 'common/stylus/index.styl'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueJsonp from 'vue-jsonp'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)
Vue.use(VueJsonp)
Vue.use(infiniteScroll)
/* eslint-disable no-new */
// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)
Vue.use(VueResource)
fastclick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
router.push('goods')
