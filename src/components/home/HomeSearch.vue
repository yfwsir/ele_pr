<template>
    <div class="home_search">
        <div class="search" @click="goSearch">
            <i class="iconfont icon-search"></i>
            <span>搜索饿了么商家、商品名称</span> 
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goSearch(){
            this.$router.push({path:'/search'})
        }
    }
}
</script>

<style scoped>
.home_search{
    width: 100%;
    height: 52px;
    background: #0af;
    padding: 8px 15px;
    box-sizing: border-box;
}
.search{
    box-sizing: border-box;
    background: white;
    padding: 8px 0;
    text-align: center;
    font-size: 16px;
    color: #999;
    line-height: 20px;
}
</style>
