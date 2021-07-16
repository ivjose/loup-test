import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3030' // the prefix of the URL

function httpRequest(method, url, request) {
  return axios[method](url, request)
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
}

export default {
  get(url, request) {
    return httpRequest('get', url, request)
  },
}
