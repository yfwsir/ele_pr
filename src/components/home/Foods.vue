<template>
    <div class="food_list">
        <div class="food_img">
            <img :src="data.image_path | formateImg" alt="">
        </div>
        <p class="food_name">{{data.name}}</p>
        <p class="food_count">月售{{data.month_sales}} 好评率{{data.satisfy_rate}}%</p>
        <p><span class="food_price">￥{{data.specfoods[0].price}}</span><span class="food_add"> + </span></p>
    </div>
</template>

<script>
export default {
    props:["data"],
    mounted(){
        // console.log(this.data)
    }
}
</script>

<style scoped>
.food_list{
    width: 120px;
}
.food_list p{
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.food_img{
    width: 120px;
}
.food_img img{
    width: 100%;
}
.food_name{
    font-size: 14px;
    color: #333;
}
.food_count{
    font-size: 12px;
    color: #999;
    margin: 5px 0;
}
.food_price{
    font-size: 14px;
    color: rgb(255, 83, 57);
}
.food_add{
    display: block;
    float: right;
    width: 20px;
    height: 20px;
    background: rgb(35, 149, 255);
    border-radius: 50%;
    text-align: center;
    color: white;
    line-height: 20px;
}
</style>
