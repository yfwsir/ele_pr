<template>
    <div id="homeRestaurants">
        <div class="homeRestaurant">
            <div class="homeRestaurant_img">
                <img :src="item.restaurant.image_path | formateImg">
            </div>
            <div class="homeRestaurant_detail">
                <span class="protect" v-if="item.restaurant.supports"
                         v-for="(icon,index) in item.restaurant.supports" :key="index + '11'">
                    {{icon.icon_name}}
                </span>
                <span class="protect" v-if="item.restaurant.recommend.is_ad">
                    {{item.restaurant.recommend.reason}}
                </span>
                <p>
                    {{item.restaurant.name}}
                </p>
                <span class="fengniao" v-if="item.restaurant.delivery_mode">{{item.restaurant.delivery_mode.text}}</span>
                <p>
                    <span>{{item.restaurant.rating}}</span> 
                    <span>月售{{item.restaurant.recent_order_num}}份</span>
                </p>
                <p>
                    <span>￥{{item.restaurant.float_minimum_order_amount}}起送</span> |
                    <span>{{item.restaurant.piecewise_agent_fee.tips}}</span>
                </p>
                <p>
                    <span v-for="(item,index) in item.restaurant.support_tags" :key="index">
                        {{item.text}}
                    </span>
                </p>
                 <span class="activities_length" @click="showActive()">{{item.restaurant.activities.length}}个活动</span>
                <p v-for="(tab,index) in item.restaurant.activities" :key="index+'k'" v-if="index<2 || item.restaurant.isShow==true">
                    <span>{{tab.icon_name}}</span>
                    <span>{{tab.tips}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        item:Object,
        num:Number
    },
    methods:{
        showActive(){
            // console.log(this.item)
            this.item.restaurant.isShow = !this.item.restaurant.isShow ;
        }
    },
}
</script>

<style scoped>
#homeRestaurants{
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 12px;
    color: #333;
}
.homeRestaurant{
    display: flex;
    padding: 10px 0;
    box-sizing: border-box;
}
.homeRestaurant_img{
    flex: 1;
    float: left;
}
.homeRestaurant_img img{
    width: 100%;
    border: 1px solid rgba(0,0,0,.08);
}
.homeRestaurant_detail{
    flex: 3;
    margin-left: 15px;
    float: left;
}
.homeRestaurant_detail p:nth-of-type(1){
    font-size: 16px;
    font-weight: 700;
}
.homeRestaurant_detail p:nth-of-type(4) span{
    padding: 2px;
    margin-right: 5px;
    color: rgb(102, 102, 102);
    border: solid 1px rgb(221, 221, 221);
}
.homeRestaurant_detail p:nth-of-type(5) .p5_span1{
    display: inline-block;
    width: 160px;
}
.homeRestaurant_detail p:nth-of-type(6){
    display: inline-block;
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.homeRestaurant_detail p{
    margin-bottom: 7px;
}
.activities_length,.fengniao,.protect{
    float: right;
}
.fengniao{
    background: #0af;
    color: #fff;
}
.protect{
    margin-left: 5px;
}
</style>
