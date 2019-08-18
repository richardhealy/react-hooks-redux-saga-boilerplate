import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)
const MAIN_API_ROOT = "https://jsonplaceholder.typicode.com"

const responseBody = res => res.body
const responseFile = res => res

let token = null
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Bearer ${token}`)
  }
}

const requests = {
  del: (API, url, body) =>
    superagent
      .del(`${API}${url}`)
      .send(body)
      .use(tokenPlugin)
      .then(responseBody),
  get: (API, url) =>
    superagent
      .get(`${API}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  getFile: (API, url) =>
    superagent
      .get(`${API}${url}`)
      .use(tokenPlugin)
      .then(responseFile),
  put: (API, url, body) =>
    superagent
      .put(`${API}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (API, url, body) =>
    superagent
      .post(`${API}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody)
}

const Users = {
  get: () => requests.get(MAIN_API_ROOT, '/users'),
}

export default {
  Users,
  setToken: _token => {
    token = _token
  }
}
