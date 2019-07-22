<template>
  <div class="post">
      <div v-if="isEdit" class="post-edit">
          <button class="post-edit-close" @click="changePost"><i class="fas fa-times"></i></button>
          <form @submit.prevent="handleUpdate" class="form-updatePost">
              <textarea cols="30"
                        rows="10"
                        placeholder="Description..."
                        v-model="body"
                        @blur="$v.body.$touch()"
              ></textarea>
                <div v-if="!$v.body.required" class="error-text">Body is required</div>
              <button type="submit" class="button-submit" @click="handleUpdate">Update</button>
          </form>
      </div>

      <div v-else>
          <div class="post-user__info">
              <div class="avatar">
                  {{post.owner.name.slice(0, 1)}}
              </div>
              <div class="user-name">{{post.owner.name}}</div>

              <div v-if="post.owner.id === currentUserId" class="post-actions">
                  <button class="edit" @click="changePost"><i class="far fa-edit"></i></button>
                  <button class="delete" @click="handleDelete"><i class="fas fa-trash"></i></button>
              </div>
          </div>

          <div class="post-body">{{post.content.body}}</div>

          <button class="handle-comments" @click="toggleVisibleComments"><i class="fas fa-comments"></i></button>

          <div v-show="showComments" class="post-comments">
            <div v-for="(comment, index) in comments[`${post.id}`]" :key="index">
                <comment :comment="comment" :postOwnerId="post.owner.id" :index="index"></comment>
            </div>
              <form class="form-comment" @submit.prevent="handleComment">
                  <textarea class="text-comment" v-model="comment"></textarea>
                  <button class="comment-submit">Add comment</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script src="./post.js"></script>

<style scoped lang="scss">
  @import './post.scss';
</style>
