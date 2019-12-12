import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import './plugins/element.js'

//样式重置文件
import './assets/style/reset.css'
//引入mui
import '../static/lib/mui/css/mui.min.css'
import '../static/lib/mui/css/icons-extra.css' //图标扩展
//引入mint-ui
import { Header,Button,Switch,Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//安装VuePreview  缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



Vue.config.productionTip = false

axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 引入qs库
import qs from 'qs'
Vue.prototype.$qs = qs

//导入时间格式化插件
import moment from 'moment'

//全局时间过滤器
Vue.filter('time',function(datastr, pattern = 'YYYY-MM-DD HH:mm:ss'){
  return moment(datastr).format(pattern)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
