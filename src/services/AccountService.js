import axios from 'axios'

const BASE_URL = "http://localhost:8000/accounts/";

export default {
  async loginRequest(loginBody) {
    let response;

    try {
      response = await axios.post(BASE_URL + 'signin/', loginBody)

      // 로그인 요청 후 jwt와 isLogin 정보를 wjwkd
      if(response.status == 200) {
        sessionStorage.setItem("jwt", response.data);
        sessionStorage.setItem("isLogin", true);

        return true
      } else {
        return false
      }

    } catch(e) {
      return false
    }
    
  },

  async signupRequest(signupBody) {
    let response;
    try {
      response = await axios.post(BASE_URL + 'signup/', signupBody);

      if(response.status == 201) {
        return true
      }

      return false
    } catch(e) {

      return false
    }

  },

  async logoutRequest() {
    const token = sessionStorage.getItem('jwt')
    const body = {'token': token}
    sessionStorage.removeItem("jwt")
    sessionStorage.removeItem("isLogin")
    location.href = '/'

    let response = await axios.post(BASE_URL + 'signout/', body)    
  }
}