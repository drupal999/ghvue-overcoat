<template>
  <div class="m-header">
    <div class="icon" @click="showDetail"></div>
    <h1 class="text">{{seller.name}}</h1>
    <!-- 弹出层 -->
    <div v-show="detailShow" class="detail" transition="fade">
        <div class="title">
          优惠券
        </div>
        <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item,index) in seller.supports">
              <div class="yhj">
                <p class="price">
                  {{seller.supports[index].price}}
                </p>
                <p class="mjprice">{{seller.supports[index].mjprice}}</p>
              </div>
              <p class="text">{{seller.supports[index].description}}</p>
            </li>
          </ul>
          <div class="detail-close" @click="hideDetail">
            <i class="icon-cross"></i>
          </div>
        </div>
      </div>
    <!-- 弹出层 -->
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail() {
        this.detailShow = true
      },
      hideDetail() {
        this.detailShow = false
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    width: 100%
    position: relative
    height: 88px
    text-align: center
    color: $color-theme
    font-size: 30px
    .text
      display: inline-block
      vertical-align: top
      line-height: 88px
      font-size: 30px
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 12px
      width: 60px
      height: 64px
      margin-right: 18px
      bg-image('logo')
      background-size: 60px 64px
    .support-item
      display: flex
      margin-top: 60px
      margin-left: 20px
      .text
        margin-left: 20px
        height: 120px
        line-height: 120px
        font-size: 14px
        // color: #8f8f8f
      .yhj
        width: 300px
        background: #5087d6
        height: 80px
        padding: 20px
        float: left;
        .price
          color: #fff
          font-size: 24px
          height: 40px
          line-height: 40px
        .mjprice
          color: #fff
          font-size: 14px
          height: 40px
          line-height: 40px


    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      transition: all 0.5s
      background: black
      opacity: .8
      .title
        margin-top: 30px
      .detail-close
          width: 64px
          height: 64px
          margin: 0 auto
          clear: both
          font-size: 40px
          margin-top: 100px





</style>
