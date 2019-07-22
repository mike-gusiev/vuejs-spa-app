import Vue from 'vue'
import { URL } from '../../../core/constants'
import {
  SET_POSTS,
  SET_NEW_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_COMMENTS,
  SET_NEW_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from './mutation-types'

export const posts = {
  namespaced: true,

  state: {
    posts: [],
    comments: {}
  },

  mutations: {
    [SET_POSTS] (state, posts) {
      state.posts = posts
    },

    [SET_NEW_POST] (state, post) {
      state.posts.push(post)
    },

    [UPDATE_POST] (state, updatePost) {
      const { index, data } = updatePost
      state.posts[index].content.body = data.content.body
    },

    [DELETE_POST] (state, id) {
      state.posts = this.state.posts.posts.filter(post => post.id !== id)
    },

    [SET_COMMENTS] (state, comments) {
      state.comments = Object.assign({}, state.comments, { [comments.id]: comments.data })
    },

    [SET_NEW_COMMENT] (state, comment) {
      state.comments[`${comment.postId}`].push(comment)
    },

    [UPDATE_COMMENT] (state, comment) {
      const { data, index } = comment
      state.comments[data.postId][index] = data
    },

    [DELETE_COMMENT] (state, info) {
      const { postId, id } = info
      state.comments[postId] = this.state.posts.comments[`${postId}`].filter(comment => comment.id !== id)
    }
  },

  actions: {
    getPosts ({ commit }) {
      Vue.http.get(URL + '/posts')
        .then(response => {
          commit(SET_POSTS, response.data)
        })
        .catch(error => console.log(error))
    },

    getUserPosts ({ commit }, userId) {
      Vue.http.get(URL + '/posts?owner.id=' + userId)
        .then(response => {
          commit(SET_POSTS, response.data)
        })
        .catch(error => console.log(error))
    },

    newPost ({ commit }, newPost) {
      const { body, userId: id, userName: name } = newPost

      Vue.http.post(URL + '/posts', { owner: { id, name }, content: { body } })
        .then((response) => {
          commit(SET_NEW_POST, response.data)
        })
        .catch(error => console.error(error))
    },

    updatePost ({ commit }, post) {
      const { id, body, index, userName, userId } = post
      Vue.http.put(URL + `/posts/${id}`, { owner: { id: userId, name: userName }, content: { body } })
        .then((response) => {
          commit(UPDATE_POST, { data: response.data, index })
        })
        .catch(error => console.log(error))
    },

    deletePost ({ commit }, id) {
      Vue.http.delete(URL + `/posts/${id}`)
        .then(() => commit(DELETE_POST, id))
        .catch(error => console.log(error))
    },

    getComments ({ commit }, postId) {
      Vue.http.get(URL + `/comments?postId=${postId}`)
        .then(response => {
          commit(SET_COMMENTS, { data: response.data, id: postId })
        })
        .catch(error => console.error(error))
    },

    newComment ({ commit }, comment) {
      const { userId, userName, postId, content } = comment
      Vue.http.post(URL + '/comments',
        { owner: { id: userId, name: userName }, postId, content })
        .then(response => commit(SET_NEW_COMMENT, response.data))
        .catch(error => console.log(error))
    },

    updateComment ({ commit }, comment) {
      const { id, content, index, userName, userId, postId } = comment
      Vue.http.put(URL + `/comments/${id}`, { owner: { id: userId, name: userName }, postId, content })
        .then((response) => commit(UPDATE_COMMENT, { data: response.data, index }))
        .catch(error => console.log(error))
    },

    deleteComment ({ commit }, info) {
      Vue.http.delete(URL + `/comments/${info.id}`)
        .then(() => commit(DELETE_COMMENT, info))
        .catch(error => console.log(error))
    }
  }
}
