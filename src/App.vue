<template>
  <div id="app">
    <comHeader></comHeader>
     <comMain></comMain>
   <router-view></router-view>
    <foot></foot>
    
  </div>
</template>

<script>
import comMain from './components/shoop/main'
import comHeader from "./components/header/header";
import ulLi from "./components/shoop/ul";
import foot from "./components/foot/footer";
export default {
  components: {
    comMain,
    comHeader,
    ulLi,
    foot
  }
};
</script>

<style>
*{
  text-decoration: none;
}

#app {
  height: 100%;
  font-size: 16px;
   display: flex;
  flex-direction: column;
  justify-content:space-between;
}

 

/* 商品 评价 商家 */
</style>
