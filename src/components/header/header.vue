<template>
<div>
	<div class="shouye-header">
      <div class="con">
        <img src="../../assets\img\avatar.jpg" class="dianjia" />
        <div>
          <div class="pin">
            <img src="../../assets\img\brand@2x.png" class="pinpai" /><span
              class="zp"
              >粥品香坊（大运村）</span
            >
          </div>
          <div class="pin-pin">蜂鸟专送/38分钟送达</div>
          <div class="pin-bottom">
            <img src="../../assets\img\decrease_1@2x.png" />
            <span>在线支付满28减5、满50减10</span>
          </div>
        </div>
        <div class="bc">
          <div class="bc-but">5个 &nbsp;></div>
        </div>
      </div>
      <div class="gg">
        <div class="gg-con">
          <img src="../../assets\img\bulletin@2x.png" alt="">
          <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作工艺... <span class="fu">></span>  </span>
        </div>
      </div>
    </div>
   
</div>   
</template>

<script>

export default {
	
}
</script>
<style scoped>
	.shouye-header {
  width: 100%;
  height: 267px;
  background: rgba(7, 17, 27, 0.5);
  background-image:url("../../assets\img\avatar.jpg");
  
}
.con {
  width: 100%;
  padding-top: 48px;
  margin-bottom: 36px;
  position: relative;
  display: flex;
}
.dianjia {
  width: 128px;
  height: 128px;
  border-radius: 4px;
  padding: 0px 32px 0px 48px;
}
.zp {
  font-size: 32px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  vertical-align: middle;
}
.pin {
  padding: 4px 0px 16px 0px;
  height: 36px;
}
.pinpai {
  width: 60px;
  height: 36px;
  padding-right: 12px;
  vertical-align: middle;
}
.pin-pin {
  font-size: 24px;
  font-weight: 200;
  color: rgb(255, 255, 255);
  padding-bottom: 10px;
}
.pin-bottom span {
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  vertical-align: middle;
}
.pin-bottom img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.bc-but {
  position: absolute;
  bottom: 0px;
  right: 24px;
  width: 86px;
  height: 48px;
  border-radius: 22px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 48px;
  text-align: center;
}
.gg{
  width: 100%;
  height: 56px;
  background-color: rgba(7,17,27,0.2);
}
.gg img{
  width:44px;
  height:24px;
  vertical-align: middle;
  padding:0px 8px 0px 24px;

}
.gg span{
  font-size: 20px;
  color: #fff;
  font-weight: 200;
  vertical-align: middle;
}
.gg-con{
  padding-top:14px;
}
.fu{
  padding-left: 8px;
}
</style>