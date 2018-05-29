<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <div class="icon-home"></div>
      <div class="tab-link">推荐</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/classification">
      <div class="icon-command"></div>
      <div class="tab-link">分类</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/shoppingcart">
      <div class="icon-cart"></div>
      <div class="tab-link">购物车
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/my">
      <div class="icon-user"></div>
      <div class="tab-link">我的</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  // @import "~common/stylus/variable"
  .tab
    position: fixed
    bottom: 0
    width: 100%
    border-top: 1px solid #eee
    display: flex
    height: 100px
    padding-top:24px
    background: white
    z-index:99
    .tab-link
      margin-top: 10px
      font-size: 16px
    .tab-item
      flex: 1
      text-align: center
      font-size: .7rem




</style>
