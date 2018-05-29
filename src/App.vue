<template>
<div id="app">
  <!-- <m-header :seller="seller"></m-header> -->
  <router-view :seller="seller"></router-view>
  <tab></tab>
</div>
</template>
<script text='text/ecmascript-6'>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
/* 也可以./components/m-header/m-header ./为当前路径 上边那么写是因为在配置中配置好了文件路径 */
const ERR_OK = 0
export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      this.seller = response.data
      // console.log(this.seller)
      if (response.errno === ERR_OK) {
        this.seller = response.data
        // console.log(this.seller)
      }
    })
  },
  components: {
    MHeader,
    Tab
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
#app
 width: 100%
 margin: 0 auto
 color: #9a9a9a
</style>
