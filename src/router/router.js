import Vue from 'vue';
import router from 'vue-router';
import shangpin from '@/components/shoop/ul.vue';
import pingjia from '@/components/pingjia/pingjia';
import shangjia from "@/components/shangjia/shangjia"
Vue.use(router);

export default new router({
	mode:"history",
	routes:[
		{path:"/",component:shangpin},
		{path:"/shangjia",component:shangjia},
		{path:"/pingjia",component:pingjia}
	]
})