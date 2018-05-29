<template>
  <div class="my ui-app with-header">

		 <div id="views">
		 	<div class="wrap">

		 		<!--用户信息-->
		 		<header class="hd">
			 		<div class="avaterbox">
				 		<div class="r r1">
					 		<div class="r r2">
						 		<div class="r r3">
							 		<div class="r r4">
							 			<img src="http://s22.mogucdn.com/p1/160511/upload_ifrdsmjqgm2wcnjxhazdambqmeyde_40x40.jpg_100x100.jpg" alt="" class="avater">
							 		</div>
						 		</div>
					 		</div>
				 		</div>
			 		</div>
			 		<div class="namecard">
				 		<h2 class="tt">aNdy200509<span class="lv lv0"></span></h2>
				 		<p class="subtt"><span class="mbean">蘑豆 0</span> <span class="coupon">现金券 0</span></p>
			 		</div>
		 		</header>

		 		<!--全部订单-->
		 		<ul class="modlist mb15 nobdt hasarrow">
		 			<li><a href="../trade/order/list?orderStatus=all">全部订单</a></li>
		 			<li class="operate clearfix">
		 				<a href="../trade/order/list?orderStatus=created" class="ic"><span class="icon icon-pay"></span>待付款</a>
		 				<a href="../trade/order/list?orderStatus=unshipped_and_unreceived" class="ic"><span class="icon ic-truck icon-truck"></span>待收货</a>
		 				<a href="../trade/order/list?orderStatus=received_and_completed" class="ic"><span class="icon icon-edit"></span>待评价</a>
		 				<a href="../trade/order/list?orderStatus=refund_orders" class="ic"><span class="icon icon-refund"></span>售后</a>
		 			</li>
		 		</ul>
        <p class="line">

        </p>


		 		<!--用户的信息拓展-->
		 		<ul class="modlist hasarrow">
		 			<li><a href="pay/bindlist" data-navigate="true">我的银行卡</a></li>
		 			<li><a href="/x5/u/coupon?sfrom=x6/u/14vwmi8">我的优惠</a></li>
		 			<li><a href="/x5/u/14vwmi8/fav?sfrom=x6/u/14vwmi8">我的喜欢</a></li>
		 			<li><a data-navigate="true" href="u/14vwmi8/shops">我关注的店铺</a></li><li><a href="/x5/u/14vwmi8/followList?sfrom=x6/u/14vwmi8">我关注的达人</a></li>
		 		</ul>

		 		<!--辅助信息-->
		 		<ul class="modlist hasarrow">
		 			<li><a href="/x5/infocenter/atme?sfrom=x6/u/14vwmi8">消息通知</a></li>
		 			<li><a data-navigate="true" href="trade/address">收货地址</a></li>
		 			<li><a href="/x/im/?imver=1.0&amp;show_header=x6#chat/b14ejg%23101">官方客服</a></li>
		 			<li><a href="/x5/feedback?sfrom=x6/u/14vwmi8">意见反馈</a></li>
		 		</ul>

				<!--退出按钮-->
		 		<input type="button" id="M_logout" class="logout" value="退出登录">
		 	</div>
		 </div>
	</div>
</template>
<script type="text/ecmascript-6">
const ERR_OK = 0
export default {
  data() {
    return {
      my: []
    }
  },
  created() {
    this.$http.get('/api/my').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.my = response.data
      }
      console.log(this.my)
    })
  },
  components: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/reset.styl"
/* @font-face {
    font-family: 'trade icons' !important;
    src: url('../../common/fonts/iconfont.eot?2qevqt#iefix') format('embedded-opentype'), url('../../common/fonts/iconfont.woff?2qevqt') format('woff'), url('../../common/fonts/iconfont.ttf?2qevqt') format('truetype'), url('../../common/fonts/iconfont.svg?2qevqt#icomoon') format('svg')
} */

/* @font-face{
  font-family: 'icomoon';
  src: url('../../common/fonts/iconfont.eot?2qevqt#iefix') format('embedded-opentype'),
          url('../../common/fonts/iconfont.ttf?2qevqt') format('truetype'),
          url('../../common/fonts/iconfont.woff?2qevqt') format('woff'),
          url('../../common/fonts/iconfont.svg?2qevqt#icomoon') format('svg')
}
[class^="icon-"], [class*=" icon-"] {
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
.line{
  border:1px solid #dedede;
  clear:both;
  margin-left: 14px;
}
.operate .ic-truck {
    top: 0
}

.icon-pay:before {
    font-size: 34px;
    content: "\e93b";
    padding-right: 10px;
}

.icon-truck:before {
    font-size: 34px;
    content: "\e93f";
    padding-right: 10px;
}

.icon-edit:before {
    font-size: 34px;
    content: "\ea52"
    padding-right: 10px;
}

.icon-refund:before {
    font-size: 34px;
    content: "\e93e";
    padding-right: 10px;
}

.wrap {
    color: #424242
}

.hd {
    box-sizing: border-box;
    padding: 20px 30px;
    background-color: #fa3970
}

.avaterbox {
    display: table-cell;
    padding: 0 15px
}

.avaterbox .r {
    margin: 2px auto 0 auto;
    background-color: #fa3970;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    overflow: hidden
}

.avaterbox .r4 {
    width: 55px;
    height: 55px;
    background-color: #fff
}

.avaterbox .r3 {
    width: 59px;
    height: 59px;
    border: 2px solid #fdb0c6
}

.avaterbox .r2 {
    width: 67px;
    height: 67px;
    border: 1px solid #fc88a9
}

.avaterbox .r1 {
    width: 73px;
    height: 73px;
    border: 1px solid #fc7da1
}

.avaterbox .avater {
    width: 100%;
    height: 100%
}

.namecard {
    display: table-cell;
    vertical-align: middle
}

.namecard .tt {
    font-size: 32px;
    color: #fff;
    margin-bottom: 15px
}

.namecard .lv {
    display: inline-block;
    width: 61px;
    height: 24px
}

.namecard .lv0 {
    background: url(http://s7.mogucdn.com/pic/140807/176rwo_ieygkzbvhaztenzymiytambqgiyde_62x24.png) no-repeat;
    background-size: 64px
}

.namecard .lv1 {
    background: url(http://s8.mogucdn.com/pic/140807/176rwo_ieydqmrsheztenzymiytambqgqyde_62x24.png) no-repeat;
    background-size: 32px
}

.namecard .lv2 {
    background: url(http://s8.mogucdn.com/pic/140730/176rwo_ieydaztbge3dmzbvmiytambqgyyde_62x24.png) no-repeat;
    background-size: 32px
}

.namecard .lv3 {
    background: url(http://s8.mogucdn.com/pic/140807/176rwo_ieygkyzqmeztenzymiytambqhayde_62x24.png) no-repeat;
    background-size: 32px
}

.namecard .subtt {
    font-size: 12px;
    color: #fff
}

.namecard .mbean {
    margin-right: 12px
}

.modlist {
    margin-bottom: 20px;
    /* border-top: 1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1; */
    background-color: #fff
}

.modlist li {
    margin-left: 14px;
    line-height: 1.5;
    border-bottom: 1px solid #e5e5e5
}

.modlist li a {
    display: block;
    padding: 14px 14px 14px 0;
    color: #424242
}

.modlist li:last-child {
    border: none
}

.modlist li .info {
    float: right;
    margin-right: 7%;
    color: #999
}

.hasarrow li {
    background: url(http://s8.mogucdn.com/pic/140730/176rwo_ieygimrsmy4tezbvmiytambqgqyde_16x29.png) no-repeat 95% center;
    background-size: 12px
}

.modlist .operate {
    border-top: 1px solid #e5e5e5 !important;
    background: 0 0;
    margin: -1px 0 0 0;
    background-color: #fff;
    padding: 0
}

.modlist .operate .ic {
    position: relative;
    float: left;
    display: block;
    width: 25%;
    text-align: center;
    color: #727272;
    font-size: 12px;
    padding: 9px 0 7px 0
}

.modlist .operate .icon {
    font-size: 16px;
    height: 20px
}

.modlist .operate .caution {
    position: absolute;
    right: 6px;
    top: 4px;
    max-width: 24px;
    color: #fff;
    background-color: #f5342f;
    -webkit-border-radius: 14px;
    border-radius: 14px;
    line-height: 1;
    padding: 3px 5px 2px 5px;
    text-overflow: ellipsis;
    overflow: hidden
}

.logout {
    display: block;
    width: 90.6%;
    height: 60px;
    line-height: 40px;
    margin: 0 auto 20px auto;
    color: #fff;
    background-color: #ff5777;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    outline: 0;
    -webkit-appearance: button;
    *overflow: visible
}
</style>
