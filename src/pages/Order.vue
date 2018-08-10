<template>
    <div id="order">
        <Header />
        <p  class="product_title">
            <span v-for="(item,index) in listTitle" :key="index+'a'">{{item}}</span>
        </p>

        <ul>
            <li v-for="(item,index) in $store.state.orderData" :key="index" class="product_list">
                <span class="order_name">{{item.name}}</span>
                <span class="order_num">{{item.num}}</span>
                <span class="order_price">{{item.price | formateSale}}</span>
                <span class="order_total_price">{{item.total_price | formateSale}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
// import Header from '../components/common/Header.Vue'
import Header from '../components/common/Header.vue'
export default {
    components:{
        Header
    },
    data () {
       return {
           listTitle:['商品名','数量','单价','总价']
       }
   },
   created(){
        this.$store.commit('changeHeaderTitle','订单')
   }
}
</script>

<style scoped>
.product_list,.product_title{
    display: flex;
}
.order_name{
    flex: 2;
}
.order_num,.order_price,.order_total_price{
    flex: 1;
}
.product_title span{
    flex: 1;
}
.product_title span:nth-of-type(1){
    flex: 2;
}
</style>
