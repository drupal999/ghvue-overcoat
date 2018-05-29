<template>
  <div class="shopcart">
    <div class="logo_wapper">
        <!-- <input v-model='search' v-on:click="toggle()" class="nav-search" type="text" value="羊毛大衣" />
        <ul class="scontent" v-show="isShow">
        <li class="list"  v-for="item in searchData">{{item.name}}</li>
        </ul> -->
        <div class="inputSelect">
          <span class="icon icon-bubble"></span>
          <span class="fhz">
            <input class="nav-search" type="text" v-model="msgInput" @keyup="get($event)" @keydown.up.prevent="selectUp()"
            @keydown.down="selectDown()" @keydown.enter="search()">
            <span class="markDelete" @click="clearInput">x</span>
          </span>
          <span @click="cart()" class="tab-item icon-shop" to="/rank">
            <span class="icon-cart"></span>
            <div class="icon-circle">
              <span class="num">{{cartInfos.total_nums}}</span>
            </div>
          </span>
        </div>
        <div class="inputToggle">
          <transition-group tag="ul" name="fade" class="ulResult" mode="out-in" v-cloak>
            <li v-for="(item, index) in results" class="liStyle" :class="{selectback:index==now}"
            @mouseover="changeBack(index)" @click="msgChange(index)" :key="item">
            {{ item }}
          </li>
        </transition-group>
      </div>
    </div>
    <shopcartlist ref="shopcartlist"></shopcartlist>
  </div>
</template>
<script type="text/ecmascript-6">
import shopcartlist from 'components/shopcartlist/shopcartlist'
export default {
  props: {
    food: {
      type: Object
    }
    },
    data() {
        return {
            // search: '',
            isShow: false,
            msgInput: '',
            results: [],
            now: -1,
            logoIndex: 0,
            logoData: [
              {
                  name: '360搜索',
                  url: 'https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q='
                },
                {
                  name: '百度搜索',
                  url: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
                },
                {
                  name: '搜狗搜索',
                  url: 'https://www.sogou.com/web?query='
                }
              ]
            }
          },
            methods: {
              cart() {
                this.$refs.shopcartlist.show()
              },
              toggle() {
                this.isShow = !this.isShow
              },
              clearInput: function () {
                  this.msgInput = ''
                  this.results = ''
              },
              get: function (ev) {
                if (ev.keyCode === 38 || ev.keyCode === 40) {
                  return
                }
                this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.msgInput + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
                    this.results = res.data.s
                    this.now = -1
                  }
                )
              },
              selectDown: function () {
                this.now++
                if (this.now === this.results.length) {
                  this.now = 0
                }
                this.msgInput = this.results[this.now]
              },
              selectUp: function () {
                this.now--
                if (this.now === -1) {
                  this.now = this.results.length - 1
                }
                this.msgInput = this.results[this.now]
              },
              changeBack: function (index) {
                this.now = index
              },
              msgChange: function (index) {
                this.msgInput = this.results[index]
                window.open(this.logoData[this.logoIndex].url + this.msgInput)
              },
              changeSource: function (index) {
                this.logoIndex = index
              }
            },
            computed: {
              cartInfos() {
                  return this.$store.getters.getInfos
              },
              cartList() {
                return this.$store.getters.getCartList
              }
            //   searchData() {
            //     console.log(this.foods)
            //     var search = this.search
            //     var searchVal = ''
            //     if (search) {
            //       searchVal = this.cartList.filter(function(product) {
            //         return Object.keys(product).some(function(key) {
            //         return String(product[key]).toLowerCase().indexOf(search) > -1
            //       })
            //     })
            //     return searchVal
            //   }
            // }
          },
            components: {
                shopcartlist
            }
          }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.logo_wapper
  .icon-bubble
    width: 20px
    margin-left: 10px
    margin-right: 10px
  .fhz
    position:relative
  .nav-search
    width: 600px
    background: #dcdcdc
    font-size: 12px
    padding: 8px
  .markDelete
    position:absolute
    right:20px
    top:0
  .icon-shop
    position: relative
    .icon-circle
      position: absolute
      top: -35px
      right: 4px
      width: 36px
      height: 36px
      padding: 4px
      line-height: 42px
      text-align:center
      background-color:red
      border-radius: 50%
      -moz-border-radius: 50%
      -webkit-border-radius: 50%
    .icon-cart
      margin-left: 10px
      margin-right: 10px
  .inputToggle
    width:614px
    position:absolute
    left:66px
    overflow:auto
    .liStyle
      height:40px
      line-height:40px
      border-left:1px solid #dedede
      border-right:1px solid #dedede
      padding:10px 0px 10px 20px
      background:white
    .liStyle:last-child
      border-bottom:1px solid #dedede
      .liStyle:hover
        background:#dedede

</style>
