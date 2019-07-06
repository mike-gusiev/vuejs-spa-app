<template>
  <div>
    <layout-header></layout-header>
    <form >
      <input type="text" id="login" v-model="name" placeholder="Name" class="input-form" autocomplete="off"/>
      <input type="password" id="password" v-model="password" placeholder="Password" class="input-form" autocomplete="off"/>
      <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Confirm password" class="input-form" autocomplete="off"/>
      <div v-if="isError" class="error">Incorrect name or password</div>
      <input type="submit" @click="handleRegistration" value="Submit" class="input-submit">
    </form>
  </div>
</template>

<script src="./registration.js"></script>

<style lang="scss" scoped>
  @import "./registration";
</style>
