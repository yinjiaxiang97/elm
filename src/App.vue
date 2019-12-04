<template>
  <div id="app">
    <tou />
    <div class="nav">
      <div class="nav-item">
        <router-link to="/shangpin">商品</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/pingjia">评价</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/shangjia">商家</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import tou from "./components/header/header.vue";
import "../api/header.js"
export default {
  data(){
    return {
      seller:{}
    }
  },async created(){
   this.seller= await getData("/api/seller")
   console.log(this.await)
  },

  components: {
    tou
  }
};
</script>

<style lang="scss" scoped>
@import "./common/mixin.scss";
.nav {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-around;
  @include border-1px(#ccc);  //@include调用
  .nav-item {
    width: 33.3%;
    font-size: 0.14rem;
    font-weight: 200;
    text-align: center;
    color: rgb(77, 85, 93);
    & > a {
      display: block;
      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
