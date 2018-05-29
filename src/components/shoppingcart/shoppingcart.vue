<template>
  <div class="shoppingcart">
    <header class="head">
      <div class="head-content">
        <div  class="head-left">
          <a href="javascript:void(history.back());" class="head-left--back">
            <i class="icon-circle-left"></i>
          </a>
        </div>
        <div class="head-title">
          购物车
        </div>
       <div  class="head-right">
         <div class="head-right--part">
           <span class="header-edit">编辑</span>
           <a class="icon-bubbles2"></a>
         </div>
       </div>
     </div>
   </header>
   <div id="views">
     <section class="cart">
       <div class="cart-panel">
         <div class="ui-empty">
           <p class="ui-empty-icon">
             <i class="icon-cart"></i>
           </p>
           <p class="ui-empty-text">购物车还是空的哦～</p>
           <p class="ui-empty-btn">
             <a href="/classification" data-navigate="true" class="meili-all-vue-base-button primary">去逛逛</a>
           </p>
         </div>
       </div>
     </section>
   </div>
 </div>


</template>
const ERR_OK = 0
export default {
  props: {
  },
  data() {
    return {
      ratings: []
    }
  },
  methods: {
  },
  created() {
    this.$http.get('/api/ratings').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.ratings = response.data
      }
      console.log(this.ratings)
    })
  },
  components: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.head{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  border-bottom:1px solid #dedede;
}
.head-content{
  width:100%;
  height:80px;
  line-height:80px;
  text-align: center;
}
.head-left{
  float:left;
}
.head-title{
  text-align: center;
  font-size:40px;
}
.head-right{
  position: relative;
}
.head-right--part{
  position: absolute;
  right: 20px;
  top: -80px;
  width: 1.4rem;
}
.icon-bubbles2:before {
  content: "\e96d";
  font-size:40px;
}
.icon-circle-left:before {
    content: "\EA44";
    font-size:40px;
    margin-left:20px;
}
.icon-cart:before {
    content: "\E93A";
    font-size: 100px;
}

.ui-empty {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  -webkit-transform: translate(0,-50%);
  transform: translate(0,-50%)
}

.ui-empty-icon {
  display: inline-block;
  width: 220px;
  height: 220px;
  line-height: 300px;
  color: #fff;
  background: #ddd5d7;
  -webkit-border-radius: 50%;
  border-radius: 50%
}



.ui-empty-text {
  margin: 30px 0 10px
}

.ui-empty-btn .ui-btn {
  min-width: 80px
}
.primary {
    color: white;
    background: #ff5777;
  }
  .meili-all-vue-base-button{
    display: inline-block;
    box-sizing: border-box;
    font-size: 0.3rem;
    padding: 15px 15px;
    border-radius: 0.08rem;
    vertical-align: middle;
    margin: 0.08rem 0.12rem;
    cursor: pointer;
    min-width: 2rem;
    text-align: center;
}




</style>
