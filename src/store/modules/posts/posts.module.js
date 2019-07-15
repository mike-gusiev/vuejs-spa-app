import Vue from 'vue'
import { URL } from '../../../core/constants'
import {
  SET_POSTS,
  SET_NEW_POST,
  UPDATE_POST,
  DELETE_POST
} from './mutation-types'

export const posts = {
  namespaced: true,

  state: {
    posts: []
  },

  mutations: {
    [SET_POSTS] (state, posts) {
      state.posts = posts
    },

    [SET_NEW_POST] (state, post) {
      state.posts.push(post)
    },

    [UPDATE_POST] (state, updatePost) {
      state.posts.forEach(post => {
        if (post.id === updatePost.id) {
          post.body = updatePost.body
          post.title = updatePost.title
        }
      })
    },

    [DELETE_POST] (state, id) {
      state.posts = this.state.posts.posts.filter(post => post.id !== id)
    }
  },

  actions: {
    getPosts ({ commit }) {
      Vue.http.get(URL + '/posts')
        .then(response => commit(SET_POSTS, response.data))
        .catch(err => console.log(err))
    },

    newPost ({ commit }, newPost) {
      Vue.http.post(URL + '/posts', { id: newPost.id, title: newPost.title, body: newPost.body }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(() => {
          commit(SET_NEW_POST, { id: newPost.id, title: newPost.title, body: newPost.body })
          newPost.router.push({ name: 'Home' })
        })
        .catch(error => console.error(error))
    },

    updatePost ({ commit }, post) {
      Vue.http.put(URL + `/posts/${post.id}`, { id: post.id, title: post.title, body: post.body }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(() => {
          commit(UPDATE_POST, post)
        })
    },

    deletePost ({ commit }, id) {
      Vue.http.delete(URL + `/posts/${id}`)
      commit(DELETE_POST, id)
    }
  }
}
