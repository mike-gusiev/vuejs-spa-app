<template>
  <header>
    <div class="wrapper">
      <div v-if="isLogin" class="home-login">
        <router-link class="header-link" active-class="active-link" :to="{name: 'UserPage', params: {user: currentUser}}" exact>
            {{currentUser}}
        </router-link>
        <router-link class="header-link" active-class="active-link" :to="{name: 'Home'}" exact>
            Home
        </router-link>
        <button @click="userLogOut" class="button-exit">
          Logout
        </button>
      </div>
      <div v-else class="home-link">
        <router-link :to="{name: 'Login'}" class="header-link" active-class="active-link">Sign In</router-link>
        <router-link :to="{name: 'Registration'}" class="header-link" active-class="active-link">Sign Up</router-link>
      </div>
    </div>
  </header>
</template>

<script src="./header.js"></script>

<style lang="scss" scoped>
  @import './header.scss';
</style>
