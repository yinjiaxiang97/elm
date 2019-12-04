import Vue from "vue";
import router from "vue-router";
import shangpin from "@/components/shangpin/shangpin.vue";
import pingjia from "@/components/pingjia/pingjia.vue";
import shangjia from "@/components/shangjia/shangjia.vue"

Vue.use(router)

export default new router({
	mode:"history",
	routes:[
		{path:"/",redirect:"/shangpin"},
		{path:"/shangpin",component:shangpin},
		{path:"/pingjia",component:pingjia},
		{path:"/shangjia",component:shangjia}
	],
	linkExactActiveClass:"active", //精确匹配
	linkActiveClass:"active"  //模糊匹配
		//重新定义class名字；
})