<template>
  <div v-show='showFlag' class="food" ref='food'>
    <div class="food-content">
      <div class="back" @click="hide">
        <div class="icon-circle-left"></div>
      </div>
      <div class="content">
        <div class="icon">
          <img width="57" height="57" :src="food.icon">
        </div>
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
        </div>
        <div class="buy" @click.stop.prevent="add_db(food)" v-show="!food.num">加入购物车</div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
      </div>
      <div class="shoptotal">
        <span class="goodsgs">已选商品 {{cartInfos.total_nums}} 件</span>
        <span class="zjg">总计：￥{{cartInfos.total_price}}</span>
        <a href="" class="js">结算</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import cartcontrol from 'components/cartcontrol/cartcontrol'
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    computed: {
      cartList() {
        return this.$store.getters.getCartList
      },
      cartInfos() {
          return this.$store.getters.getInfos
      }
    },
    methods: {
      show() {
        this.showFlag = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide() {
        this.showFlag = false
      },
    add_db(shop) {
      var id = shop.id
      this.$store.dispatch('check_db', {
          id
      })
      if (this.$store.state.cart.curIndex !== -1) {
          this.$store.dispatch('add_db')
      } else {
          console.log('create_db')
          this.$set(shop, 'num', 1)
          this.$store.dispatch('create_db', {
              shop
          })
      }
    }
    },
    components: {
      cartcontrol
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    .food-content
      .content
        height:1400px
      .back
        position:absolute
        top:40px
        left:40px
        font-size:46px
        color:#fff
        .icon-circle-left:before
          content: "\ea44"

      .title
        font-size:28px
        line-height:28px
        color:#07111b
        margin-top:30px
        margin-left:40px
      .buy
        position: absolute
        right: 18px
        z-index: 10
        height: 48px
        line-height: 48px
        padding: 0 32px
        box-sizing: border-box
        border-radius:24px
        font-size: 20px
        color: #fff
        background: rgb(0, 160, 220)
        &.fade-transition
          transition: all 0.2s
          opacity: 1
        &.fade-enter, &.fade-leave
          opacity: 0
      .cartcontrol-wrapper
        float:right
        margin-right:40px
      .price
        color:#f01414
        font-size:28px
        margin-top:36px
        margin-left:40px
      .info
        .title
          margin-left:40px
        .text
          margin-left:40px
          margin-top:20px
      .shoptotal
        display:flex
        width: 100%
        height: 80px
        position: fixed
        background: #e5e5e5
        line-height: 80px
        bottom:190px
        .goodsgs
          width:40%
          margin-left:40px
        .zjg
          width:40%
          margin-left:100px
        .js
          width:20%
          height: 80px
          line-height: 80px
          text-align: center
          background: #B0B0B0
          border-radius: 6px
          display: inline-block
          color: #fff
          float: right




      .detail
        margin-top:10px
        .sell-count
          margin-left:40px
        .rating
          margin-left:40px


      .icon
        width:750px
        height:800px
        img
         width:100%
         height:100%


  // .food
  //   position: fixed
  //   left: 0
  //   top: 0
  //   bottom: 48px
  //   z-index: 30
  //   width: 100%
  //   background: #fff
  //   &.move-transition
  //     transition: all 0.2s linear
  //     transform: translate3d(0, 0, 0)
  //   &.move-enter, &.move-leave
  //     transform: translate3d(100%, 0, 0)
  //   .image-header
  //     position: relative
  //     width: 100%
  //     height: 0
  //     padding-top: 100%
  //     img
  //       position: absolute
  //       top: 0
  //       left: 0
  //       width: 100%
  //       height: 100%
  //     .back
  //       position: absolute
  //       top: 10px
  //       left: 0
  //       .icon-arrow_lift
  //         display: block
  //         padding: 10px
  //         font-size: 20px
  //         color: #fff
  //
  //   .content
  //     position: relative
  //     padding: 18px
  //     .title
  //       line-height: 14px
  //       margin-bottom: 8px
  //       font-size: 14px
  //       font-weight: 700
  //       color: rgb(7, 17, 27)
  //     .detail
  //       margin-bottom: 18px
  //       line-height: 10px
  //       height: 10px
  //       font-size: 0
  //       .sell-count, .rating
  //         font-size: 10px
  //         color: rgb(147, 153, 159)
  //       .sell-count
  //         margin-right: 12px
  //     .price
  //       font-weight: 700
  //       line-height: 24px
  //       .now
  //         margin-right: 8px
  //         font-size: 14px
  //         color: rgb(240, 20, 20)
  //       .old
  //         text-decoration: line-through
  //         font-size: 10px
  //         color: rgb(147, 153, 159)
  //     .cartcontrol-wrapper
  //       position: absolute
  //       right: 12px
  //       bottom: 12px
  //     .buy
  //       position: absolute
  //       right: 18px
  //       bottom: 18px
  //       z-index: 10
  //       height: 24px
  //       line-height: 24px
  //       padding: 0 12px
  //       box-sizing: border-box
  //       border-radius: 12px
  //       font-size: 10px
  //       color: #fff
  //       background: rgb(0, 160, 220)
  //       &.fade-transition
  //         transition: all 0.2s
  //         opacity: 1
  //       &.fade-enter, &.fade-leave
  //         opacity: 0
  //   .info
  //     padding: 18px
  //     .title
  //       line-height: 14px
  //       margin-bottom: 6px
  //       font-size: 14px
  //       color: rgb(7, 17, 27)
  //     .text
  //       line-height: 24px
  //       padding: 0 8px
  //       font-size: 12px
  //       color: rgb(77, 85, 93)
  //   .rating
  //     padding-top: 18px
  //     .title
  //       line-height: 14px
  //       margin-left: 18px
  //       font-size: 14px
  //       color: rgb(7, 17, 27)
  //     .rating-wrapper
  //       padding: 0 18px
  //       .rating-item
  //         position: relative
  //         padding: 16px 0
  //         border-1px(rgba(7, 17, 27, 0.1))
  //         .user
  //           position: absolute
  //           right: 0
  //           top: 16px
  //           line-height: 12px
  //           font-size: 0
  //           .name
  //             display: inline-block
  //             margin-right: 6px
  //             vertical-align: top
  //             font-size: 10px
  //             color: rgb(147, 153, 159)
  //           .avatar
  //             border-radius: 50%
  //         .time
  //           margin-bottom: 6px
  //           line-height: 12px
  //           font-size: 10px
  //           color: rgb(147, 153, 159)
  //         .text
  //           line-height: 16px
  //           font-size: 12px
  //           color: rgb(7, 17, 27)
  //           .icon-thumb_up, .icon-thumb_down
  //             margin-right: 4px
  //             line-height: 16px
  //             font-size: 12px
  //           .icon-thumb_up
  //             color: rgb(0, 160, 220)
  //           .icon-thumb_down
  //             color: rgb(147, 153, 159)
  //
  //       .no-rating
  //         padding: 16px 0
  //         font-size: 12px
  //         color: rgb(147, 153, 159)
</style>
