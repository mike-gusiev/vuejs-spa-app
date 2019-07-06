<template>
  <div>
    <layout-header></layout-header>
    <form onsubmit="handleLogin">
      <input type="text" id="login" v-model="name" placeholder="Name" class="input-form" autocomplete="off"/>
      <input type="password" id="password" v-model="password" placeholder="Password" class="input-form" autocomplete="off"/>
      <div v-if="isError" class="error">Incorrect name or password</div>
      <input type="submit" @click="validateForm" value="Submit" class="input-submit">
    </form>
  </div>
</template>

<script src="./login.js"></script>

<style lang="scss" scoped>
  @import "./login";
</style>
