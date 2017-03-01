import * as types from './mutation-types'

export default {
  addTotalTime({commit}, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  getAllAccount({commit}, user) {
    commit(types.GET_ALL_ACCOUNT, user)
  }
};
