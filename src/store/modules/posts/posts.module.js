import Vue from 'vue'
import { URL } from '../../../core/constants'
import {
  SET_POSTS,
  SET_NEW_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_COMMENTS,
  SET_NEW_COMMENT
} from './mutation-types'

export const posts = {
  namespaced: true,

  state: {
    posts: [],
    comments: {}
  },

  mutations: {
    [SET_POSTS] (state, fetchPosts) {
      const { posts, userId } = fetchPosts
      if (userId) {
        state.posts = posts.filter(post => post.owner.id === userId)
      } else {
        state.posts = posts
      }
    },

    [SET_NEW_POST] (state, post) {
      state.posts.push(post)
    },

    [UPDATE_POST] (state, updatePost) {
      const { index, body, title } = updatePost
      state.posts[index].content.body = body
    },

    [DELETE_POST] (state, id) {
      state.posts = this.state.posts.posts.filter(post => post.id !== id)
    },

    [SET_COMMENTS] (state, comments) {
      state.comments = Object.assign({}, state.comments, { [comments.id]: comments.data })
    },

    [SET_NEW_COMMENT] (state, comment) {
      state.comments[`${comment.postId}`].push(comment)
    }
  },

  actions: {
    getPosts ({ commit }, userId) {
      Vue.http.get(URL + '/posts')
        .then(response => {
          commit(SET_POSTS, { posts: response.data, userId })
        })
        .catch(error => console.log(error))
    },

    newPost ({ commit }, newPost) {
      const { title, body, userId: id, userName: name } = newPost

      Vue.http.post(URL + '/posts', { owner: { id, name }, content: { body } })
        .then((response) => {
          commit(SET_NEW_POST, response.data)
        })
        .catch(error => console.error(error))
    },

    updatePost ({ commit }, post) {
      const { id, title, body, index } = post
      Vue.http.put(URL + `/posts/${id}`, { owner: { id, name: 'Mike' }, content: { body: body } })
        .then((response) => {
          commit(UPDATE_POST, { index, title, body })
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
      // console.log({comments: {owner: {id: comment.userId, name: comment.userName}, comment: comment.commentText}})
      Vue.http.post(URL + '/comments',
        { owner: { id: comment.userId, name: comment.userName }, postId: comment.postId, comment: comment.commentText })
        .then(response => commit(SET_NEW_COMMENT, response.data))
        .catch(error => console.log(error))
    }

  }
}
