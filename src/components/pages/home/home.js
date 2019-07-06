import Header from '../../layout/Header/Header.vue'
import Post from '../../ui-components/Post/Post.vue'

export default {
  name: 'Home',
  components: {
    'layout-header': Header,
    'post': Post
  },
  created () {
    this.$store.commit('user/startedLogin')
    this.$store.dispatch('posts/getPosts')
  },
  computed: {
    isLogin () {
      return this.$store.state.user.isLogin
    },
    posts () {
      return this.$store.state.posts.posts
    }
  }
}
