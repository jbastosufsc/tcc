import axios from 'axios'

const api = axios.create({
  //URL que é padrão em todas as chamadas (requests)
  baseURL: 'http://localhost:3333/'
})

export default api
