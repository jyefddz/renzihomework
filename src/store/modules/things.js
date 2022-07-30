export default {
  namespaced: true,
  state: {
    list: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    addThings(state, payLoad) {
      const id = state.list[state.list.length - 1]
        ? state.list[state.list.length - 1].id + 1
        : 1
      state.list.push({
        name: payLoad,
        isDone: false,
        id
      })
    },
    delThings(state, payLoad) {
      const index = state.list.findIndex((ele) => ele.id === payLoad)
      state.list.splice(index, 1)
    }
  },
  actions: {
    asyncAddThings(context, payLoad) {
      context.commit('addThings', payLoad)
    },
    asyncDelThings(context, payLoad) {
      context.commit('delThings', payLoad)
    }
  }
}
