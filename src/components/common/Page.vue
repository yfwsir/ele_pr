<template>
    
        <!-- 创建iscroll滚动视图需要满足的条件
        1.滚动容器大小固定，overflow：hidden
        2.滚动视图必须是滚动容器的第一个子元素
        3.滚动视图的宽度或者是高度大于滚动容器时才可以滚动。
    -->
    <div class="page" ref="page">
        <div class="page_wrap">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        let scroll = new IScroll(this.$refs.page)
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        });
    }
}
</script>

<style scoped>
.page{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 50px;
    overflow: hidden;
}
</style>
