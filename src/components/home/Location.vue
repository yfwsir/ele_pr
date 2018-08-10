<template>
<div id="location">
    <!-- <transition-group enter-active-class="slideInLeft" leave-active-class="slideOutLeft"> -->
    <div class="location_back" @click="back_home">
        <i class="iconfont icon-icon"></i>
    </div>
    <div class="location_header">
        <p class="select">选择收获地址</p>
    </div>
    <page id="location_page">
        <div class="cities">
            <div v-for="(value,key) in citiesData" :key="key">
                <p class="citiesKey">{{key}}</p>
                <ul class="citiesList">
                    <li v-for="(item,index) in value" :key="index" 
                            class="citiesItem">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </page>
    <!-- </transition-group> -->
</div>
</template>

<script>
import {getCitiesData} from '../../services/homeService'
export default {
    data () {
        return {
            citiesData:{}      
        }
    },
    methods:{
        back_home(){
            this.$router.back() ;
        }
    },
    mounted(){
        getCitiesData().then(res=>{
            this.citiesData = res ;
        })
    }
}
</script>

<style scoped>
#location_page{
    top: 50px;
    bottom: 0;
    background: #f5f5f5;
    font-size: 16px;
    font-size: 16px;
}
#location{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    z-index: 5;
}
.location_header{
    width: 100%;
    height: 50px;
    background: #0af;
}
.select{
    width: 100%;
    line-height: 50px;
    text-align: center;
    color: white;
    font-weight: 700;
}
.location_back{
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 16px;
    line-height: 50px;
    color: white;
}
.citiesKey{
    line-height: 50px;
    padding-left: 15px;
    color: #666;
}
.citiesItem{
    line-height: 50px;
    background: white;
    padding-left: 15px;
    margin-top: 3px;
}
.slideInLeft,.slideOutLeft,.fadeIn,.fadeOut{
    animation-duration: 300ms;
}
</style>
