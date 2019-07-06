import Vue from 'vue'

const url = 'http://localhost:3000'

export const fetchUsers = () => {
  return Vue.http.get(url + '/users')
}

export const fetchRegistration = (name, password) => {
  return Vue.http.post(url + '/users', { id: Date.now(), name: name, password: password }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

export const fetchPosts = () => {
  return Vue.http.get(url + '/posts')
}

export const fetchNewPost = (title, body) => {
  return Vue.http.post(url + '/posts', { id: Date.now(), title, body }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

export const fetchUpdatePost = (id, title, body) => {
  return Vue.http.put(url + `/posts/${id}`, { id, title, body }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }
  )
}
