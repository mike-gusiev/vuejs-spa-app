<template>
  <div class="post" v-on:dblclick="changePost">
      <div v-if="isEdit">
          <form @submit.prevent="handleUpdate">
              <input type="text" placeholder="Title" v-model="$v.title.$model">
                <div v-if="isError && !$v.title.required" class="error-text"> Title is required</div>
              <textarea cols="30" rows="10" placeholder="Description..." v-model="$v.body.$model"/>
                <div v-if="isError && !$v.body.required" class="error-text">Body is required</div>
              <button type="submit" class="button-submit">Update</button>
          </form>
      </div>
      <div v-else>
          <div class="close" @click="handleDelete"></div>
          <div class="post-title">{{post.title}}</div>
          <div class="post-body">{{post.body}}</div>
      </div>
  </div>
</template>

<script src="./post.js"></script>

<style scoped lang="scss">
  @import './post.scss';
</style>
