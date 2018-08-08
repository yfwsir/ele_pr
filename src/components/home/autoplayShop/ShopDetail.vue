<template>
<page class="shop_detail" :onScroll="pageScrollY" ref="page1">
    <!-- <div class="shop_detail"> -->
            <ul class="detail_nav">
                <li v-for="(nav,index) in shopNavData" :key="index" class="detail_nav_item"
                        :class="{actived : isClass}"
                        @click="changeTab(nav.restaurant_category_ids)">
                    {{nav.name}}
                </li>
            </ul>
       

            <div class="sale_list" v-if="isShow==true && shopDetailSaleData.query_list">
                <span @click="gosaleList" class="seeMoreSale">更多</span>
                <p class="sale_list_title">{{shopDetailSaleData.page_title}}</p>
                <ul class="salelist_ul">
                    <li v-for="(item,index) in shopDetailSaleData.query_list" :key="index" 
                            v-if="index<3" class="salelist_li">
                        <div>
                            <img :src="item.foods[0].image_path | formateImg" alt="">
                        </div>
                        <p class="salelist_name">{{item.foods[0].name}}</p>
                        <p class="salelist_count">{{item.foods[0].satisfy_count}}人好评</p>
                        <p>
                            <span class="salelist_price">￥{{item.foods[0].price}}</span> 
                            <span v-if="item.foods[0].original_price" class="salelist_originnal_price">
                                <del>￥{{item.foods[0].original_price}}</del>
                            </span>
                        </p>
                    </li>
                </ul>
            </div>

            <home-restaurant v-for="(item,index) in shopDetailData" :key="index" 
                :item="item">
            </home-restaurant>
        
    <!-- </div> -->
</page>
</template>

<script>
import HomeRestaurant from '../HomeRestaurant.vue'
import {shopNavData,shopDetailSaleData,shopDetailData} from '../../../services/homeService'
export default {
    components:{
        HomeRestaurant
    },
    data () {
        return {
            shopNavData:[],
            shopDetailData:[],
            shopDetailSaleData:{},
            isShow:true,
            isClass:false,
            id:-1,
            isCanGetData:true,
            page:0
        }
    },
    methods:{
        gosaleList(){
            this.$router.push({path:'/shopdetail/sale'})
        },
        changeTab(id){
            shopDetailData(id,this.page).then(res=>{
                this.id = id
                this.shopDetailData = res ;
                this.isShow = false;
            })
        },
        pageScrollY(y){
            // console.log('请求到了')
            if(y<80 && this.isCanGetData){
                console.log(1,this.id)
                this.isCanGetData = false;
                this.page += 8
                shopDetailData(this.id,this.page).then(res=>{
                    this.shopDetailData = [...this.shopDetailData,...res] ;
                    this.$nextTick(()=>{
                        this.$refs.page1.refreshScroll();
                        this.isCanGetData = true;
                    })
                })
            }
        }
    },
    mounted(){
        shopNavData().then(res=>{
            this.shopNavData = res ;
            // console.log(this.shopNavData)
            this.id =  this.shopNavData[0].restaurant_category_ids
        })
        shopDetailSaleData().then(res=>{
            this.shopDetailSaleData = res ;
        })
        shopDetailData().then(res=>{
            this.shopDetailData = res ;
        })
    }
}
</script>

<style scoped>
.shop_detail{
    /* top: 74px; */
    bottom: 0;
    background: white;
    z-index: 5;
}
.shop_detail{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background: white;
    z-index: 5;
}
.detail_nav{
    width: 3000px;
    overflow-x: auto;
    background: #0af;
}
.detail_nav_item{
    float: left;
    padding: 0 28px;
    color: white;
    line-height: 40px;
}

.sale_list{
    padding: 0 15px;
}
.seeMoreSale{
    float: right;
    font-size: 12px;
}
.salelist_ul{
    display: flex;
    margin-top: 10px;
    margin-bottom: 15px;
}
.actived{
    background: black;
}
.salelist_li{
    flex: 33%;
    margin-right: 10px;
}
.salelist_li img{
    width: 100%;
}
.salelist_li p{
    width: 105px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.salelist_name,.sale_list_title{
    font-size: 15px;
    font-weight: 700;
    color: #333;
}
.salelist_count,.salelist_originnal_price{
    font-size: 12px;
    color: #333;
    opacity: .5;
}
.salelist_price{
    font-size: 12px;
    font-weight: 700;
    color: #333;
}
</style>
