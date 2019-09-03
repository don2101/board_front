import axios from 'axios'

const BASE_URL = "http://localhost:8000/accounts/";

export default {
  async loginRequest(loginBody) {
    let response = 'failed'

    try {
      response = await axios.post(BASE_URL + 'signin/', loginBody)

      // 로그인 요청 후 jwt와 isLogin 정보를 wjwkd
      if(response.status == 200) {
        sessionStorage.setItem("jwt", response.data)
        sessionStorage.setItem("isLogin", true)

        return response
      } else {
        return false
      }

    } catch(e) {
      return false
    }
    
  },

  async signupRequest(signupBody) {
    let response = 'failed'
    try {
      response = await axios.post(BASE_URL + 'signup/', signupBody)
    } catch(e) {
      alert("똑바로 입력!")
    }

    return response
  }
}