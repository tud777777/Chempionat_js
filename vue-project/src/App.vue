<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import {provide, ref} from "vue";
import router from "@/router/index.js";

const token = ref(localStorage.getItem("user-token"))
const updateToken = (newToken) => {
  if (!newToken) {
    localStorage.removeItem("user-token")
  }else {
    localStorage.setItem("user-token", newToken)
  }
  token.value = newToken
}
provide('token', token)
provide('updateToken', updateToken)
</script>

<template>
  <Header />

  <RouterView />
</template>
 <style>
  .form_error{
    color:red;
  }
  .has_error{
    border: 1px solid red !important;
  }
 </style>
