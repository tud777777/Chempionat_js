<script setup>
  defineProps({
    error: Array,
  })
</script>

<template>
  <div class="form_error" v-if="error">
    {{ error.join(', ') }}
  </div>
</template>

<style scoped>

</style>