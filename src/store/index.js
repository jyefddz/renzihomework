import Vue from 'vue'
import Vuex from 'vuex'
import things from './modules/things'
import color from './modules/color'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    list(state) {
      return state.things.list
    },
    colorList(state) {
      return state.color.colorList
    }
  },
  mutations: {},
  actions: {},
  modules: {
    things,
    color
  }
})
