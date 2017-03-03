import Vue from 'vue';
import VueResource from 'vue-resource';
import router from '../../router';
import store from '../../store';
import Membercenter from './Membercenter';
import ElementUI from 'element-ui';

import '@/common/css/reset.css';
import '@/common/css/common.less';

Vue.use(VueResource);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  ...Membercenter
});
