<template>
  <div>
    <form @submit.prevent="userRegistration" class="form-registration">
      <input type="text"
             v-model="name"
             placeholder="Name"
             class="form-input"
             autocomplete="off"
             @blur="$v.name.$touch()"
      />

        <div class="text-error" v-if="$v.name.$dirty && !$v.name.required">Name is required</div>
        <div class="text-error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>

      <input type="password"
             v-model="password"
             placeholder="Password"
             class="form-input"
             autocomplete="off"
             @blur="$v.password.$touch()"
      />

        <div class="text-error" v-if="$v.password.$dirty && !$v.password.required">Password is required</div>
        <div class="text-error" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}}</div>

      <input type="password"
             v-model="confirmPassword"
             placeholder="Confirm password"
             class="form-input"
             autocomplete="off"
             @blur="$v.confirmPassword.$touch()"
      />

        <div v-if="!$v.confirmPassword.sameAsPassword" class="error-text">Passwords must be identical.</div>

      <button type="submit" class="button-submit">Registration</button>
    </form>
  </div>
</template>

<script src="./registration.js"></script>

<style lang="scss" scoped>
  @import "./registration";
</style>
