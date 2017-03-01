import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Footer from '@/components/footer/';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    }, {
      path: '/footer',
      component: Footer
    }
  ]
})
