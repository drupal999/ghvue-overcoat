<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-minus" v-show="food.num>0" @click.stop.prevent="reduce_db(food)"></div>
    <div  class="cart-count" v-show="food.num>0">{{food.num}}</div>
    <div class="cart-add icon-plus" @click.stop.prevent="add_db(food)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    computed: {
        cartList() {
          return this.$store.getters.getCartList
        }
    },
    methods: {
      add_db(shop) {
        var id = shop.id
        this.$store.dispatch('check_db', {
            id
        })
        if (this.$store.state.cart.curIndex !== -1) {
            console.log('add_db')
            this.$store.dispatch('add_db')
        } else {
            console.log('create_db')
            this.$set(shop, 'num', 1)
            this.$store.dispatch('create_db', {
                shop
            })
        }
      },
      reduce_db(shop) {
          var id = shop.id
          this.$store.dispatch('check_db', {
              id
          })
          shop.num = parseInt(shop.num)
          this.$store.dispatch('reduce_db')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 12px
      font-size: 24px
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 12px
      line-height: 24px
      text-align: center
      font-size: 30px
      padding: 12px
    .cart-add
      display: inline-block
      padding: 12px
      line-height: 24px
      font-size: 24px
</style>
