import { getToken, setToken, removeToken, removeTheme } from '@/utils/auth'
import axios from 'axios'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 注册
    Register({ commit }, userForm) {
      return new Promise((resolve, reject) => {
        axios.post('/api/register', userForm).then(res => {
          // 只是演示
          console.log(res)
          const data = res.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登录
    Login({ commit }, userForm) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/api/login',
          method: 'post',
          data: userForm,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(res => {
          console.log(res)
          const data = res.data
          if (data.code !== 200) {
            reject(data.message)
          } else {
            setToken(data.token)
            commit('SET_TOKEN', data.token)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.post('getInfo', state.token).then(res => {
          console.log(res)
          const data = res.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.post('logout', state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          removeTheme()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
