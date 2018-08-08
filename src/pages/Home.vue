<template>
<page :onScroll="pageScrollY" ref="page1">
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
            page:0,
            restaurantData:[],
            isCanGetData:true
        }
    },
    methods:{
        pageScrollY(y){
            if(y<80 && this.isCanGetData){
                console.log(1)
                this.isCanGetData = false;
                this.page += 8
                restaurantData(this.page).then(res=>{
                    this.restaurantData = [...this.restaurantData,...res] ;
                    this.$nextTick(()=>{
                        this.$refs.page1.refreshScroll();
                        this.isCanGetData = true;
                    })
                })
            }
        }
    },
    mounted(){
        // 获取首页商家列表的数据
        restaurantData(this.page).then(res=>{
            this.restaurantData = res ;

        })
    }
}
</script>

<style scoped>

</style>
