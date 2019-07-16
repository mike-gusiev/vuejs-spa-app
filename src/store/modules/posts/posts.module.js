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
      const { index, body, title } = updatePost
      state.posts[index].body = body
      state.posts[index].title = title
    },

    [DELETE_POST] (state, id) {
      state.posts = this.state.posts.posts.filter(post => post.id !== id)
    }
  },

  actions: {
    getPosts ({ commit }) {
      Vue.http.get(URL + '/posts')
        .then(response => commit(SET_POSTS, response.data))
        .catch(error => console.log(error))
    },

    newPost ({ commit }, newPost) {
      const { title, body, router } = newPost

      Vue.http.post(URL + '/posts', { title, body })
        .then(() => {
          commit(SET_NEW_POST, { title, body })
          router.push({ name: 'Home' })
        })
        .catch(error => console.error(error))
    },

    updatePost ({ commit }, post) {
      const { id, title, body, index } = post

      Vue.http.put(URL + `/posts/${id}`, { title, body })
        .then(() => {
          commit(UPDATE_POST, { index, title, body})
        })
        .catch(error => console.log(error))
    },

    deletePost ({ commit }, id) {
      Vue.http.delete(URL + `/posts/${id}`)
        .then(() => commit(DELETE_POST, id))
        .catch(error => console.log(error))
    }
  }
}
