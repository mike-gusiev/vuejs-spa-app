import { mapState, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Post',

  props: {
    post: Object
  },

  data () {
    return {
      isEdit: false,
      title: this.post.title,
      body: this.post.body
    }
  },

  computed: {
    ...mapState('post', ['posts'])
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
      this.isEdit = true
    },

    ...mapActions({
      'updatePost': 'posts/updatePost',
      'deletePost': 'posts/deletePost'
    }),

    validateTitle (value) {
      this.title = value
      this.$v.title.$touch()
    },

    validateBody (value) {
      this.body = value
      this.$v.body.$touch()
    },

    handleUpdate () {
      if (!this.$v.$invalid) {
        this.isEdit = false
        this.updatePost({ id: this.post.id, title: this.title, body: this.body, router: this.$router })
      }
    },

    handleDelete () {
      this.deletePost(this.post.id)
    }
  }
}
