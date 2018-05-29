<template>
  <div v-show='showFlag' class="shopcartlist" transition="fold">
    <div class="header">
      <span class="back" @click.stop.prevent="hide()">
        <span class="icon-circle-left"></span>
      </span>
      <span class="info">购物车</span>
    </div>
    <cart></cart>
    <info></info>
  </div>
</template>
<script type="text/ecmascript-6">
import cart from 'components/cart/cart'
import info from 'components/info/info'
export default {
  props: {
    },
    created() {
    },
    data() {
        return {
            showFlag: false
        }
    },
    methods: {
        show() {
          this.showFlag = true
        },
        hide() {
          this.showFlag = false
        }
    },
    components: {
      cart,
      info
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shopcartlist
  position:fixed
  left:0
  top:0
  z-index:30
  background:#fff
  width:100%
  .header
    line-height:80px
    height:80px
    text-align:center
    border-bottom:1px solid #dedede
    .info
      line-height:80px
      height:80px
      font-size:40px
    .back
      .icon-circle-left
        float:left
        line-height:80px
        height:80px
        font-size:40px
        margin-left:40px
</style>
