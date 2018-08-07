<template>
<page>
    <div id="home">
        <h1>首页</h1>
        <home-restaurant v-for="(item,index) in restaurantData" :key="index" :item="item">

        </home-restaurant>
    </div>
</page>
</template>

<script>
import HomeRestaurant from '../components/home/HomeRestaurant.vue'
import {restaurantData} from '../services/homeService'

export default {
    components:{
        HomeRestaurant
    },
    data () {
        return {
            restaurantData:[],
        }
    },
    mounted(){
        restaurantData().then(res=>{
            this.restaurantData = res ;
            console.log(this.restaurantData)
        })
    }
}
</script>

<style scoped>

</style>
