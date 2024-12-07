<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import {provide, ref} from "vue";
import router from "@/router/index.js";

const token = ref(localStorage.getItem("user-token"))
const id = ref(localStorage.getItem("user-id"))
const updateToken = (newToken) => {
  if (!newToken) {
    localStorage.removeItem("user-token")
  }else {
    localStorage.setItem("user-token", newToken)
  }
  token.value = newToken
  updateId(null)
}
const updateId = (newId) => {
  if (!newId) {
    localStorage.removeItem("user-id")
  }else {
    localStorage.setItem("user-id", newId)
  }
  id.value = newId
}
provide('token', token)
provide('user_id', id)
provide('updateToken', updateToken)
provide('updateUserId', updateId)
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
