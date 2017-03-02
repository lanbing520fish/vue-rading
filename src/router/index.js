import Vue from 'vue';
import Router from 'vue-router';
import Information from '@/components/information/';
import Notice from '@/components/notice/';
import Trade from '@/components/trade/';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/information',
      component: Information
    }, {
      path: '/notice',
      component: Notice
    }, {
      path: '/trade',
      component: Trade
    }
  ]
})
