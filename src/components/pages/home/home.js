import Post from '../../ui-components/Post/Post.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    'post': Post
  },

  created () {
    this.getPosts()
  },

  computed: {
    ...mapState('login', ['isLogin']),
    ...mapState('posts', ['posts'])
  },

  methods: {
    ...mapActions('posts', ['getPosts'])
  }
}
