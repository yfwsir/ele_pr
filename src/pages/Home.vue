<template>
<page>
    <div id="home">
        <!-- 首页搜索框 -->
        <home-search></home-search>
        <!-- 首页商家列表模块 -->
        <home-restaurant v-for="(item,index) in restaurantData" :key="index" :item="item"></home-restaurant>
    </div>
</page>
</template>

<script>
// 引入首页商家列表模块
import HomeRestaurant from '../components/home/HomeRestaurant.vue'
import HomeSearch from '../components/home/HomeSearch.vue'

import {restaurantData} from '../services/homeService'

export default {
    components:{
        HomeRestaurant,
        HomeSearch
    },
    data () {
        return {
            restaurantData:[],
        }
    },
    mounted(){
        // 获取首页商家列表的数据
        restaurantData().then(res=>{
            this.restaurantData = res ;
            // console.log(this.restaurantData)
        })
    }
}
</script>

<style scoped>

</style>
