// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import store from '../../store';
import Logo from './Logo';

Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  template: '<Logo/>',
  components: { Logo }
});
