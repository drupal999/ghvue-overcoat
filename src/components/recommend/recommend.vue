<template>
  <div class="recommend">
    <m-header :seller="seller"></m-header>
    <div class="slider-wrapper">
      <slider :seller="seller"></slider>
    </div>
    <div class="list_description">
      <img width="57" height="57" :src="seller.descriptionimg"></img>
    </div>
    <div class="loaderwrap">
      <v-loadmore :bottom-all-loaded="allLoaded"  :autoFill='false' :topMethod='loadagin' :bottomMethod='loadbottom' ref='loadmore'>
        <div class="foods-wrapper" ref="foodsWrapper">
          <ul class="ulwrap">
            <li @click="selectFood(food,$event)" v-for="(food,index) in result.items" class="food-item border-1px">
              <div class="iconimg">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </v-loadmore>
    </div>
  <food :food="selectedFood" ref="food"></food>
</div>
</template>
<script type="text/ecmascript-6">
// import  'mint-ui/lib/style.css'
import MHeader from 'components/m-header/m-header'
import food from 'components/food/food'
import slider from 'base/slider/slider'
// import cartcontrol from 'components/cartcontrol/cartcontrol'
import loadmore from 'mint-ui/lib/loadmore'
const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      result: [],
      selectedFood: {},
      items: null,
      allLoaded: false
    }
  },
  methods: {
    selectFood(food, event) {
      this.selectedFood = food
      this.$refs.food.show()
    },
    loadagin() {
      var that = this
      setTimeout(function() {
        that.$refs.loadmore.onTopLoaded()
      }, 20000)
    },
    loadbottom() {
      this.$nextTick(function () {
        this.scrollMode = 'touch'
      })
      var that = this
      setTimeout(function() {
      that.result.items = that.result.items.concat(that.result.items)
      // console.log(that.result.items)
        that.$refs.loadmore.onBottomLoaded()
      }, 2000)
    },
    goback() {
      this.$router.go(-1)
    }
  },
  created() {
    this.$http.get('/api/result').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.result = response.data
      }
      // this.items = this.result
      // console.log(this.result.items[1])
      // console.log(this.result.items[1])
    })
  },
  components: {
    slider,
    food,
    'v-loadmore': loadmore,
    MHeader
  }
}
</script>

<style>
  .recommend{
    width: 100%
  }
  .list_description{
    width:100%;
    height:100px;
  }
  .list_description img{
    width: 100%;
    height: 100%;
  }
  .loaderwrap{
    overflow: hidden;
    position: absolute;
    padding-bottom: 120px;
    top:7rem;
    width:100%;
  }
  .ulwrap{
    overflow: scroll;
    width:100%;
    /* padding-bottom: 120px; */
  }
  .ulwrap li{
    float: left;
    width:40%;
    margin-left: 7%;
  }
  .iconimg{
    width:300px;
    height: 300px;
  }
  .iconimg img{
    width:100%;
    height: 100%;
  }
  .content{

  }
  .name{
    margin-top: 20px;
  }
  .price{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .mint-loadmore-bottom{
    clear:both
  }







































</style>
