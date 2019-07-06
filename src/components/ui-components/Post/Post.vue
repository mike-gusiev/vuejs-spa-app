<template>
  <div class="post" v-on:dblclick="changePost">
      <div v-if="isEdit">
          <form>
              <input type="text" placeholder="Title" v-model="title">
              <textarea cols="30" rows="10" placeholder="Description..." v-model="body"/>
              <div v-if="isError" class="error">Incorrect title or description</div>
              <input type="submit" value="Submit" @click="validateForm">
          </form>
      </div>
      <div v-else>
          <div class="post-title">{{post.title}}</div>
          <div class="post-body">{{post.body}}</div>
      </div>
  </div>
</template>

<script src="./post.js"></script>

<style scoped lang="scss">
  @import './post.scss';
</style>
