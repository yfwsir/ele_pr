<template>
    <div class="shop">
    <!-- <page id="shop"> -->
        <div class="header" :style="{backgroundImage: 'url(' + url + ')' }">
            <div class="header_img">
                <img :src="data.image_path | formateImg" alt="">
            </div>
            <div class="shop_back" @click="shop_back">
                <i class="iconfont icon-icon"></i>
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
            <p class="shop_act"  v-if="data.activities[1]">
                <span :style="{backgroundColor:'#' + data.activities[1].icon_color,color:'#fff'}">
                    {{data.activities[1].icon_name}}
                </span>
                <span>{{data.activities[1].tips}}</span>
            </p>
        </div>
       

        <div class="recommend">
            <p class="shop_recommend">商家推荐</p>
            <keep-alive>
            <div class="recommend_list">
                <Foods v-for="(item,index) in foodItem" :key="index" 
                    :data="item" class="recommend_item" v-if="index<7">
                </Foods>
            </div>
            </keep-alive>
        </div>

        <div class="food_all">
            <ul class="food_ul">
                <li v-for="(item,index) in foodData" :key="index">
                    <a :href="'#' + index">
                    <div class="ul_img">
                        <img :src="item.icon_url | formateImg" alt="" v-if="item.icon_url">
                    </div>
                    {{item.name}}
                    </a>
                </li>
            </ul>

            <div class="food_detail1">
                <ul v-for="(item,index) in foodData" :key="index" class="food_detail_ul" :ref="index">
                    <li :id="index">
                        <span class="food_detail_title">{{item.name}}</span>
                        <span class="food_detail_des">{{item.description}}</span>
                    </li>
                    <li v-for="(value,index) in item.foods" :key="index">
                        <food-detail :data="value"></food-detail>
                    </li>
                </ul>
            </div>
        </div>
    <!-- </page> -->
        <!-- 加入购物车 -->
        <div class="goBuyCar" @click="goBuyCar">
            <p>跳去订单页面</p>
        </div>
    </div>

</template>

<script>
import {shopData } from '../../services/homeService'
import Foods from './Foods.vue'
import FoodDetail from './FoodDetail.vue'
export default {
    components:{
        Foods,
        FoodDetail
    },
    data () {
        return {
            data:{},
            foodData:[],
            foodItem:[],
            FoodDetail,
            url:''      
        }
    },
    methods:{
        shop_back(){
            this.$router.back() ;
        },
        goBuyCar(){
            this.$router.push({path:'/order'})
        }
    },
    created(){
        // this.data = this.$route.query.data.restaurant
        this.data = this.$store.state.shopData.restaurant
        // console.log(this.$store.state.shopData)
        if(this.data.image_path.indexOf('jpeg')>-1){
            this.url ='http://fuss10.elemecdn.com/' + this.data.image_path + '.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/'
        }else{
            this.url ='http://fuss10.elemecdn.com/' + this.data.image_path + '.png?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/'
        }
    },
    mounted(){
        shopData(this.data.id).then(res=>{
            this.foodData = res;
            this.foodItem = this.foodData[0].foods
            // console.log(this.foodData)
        })
    }
}
</script>

<style scoped>
.goBuyCar{
    position: absolute;
    top: 50px;
    left: 0;
}

/* #shop{
    bottom: 0;
} */
.shop{
    position: absolute;
    width: 100%;
    /* height: 100%; */
    top: 0;
    left: 0;
    /* bottom: 0; */
    background: white;
    z-index: 15;
}
.shop_back{
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 16px;
    line-height: 50px;
    /* color: white; */
}
.header{
    /* background: sandybrown; */
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
    background-size: cover;
    background-repeat:no-repeat;
}
.header_img{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%)
}
.shop_basic{
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
    margin-bottom: 40px;
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
    width: 80px;
    padding-left: 10px;
    float: left;
    margin-right: 10px;
    font-size: 14px;
    height: 500px;
    overflow-y: auto;
}
.food_ul li{
    height: 50px;
}
.food_all{
    position: relative;
    overflow: hidden;
}
.food_detail1{
    width: 260px;
    /* float: left; */
    height: 667px;
    overflow: auto;
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
