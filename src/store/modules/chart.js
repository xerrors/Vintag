import Cookies from 'js-cookie'

const chart = {
  state: {
    theme: Cookies.get('theme') || 'dark'
  },
  mutations: {
    changeTheme: (state, payload) => {
      state.theme = payload
    }
  },
  actions: {
    changeTheme: (context, payload) => {
      context.commit('changeTheme', payload)
      Cookies.set('theme', payload)
    }
  }
}

export default chart
