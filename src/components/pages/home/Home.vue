<template>
  <div>
    <div class="wrapper">
      <div v-if="isLogin">
        <div v-for="(post, index) in posts" :key="index">
          <post :post="post" :index="index"/>
        </div>
      </div>
      <div v-else class="home-welcome">
        Welcome to the home page {{isLogin}}
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped>
  @import './home.scss';
</style>
