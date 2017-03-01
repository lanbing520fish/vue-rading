import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  list: [{
    'brand': '',
    'categoryName': '',
    'categoryType': '',
    'description': '',
    'icon': '',
    'images': [
      'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
      'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
      'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'
    ],
    'isOnline': false,
    'model': '',
    'name': '',
    'oldPrice': 23302,
    'price': 13343,
    'productId': 11433
  }],
  'total': 47345,
  'totalTime': 10,
  'accountList': {}
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
