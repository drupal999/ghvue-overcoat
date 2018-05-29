<template>
  <div class="cart" ref='cart'>
    <div class="wrapper">
      <div class="cartList" v-for='(cart,index) in cartList'>
          <div class="info">
            <div class="icon">
              <img width="57" height="57" :src="cart.icon">
            </div>
            <span class="name">{{cart.name}}</span>
            <div class="result">
              <div class="cz">
                <span @click='action_cart(index,"reduce_db")' class="btn btn-warning">-</span>
                <span>{{cart.num}}</span>
                <span @click='action_cart(index,"add_db")' class="btn btn-info">+</span>
              </div>
              <span @click='action_cart(index,"delete_db")' class="delete" title='删除'>x</span>
            </div>
            <span class="price">{{cart.price}}</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  computed: {
      cartList() {
        return this.$store.getters.getCartList
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.cart, {
      click: true
    })
},
  methods: {
      /**
       * 购物车加减删操作
       * @param  {number} index 当前操作的索引
       * @param  {string} type  对应的mutations值
       * @param  {string} type=add_db  增加
       * @param  {string} type=reduce_db  减少
       * @param  {string} type=delete_db  删除
       */
      action_cart(index, type) {
          this.$store.dispatch('update_cur_shop_status', {
              index
          })
          this.$store.dispatch(type)
      }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.cart
  height:1200px
  width:100%
  margin-top: 60px
  .wrapper
    .cartList
      display:flex
      .info
        // height: 2000px
        margin-left:40px
        margin-top:40px
        .icon
          float:left
        .name
          float:left
          width:540px
          margin-left:40px
        .result
          .cz
            float:left
            margin-left: 40px
            margin-top:20px
          .delete
            margin-top:60px
            float:right
            margin-right:10px
          .btn-danger
            float:right
        .price
          float:right
          margin-top:20px














</style>
