import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
};
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  add: ({commit}) => commit('add'),
  remove: ({commit}) => commit('remove')
};

const mutations = {
  increment(state){
    state.count = state.count + 5;
  },
  decrement(state){
    state.count = state.count - 3;
  },
  add(state){
    state.count = state.count + 2;
  },
  remove(state){
    state.count = state.count -1;
  }
};

const getters = {

};
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
