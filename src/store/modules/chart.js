import { setTheme, getTheme } from '@/utils/auth'

const chart = {
  state: {
    theme: getTheme('theme') || 'dark'
  },
  mutations: {
    changeTheme: (state, payload) => {
      state.theme = payload
    }
  },
  actions: {
    changeTheme: (context, payload) => {
      context.commit('changeTheme', payload)
      setTheme('theme', payload)
    }
  }
}

export default chart
