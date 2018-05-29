<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-wrap" v-for="(item, index) in seller.pics"><img :src="item" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
   </div>
</template>
<script type="text/ecmascript-6">
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          keyboard: {
            enabled: true
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.slider
  width: 100%
 .swiper-wrap
   width: 100%
   height: 320px
   img
     width: 100%
</style>
