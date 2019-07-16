<template>
  <div>
    <form @submit.prevent="handleRegistration">
      <input type="text"
             v-model="name"
             placeholder="Name"
             class="input-form"
             autocomplete="off"
             @blur="$v.name.$touch()"
      />

        <div v-if="$v.name.$dirty && !$v.name.required" class="error-text">Name is required</div>
        <div v-if="!$v.name.minLength" class="error-text">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>

      <input type="password"
             v-model="password"
             placeholder="Password"
             class="input-form"
             autocomplete="off"
             @blur="$v.password.$touch()"
      />

        <div v-if="$v.password.$dirty && !$v.password.required" class="error-text">Password is required</div>
        <div v-if="!$v.password.minLength" class="error-text">Password must have at least {{$v.password.$params.minLength.min}}</div>

      <input type="password"
             id="confirm-password"
             v-model="confirmPassword"
             placeholder="Confirm password"
             class="input-form"
             autocomplete="off"
             @blur="$v.confirmPassword.$touch()"
      />

        <div v-if="!$v.confirmPassword.sameAsPassword" class="error-text">Passwords must be identical.</div>

      <button type="submit" class="input-submit">Reqistration</button>
    </form>
  </div>
</template>

<script src="./registration.js"></script>

<style lang="scss" scoped>
  @import "./registration";
</style>
