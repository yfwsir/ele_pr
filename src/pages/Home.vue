<template>
    <div id="home" class="page">
        <Autoplay :data="onePageData" :twoData="twoPageData" ></Autoplay>
        <Scarebuying :scareBuying="scareBuyingData"></Scarebuying>
        <div class="business">
            <span></span>
            <p>推荐商家</p>
            <span></span>
        </div>
    </div>
</template>

<script>
import {getAutoplayData ,getScareBuyingData} from './../../services/homeServices.js';
import Autoplay from './../../components/home/homeAutoplay.vue';
import Scarebuying from './../../components/home/homeScareBuying.vue';
export default {
   components:{
       Autoplay,
       Scarebuying
   },
   data(){
       return{
           onePageData:[],
           twoPageData:[],
           scareBuyingData:[]
       }
   },
   mounted(){
        getAutoplayData().then(result=>{
        //    console.log(result)
          this.onePageData= result.slice(0,10)
          this.twoPageData= result.slice(10,13)
        })
        getScareBuyingData().then(result=>{
            console.log(result)
            this.scareBuyingData=result;
        })
   }
}
</script>
 
<style scoped>
   .business{
       width:100%;
       text-align: center;
       height:20px;
       font-size:14px;
       position: relative;
       margin:16px 0;
   }
   .business span:first-child{
       display: inline-block;
       width:30px;
       border:1px solid #999;
       position: absolute;
       left:30%;
       top:10px;
   }
   .business span:last-child{
       display: inline-block;
       width:30px;
       border:1px solid #999;
       position: absolute;
       top:10px;
       right:30%;
   }
</style>
