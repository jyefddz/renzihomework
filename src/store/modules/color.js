export default {
  namespaced: true,
  state: {
    colorList: ''
  },
  mutations: {
    checkColor(state) {
      let str = '#'
      const arr = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
      ]
      for (let i = 0; i < 6; i++) {
        const num = parseInt(Math.random() * 16)
        str += arr[num]
      }
      state.colorList = str
    }
  },
  actions: {
    asyncCheckColor({ commit }) {
      commit('checkColor')
    }
  }
}
