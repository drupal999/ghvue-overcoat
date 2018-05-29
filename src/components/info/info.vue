<template>
  <div class="info">
      <div class="operation" @click='clear_db'>
        <span class="clear">清空购物车</span>
      </div>
      <div class="infolist">
          <span class='itemtotal'>总数：<strong>{{cartInfos.total_nums}}</strong></span>
          <span class='itempirce'>总价：<strong>{{cartInfos.total_price}}</strong></span>
          <span class="settle"><button class="balance">结算</button></span>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  computed: {
      cartInfos() {
          return this.$store.getters.getInfos
      }
  },
  methods: {
      clear_db() {
          this.$store.dispatch('clear_local')
      }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.info
  .operation
    width:100%
    height:40px
    border-bottom:1px solid #dedede
    position:absolute
    top:100px
    .clear
      margin-left:40px
  .infolist
    width:100%
    height:60px
    line-height:60px
    background:#dedede
    position:fixed
    bottom: 124px
    .itemtotal
      margin-left:40px
    .settle
      .balance
        color:black
        float:right
        margin-right:20px
        height:44px
        margin-top:8px
        text-align:center
        font-size:12px

</style>
