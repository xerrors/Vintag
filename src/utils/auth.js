import Cookies from 'js-cookie'

export function getToken() {
  return Cookies.get('token')
}

export function setToken(token) {
  return Cookies.set('token', token)
}

export function removeToken() {
  return Cookies.remove('token')
}

export function getTheme() {
  return Cookies.get('theme')
}

export function setTheme(theme) {
  return Cookies.set('theme', theme)
}

export function removeTheme() {
  return Cookies.remove('theme')
}
