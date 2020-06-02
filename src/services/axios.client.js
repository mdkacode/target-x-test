import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const API_URI = 'https://my-json-server.typicode.com/hmm-mayank/target-x-test'
// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
  adapter: cache.adapter,
  baseURL: API_URI
})

export default api
