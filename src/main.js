import Vue from 'vue'
import App from './App.vue'
import ElementUl from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import "amfe-flexible"
import router from './router/router.js'
Vue.config.productionTip = false;
Vue.use(ElementUl)
new Vue({
  el:"#app",
  router,
  render: h => h(App)
}).$mount('#app');
(function(){
var rem = document.createElement('script');
rem.src = './rem.js';
document.body.appendChild(rem)
})()
