<template>
    <div class="shop">
    <page id="shop">
        <div class="header">
            <div class="header_img">
                <img :src="data.image_path | formateImg" alt="">
            </div>
        </div>

        <div class="shop_basic">
            <p class="shop_name">{{data.name}}</p>
            <p class="shop_raring">评价{{data.rating}} 月售{{data.recent_order_num}} 
                <span>
                    <span v-if="data.delivery_mode">{{data.delivery_mode.text}}</span>
                    <span v-if="!data.delivery_mode">{{data.theme.third_tab_name}}配送</span>   
                        约{{data.order_lead_time}}分钟
                </span>  
            </p>
            <span class="shop_length">{{data.activities.length}}个活动</span>
            <p class="shop_act">
                <span :style="{backgroundColor:'#' + data.activities[1].icon_color,color:'#fff'}">{{data.activities[1].icon_name}}</span>
                <span>{{data.activities[1].tips}}</span>
            </p>
        </div>
       

        <div class="recommend">
            <p class="shop_recommend">商家推荐</p>
            <div class="recommend_list">
                <Foods v-for="(item,index) in foodItem" :key="index" 
                    :data="item" class="recommend_item" v-if="index<7">
                </Foods>
            </div>
        </div>

        <div class="food_all">
            <ul class="food_ul">
                <li v-for="(item,index) in foodData" :key="index">
                    <div class="ul_img">
                        <img :src="item.icon_url | formateImg" alt="" v-if="item.icon_url">
                    </div>
                    {{item.name}}
                </li>
            </ul>

            <div class="food_detail">
                <ul v-for="(item,index) in foodData" :key="index">
                    <li>
                        <span class="food_detail_title">{{item.name}}</span>
                        <span class="food_detail_des">{{item.description}}</span>
                    </li>
                    <li v-for="(value,index) in item.foods" :key="index">
                        <Foods :data="value"></Foods>
                    </li>
                    <!-- <li v-for="(value,index) in item.foods" :key="index+'a'">
                        <food-detail></food-detail>
                    </li> -->
                </ul>
            </div>
        </div>
    </page>
    </div>

</template>

<script>
import { shopData } from '../../services/homeService'
import Foods from './Foods.vue'
import FoodDetail from './FoodDetail.vue'
export default {
    components:{
        Foods
    },
    data () {
        return {
            data:{},
            foodData:[],
            foodItem:[],
            FoodDetail      
        }
    },
    created(){
        this.data = this.$route.query.data.restaurant
        // console.log(this.data)
    },
    mounted(){
        shopData(this.data.id).then(res=>{
            this.foodData = res;
            this.foodItem = this.foodData[0].foods
            console.log(this.foodData)
        })
    }
}
</script>

<style scoped>
#shop{
    bottom: 0;
}
.shop{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    z-index: 5;
}
.header{
    background: sandybrown;
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
}
.header_img{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%)
}
.shop_basic{
    /* width: 100%; */
    padding: 0 30px;
}
.shop_basic p{
    margin-bottom: 5px;
}
.shop_name{
    font-size: 24px;
    font-weight: 700;
    text-align: center;
}
.shop_raring{
    font-size: 12px;
    color: #666;
    text-align: center;
}
.shop_length{
    float: right;
    color: #999;
    font-size: 12px;
}
.shop_act{
    color: #666;
    font-size: 12px;
}

.recommend{
    width: 100%;
    overflow: auto;
    margin-top: 50px;
    margin-bottom: 20px;
}
.recommend_list{
    width: 1500px;
}
.recommend_item{
    float: left;
    margin-left: 10px;
}
.shop_recommend{
    font-size: 16px;
    font-weight: 700;
    color: #333;
    margin-left: 15px;
}

.ul_img{
    width: 12px;
}
.ul_img img{
    width: 100%;
    float: left;
    position: relative;
    top: 5px;
    margin-right: 5px;
}
.food_ul{
    width: 70px;
    padding-left: 10px;
    float: left;
}
.food_ul li{
    height: 50px;
}
.food_all{
    position: relative;
    overflow: hidden;
}
.food_detail{
    width: 260px;
    float: right;
}

.food_detail_title{
    font-size: 14px;
    font-weight: 700;
    color: #333;
}
.food_detail_des{
    font-size: 12px;
    color: #999;
}
</style>
