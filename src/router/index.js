import Vue from 'vue';
import Router from 'vue-router';
import Information from '@/components/information/';
import Notice from '@/components/notice/';
import Trade from '@/components/trade/';
import Modifyphone from '@/components/modifyphone/';
import Modifypassword from '@/components/modifypassword/';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/information'
    },{
      path: '/information',
      component: Information
    }, {
      path: '/notice',
      component: Notice
    }, {
      path: '/trade',
      component: Trade
    }, {
      path: '/modifyphone',
      component: Modifyphone
    }, {
      path: '/modifypassword',
      component: Modifypassword
    }
  ]
})
