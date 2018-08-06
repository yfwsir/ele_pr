<template>
    <div id="homeRestaurant">
        <div v-for="(item,index) in restaurantData" :key="index" class="homeRestaurant">
            <div class="homeRestaurant_img">
                <img :src="'http://fuss10.elemecdn.com/'+item.restaurant.image_path + '.jpeg'">
            </div>
            <div class="homeRestaurant_detail">
                <p>{{item.restaurant.name}}</p>
                <p>
                    <span>{{item.restaurant.rating}}</span> 
                    <span>月售{{item.restaurant.recent_order_num}}份</span>
                </p>
                <p>
                    <span>￥20起送</span> |
                    <span>{{item.restaurant.piecewise_agent_fee.tips}}</span>
                </p>
                <p>
                    <span v-for="(item,index) in item.restaurant.support_tags" :key="index">
                        {{item.text}}
                    </span>
                </p>
                <p>
                    <span class="p5_span1">{{item.restaurant.activities[0].tips}}</span>
                    <span>{{item.restaurant.activities.length}}个活动</span>
                </p>
                <p>
                   <!-- <span>{{item.restaurant.activities[1].tips}}</span> -->
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {restaurantData} from '../../services/homeService'
export default {
    data () {
        return {
            restaurantData:[]    
        }
    },
    mounted(){
        restaurantData().then(res=>{
            this.restaurantData = res ;
        })
    }
}
</script>

<style scoped>
#homeRestaurant{
    padding: 0 15px 50px;
    font-size: 12px;
    color: #333;
}
.homeRestaurant{
    width: 100%;
    display: flex;
    padding: 10px 0;
}
.homeRestaurant_img{
    flex: 1;
    float: left;
    width: 130px;
}
.homeRestaurant_img img{
    width: 100%;
    border: 1px solid rgba(0,0,0,.08);
}
.homeRestaurant_detail{
    flex: 3;
    width: 580px;
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
    width: 180px;
}
/* .homeRestaurant_detail p:nth-of-type(6){
    display: inline-block;
    width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
} */
.homeRestaurant_detail p{
    margin-bottom: 7px;
}
</style>
