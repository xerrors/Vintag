import { getToken, setToken, removeToken, removeTheme } from '@/utils/auth'
// import axios from 'axios'
import { login, register, getInfo, logout } from '@/api/login'
import { getData } from '@/api/data'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: '',
    data: {}
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
    },
    SET_DATA: (state, data) => {
      state.data = data
    }
  },

  actions: {
    // 注册
    Register({ commit }, userForm) {
      return new Promise((resolve, reject) => {
        register(userForm).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登录
    Login({ commit }, userForm) {
      return new Promise((resolve, reject) => {
        login(userForm).then(res => {
          const data = res.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          console.log(res)
          const data = res.data.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            console.log(data.roles)
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

    // 获取数据
    GetData({ commit, state }) {
      return new Promise((resolve, reject) => {
        getData(state.token).then(res => {
          console.log(res)
          const data = res.data.data
          commit('SET_DATA', data)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
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
