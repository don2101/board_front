import axios from 'axios'

const BASE_URL = "http://localhost:8000/accounts/";

export default {
  async loginRequest(loginBody) {
    await axios.post(BASE_URL + 'signin', loginBody)
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