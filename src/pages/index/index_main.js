import Vue from 'vue';
import VueResource from 'vue-resource';
import store from '../../store';
import App from './Index';
import ElementUI from 'element-ui';

import '@/common/css/reset.css';
import '@/common/css/common.less';

Vue.use(VueResource);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  ...App
});
