<template>
  <div id="div">
    <div class="sp-header">单人特色套餐</div>
    <div class="sp-main">
      <img src="../../assets/img/1.jpg" alt="" class="sp-img" />
      <div class="spMain-div">
        <p>皮蛋瘦肉粥配包子套餐</p>
        <p>咸粥</p>
        <p>月售<span>1132</span>份 好评率<span>100</span>%</p>
        <div class="jia">
          <span>￥</span><span>24</span>
          <s class="s">￥<span>24</span></s>
		  <div class="btnn">
			  	<el-button type="primary" class="btn">+</el-button>
		  </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#div {
  width: 100%;
}
.sp-main {
	width: 100%;
  display: flex;
}
.sp-img {
  width: 114px;
  height: 114px;
  padding: 36px 20px 0 36px;
}
.sp-header {
  font-size: 26px;
  color: rgb(147, 153, 159);
  padding: 15px;
  background: rgba(7, 17, 27, 0.1);
}
.spMain-div{
	width:100%;
}
.spMain-div p:nth-child(1) {
	
  display: table;
  font-size: 28px;
  color: rgb(7, 17, 27);
  padding: 30px 0px 13px 0px;
  height: 28px;
}
.spMain-div p:nth-child(2) {
  padding-bottom: 12px;
  color: rgb(147, 153, 159);
  font-size: 20px;
}
.spMain-div p:nth-child(3) {
  color: rgb(147, 153, 159);
  font-size: 20px;
}
.s {
  font-size: 20px;
  color: rgb(147, 153, 159);
  font-weight: normal/700;
}
.jia > span:nth-child(1) {
  font-size: 20px;
  color: red;
}
.jia > span:nth-child(2) {
  font-size: 28px;
  color: red;
  font-weight: normal/700;
}
.jia{
	width: 100%;
	display: flex;
	align-items: flex-end;
	
}
.btn{
	width: 48px;
	height: 48px;
	font-size: 48px;
	border-radius: 50%;
	padding: 0px;
	
}
.btnn{
	padding-right: 36px;
	margin-left: auto;
}
</style>
