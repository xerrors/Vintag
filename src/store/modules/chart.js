const chart = {
  state: {
    theme: 'vintage'
  },
  mutations: {
    changeTheme: (state, payload) => {
      state.theme = payload
    }
  },
  actions: {
    changeTheme: (context, payload) => {
      context.commit('changeTheme', payload)
    }
  }
}

export default chart
