import axios from 'axios';

const SIGNUP_URL = 'https://barangay-talon-uno.vercel.app/register'
const LOGIN_URL = 'https://barangay-talon-uno.vercel.app/login'

//register user
const register = async (userData) => {
    const response = await axios.post(SIGNUP_URL, userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
// Login user
const login = async (userData) => {
    const response = await axios.post(LOGIN_URL, userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }
const logout = () => { 
    localStorage.removeItem('user')
}
const authService = {
    register,
    logout,
    login,

}

export default authService