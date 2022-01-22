import Vue from 'vue';
import App from './App.vue';

// 按需引入
// import 'fighting-ui/dist/css/button.css';
// import { Button, Card } from 'fighting-ui';
// Vue.use(Button);
// Vue.use(Card);

// 全部引入
// import 'fighting-ui/dist/css/index.css';
// import FtUI from 'fighting-ui';
// Vue.use(FtUI);

// 按需引入方法2
import '../components/css/index.scss';
import FtUI from '../components/lib/index.js';
Vue.use(FtUI, {
  components: ['FtButton', 'FtCard']
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
