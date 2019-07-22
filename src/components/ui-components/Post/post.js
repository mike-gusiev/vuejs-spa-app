import { mapState, mapActions, mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import Comment from './comment/Comment.vue'

export default {
  name: 'Post',

  components: {
    'comment': Comment
  },

  props: {
    post: Object,
    index: Number
  },

  data () {
    return {
      isEdit: false,
      showComments: false,
      body: this.post.content.body,
      comment: ''
    }
  },

  computed: {
    ...mapState('posts', ['comments']),
    ...mapState('login', ['currentUser']),
    currentUserId:  () => {
        return JSON.parse(localStorage.getItem('User')).id
    }
  },

  validations: {
    body: {
      required
    }
  },

  methods: {
    changePost () {
      this.isEdit = !this.isEdit
    },

    ...mapActions({
      'updatePost': 'posts/updatePost',
      'deletePost': 'posts/deletePost',
      'getComments': 'posts/getComments',
      'newComment': 'posts/newComment'
    }),

    handleUpdate () {
      if (!this.$v.$invalid) {

      }
      this.isEdit = false
      this.updatePost({ id: this.post.id, userId: this.post.owner.id, userName: this.currentUser, body: this.body, router: this.$router, index: this.index })
    },

    handleDelete () {
      console.log(this.post)
      this.deletePost(this.post.id)
    },

    toggleVisibleComments () {
        if (this.showComments === false) {
            this.getComments(this.post.id)
        }
        this.showComments = !this.showComments
    },

    handleComment () {
      this.newComment({ content: this.comment,
          userId: this.currentUserId,
          userName: this.currentUser,
          postId: this.post.id,
          index: this.index })
        this.comment = ''
    }
  }
}
