<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <router-link to="/home" class="footer_item">首页</router-link>
      <router-link to="/discover" class="footer_item">发现</router-link>
      <router-link to="order" class="footer_item">订单</router-link>
      <router-link to="mine" class="footer_item">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
}
.footer{
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  height: 49px;
  border-top: solid 1px #ccc;
}
.footer_item{
  flex: 1;
  text-align: center;
  color: #8e8e93;
  font-size: 14px;
}
.footer_item.router-link-active{
  color: #0089dc;
}
</style>
