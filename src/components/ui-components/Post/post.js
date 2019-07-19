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
      title: this.post.title,
      body: this.post.content.body,
      comment: ''
    }
  },

  computed: {
    ...mapState('posts', ['comments']),
    ...mapState('login', ['currentUser']),
  },

  validations: {
    title: {
      required
    },
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
      this.updatePost({ id: this.post.id, body: this.body, router: this.$router, index: this.index })
    },

    handleDelete () {
      console.log(this.post)
      this.deletePost(this.post.id)
    },

    toggleVisibleComments () {
      // console.log(this);
      this.showComments = !this.showComments
      this.getComments(this.post.id)
      // console.log(this.comments[`${this.post.id}`])
    },

    handleComment () {
      this.newComment({ commentText: this.comment,
          userId: JSON.parse(localStorage.getItem('User')).id,
          userName: this.currentUser,
          postId: this.post.id,
          index: this.index })
        this.comment = ''
    }
  }
}
