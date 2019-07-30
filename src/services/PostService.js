import axios from 'axios'

const BASE_URL = "http://localhost:8000/";

export default {
  async getPostList() {
    const response =  await axios.get(BASE_URL);
    
    return response.data
  }
}
