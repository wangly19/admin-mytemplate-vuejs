// LocalStorage 存储类

const TOKEN_KEY = 'user_token' 
// getToken
const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

// setToken
const setToken = (token) => {
  return localStorage.setItem(TOKEN_KEY,token)
}

// clearToen
const clearToken = () => {
  return localStorage.removeItem(TOKEN_KEY)
}

export {
  getToken,
  setToken,
  clearToken
}