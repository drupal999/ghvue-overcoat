<template>
  <div class="slider">
    <carousel :indicators="true" :auto="3000">
      <ul v-for="i in 3">
        <li v-for="(item, index) in seller.pics">
          <img :src="item" width="57" height="57"/>
        </li>
      </ul>
    </carousel>
  </div>
</template>

<script type="text/ecmascript-6">
import Carousel from 'vue-m-carousel'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {
      Carousel
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
</style>
