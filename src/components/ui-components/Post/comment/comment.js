import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Comment',

  props: {
    comment: Object,
    index: Number,
    postOwnerId: Number
  },

  data () {
    return {
      isEdit: false,
      textComment: this.comment.content
    }
  },

  validations: {
    textComment: {
      required
    }
  },

  computed: {
    currentUserId: () => {
      return JSON.parse(localStorage.getItem('User')).id
    }
  },

  methods: {
    ...mapActions({
      updateComment: 'posts/updateComment',
      deleteComment: 'posts/deleteComment'
    }),

    handleEditComment () {
      this.isEdit = !this.isEdit
    },

    handleUpdate () {
      if (!this.$v.$invalid) {
        this.updateComment({ id: this.comment.id,
          content: this.textComment,
          index: this.index,
          userName: this.comment.owner.name,
          userId: this.comment.owner.id,
          postId: this.comment.postId
        })
        this.isEdit = false
      }
    },

    handleDelete () {
      this.deleteComment({ id: this.comment.id, postId: this.comment.postId })
    }
  }

}
