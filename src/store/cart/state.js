export default {
    cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cart')) : [],
    cartInfos: {
        total_price: 0,
        total_nums: 0
    },
    curIndex: -1
}
