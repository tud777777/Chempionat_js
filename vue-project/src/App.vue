<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
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
