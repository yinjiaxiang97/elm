<template>
	<div class="shang">
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>0</li>
		</ul>
		<shangpin></shangpin>
	</div>
	
</template>

<script>
import shangpin from './shangpin.vue'
export default {
	components:{
		shangpin
	}
}
</script>

<style scoped>
	li{
		width: 160px;
		height: 108px;
		text-align: center;
		line-height:108px;
	}
	.shang{
		flex:1;
		height: 0;
		display: flex;
		justify-content:space-between;
		overflow:scroll;
	}
</style>