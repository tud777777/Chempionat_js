<script setup>

</script>

<template>
  <div class="container mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
    <div class="p-6 mb-10 sm:px-0 bg-white shadow-xl rounded wrapper">
      <h1>Заказ на луне</h1>
      <label class="drop-zone block mt-10">
        Перетащите сюда файл
        <input type="file">
      </label>
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Подпись</label>
        </div>
        <div class="mt-2">
          <input id="message" name="message" type="text"  class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="mt-4">
        <button type="submit" class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Сделать подпись</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1{
    font-weight: bold;
    font-size: 24px;
  }
  .container{
    padding: 20px;
  }
  .wrapper{
    padding: 20px;
  }
  .drop-zone{
    padding: 20px;
    border: 5px dashed #eee;
    text-align: center;
  }
  .drop-zone input{
    display: none;
  }
</style>