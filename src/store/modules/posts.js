import { fetchPosts } from '../../api'

export const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    mutationPosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    getPosts ({ commit }) {
      fetchPosts()
        .then(response => commit('mutationPosts', response.data))
        .catch(err => console.log(err))
    }
  }
}
