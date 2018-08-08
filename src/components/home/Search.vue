<template>
    <div class="search">

        <div class="search_header">
            <div class="search_header_left" @click="router_back">
                <i class="iconfont icon-icon"></i>
            </div>
            <div class="search_header_center" ref="inp">
                <i class="iconfont icon-search"></i>
                <input type="text" v-model="inp" placeholder="输入商家商品名称">
            </div>
            <div class="search_header_right" @click="goFoodDetail(inp)">
                搜索
            </div>
        </div>

        <page id="search_page">
            <div class="search_main" v-if="isShowRestaurant == false">
                <p>热点搜索</p>
                <span v-for="(item,index) in hotSearchData" :key="index"
                        class="hotsearch" @click="goFoodDetail(item.search_word)">
                    {{item.search_word}}
                </span>
            </div>

            <home-restaurant v-for="(item,index) in foodDetailData" :key="index" 
                :item="item" v-if="isShowRestaurant == true">
            </home-restaurant>
        </page>
    </div>
</template>

<script>
import {hotSearchData,footDetailData} from '../../services/homeService'
import HomeRestaurant from './HomeRestaurant.vue'
export default {
    components:{
        HomeRestaurant
    },
    data () {
        return {
            hotSearchData:[],
            foodDetailData:[],
            isShowRestaurant:false,
            inp:''
        }
    },
    methods:{
        goFoodDetail(keyword){
            this.isShowRestaurant = true ;
            footDetailData(keyword).then(res=>{
                this.foodDetailData = res;
                // console.log(this.foodDetailData)
            })
        },
        router_back(){
            this.$router.back()
        }
    },
    mounted(){
        hotSearchData().then(res=>{
            this.hotSearchData = res;
        })
        
    }
}
</script>

<style scoped>
#search_page{
    top: 74px;
    bottom: 0;
}
.search{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background: white;
    z-index: 5;
}
.search_header{
    width: 100%;
    height: 44px;
    display: flex;
    box-sizing: border-box;
    padding-top: 10px;
}
.search_header_center{
    flex: 6;
    background: #f8f8f8;
    box-sizing: border-box;
    padding: 5px;
}
.search_header_center input{
    width: 230px;
    border: 0;
    outline: none;
    background: #f8f8f8;
}
.icon-icon{
    font-size: 18px;
    flex: 1;
    line-height: 34px;
    margin: 10px;
}
.search_header_right{
    font-size: 18px;
    flex: 1;
    line-height: 34px;
}
.icon-search{
    margin:0 5px;
}

.search_main{
    padding: 15px;
    box-sizing: border-box;
}
.search_main p{
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
}
.hotsearch{
    display: inline-block;
    padding: 10px;
    font-size: 14px;
    background: #f8f8f8;
    margin-right: 10px;
    margin-top: 20px;
    border-radius: 8px;
    color: #666;
}
</style>
