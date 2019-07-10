import Vue from 'vue'
import { URL } from '../../core/constants'

export const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    mutationPosts (state, posts) {
      state.posts = posts
    },

    mutationNewPost (state, post) {
      state.posts.push(post)
    },

    mutationUpdatePost (state, updatePost) {
      state.posts.forEach(post => {
        if (post.id === updatePost.id) {
          post.body = updatePost.body
          post.title = updatePost.title
        }
      })
    },

    mutationDeletePost (state, id) {
      state.posts = this.state.posts.posts.filter(post => post.id !== id)
    }
  },
  actions: {
    getPosts ({ commit }) {
      Vue.http.get(URL + '/posts')
        .then(response => commit('mutationPosts', response.data))
        .catch(err => console.log(err))
    },

    newPost ({ commit }, newPost) {
      Vue.http.post(URL + '/posts', { id: newPost.id, title: newPost.title, body: newPost.body }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(() => { newPost.router.push({ name: 'Home' }) })
        .catch(error => console.error(error))
    },

    updatePost ({ commit }, post) {
      Vue.http.put(URL + `/posts/${post.id}`, { id: post.id, title: post.title, body: post.body }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(() => {
          commit('mutationUpdatePost', post)
        })
    },

    deletePost ({ commit }, id) {
      Vue.http.delete(URL + `/posts/${id}`)
      commit('mutationDeletePost', id)
    }
  }
}
