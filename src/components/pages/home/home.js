import Post from '../../ui-components/Post/Post.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    'post': Post
  },
  computed: {
    ...mapState('login', ['isLogin']),
    ...mapState('posts', ['posts'])
  },
  methods: {
    ...mapActions('login', ['loginStatus']),
    ...mapActions('posts', ['getPosts'])
  },
  created () {
    this.loginStatus()
    this.getPosts()
  }
}
