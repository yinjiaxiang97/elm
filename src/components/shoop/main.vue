<template>
	 <div class="gn">
        <div class="sp">
          <router-link to="/shangpin">商品</router-link>
        </div>
        <div>
          <router-link to="/pingjia">评价</router-link>
        </div>
        <div class="sj">
          <router-link to="/shangjia">商家</router-link>
        </div>
    </div>
</template>

<script>
export default {
	
}
</script>

<style  scoped>
	.gn{
  width: 100%;
  height: 80px;
  display: flex;
  font-size: 28px;
  font-weight: 400;
  line-height: 80px;
  justify-content:space-between;
}
.sp{
	padding-left: 99px;
}
.sj{
	padding-right: 99px;
}
</style>
	