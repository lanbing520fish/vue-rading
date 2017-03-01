import * as types from './mutation-types';

export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  // 当前登录人
  [types.GET_ALL_ACCOUNT] (state, user) {
    state.accountList = user
  }
};
